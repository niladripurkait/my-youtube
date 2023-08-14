import React, { useEffect, useState } from "react";
import yt_logo from "../images/yt_logo.png";
import { toggleMenu } from "../utils/appSlice";
import { useDispatch, useSelector } from "react-redux";
import { YOUTUBE_SEARCH_API } from "./constants";
import { cachedSearch } from "../utils/searchSlice";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  VideoCameraIcon,
  BellAlertIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { UserCircleIcon, MicrophoneIcon } from "@heroicons/react/24/solid";
import { searchText } from "../utils/videoInfo";
import { Link } from "react-router-dom";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestionsList, setSuggestionsList] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);

  const dispatch = useDispatch();
  const cachedSuggestion = useSelector((store) => store.search);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (cachedSuggestion[searchQuery]) {
        // for a search string, if suggestion list is already stored in cache, then setSuggesstionsList from that cache
        setSuggestionsList(cachedSuggestion[searchQuery]);
      } else {
        // or else make API call
        searchQueryFunction();
      }
    }, 200);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  const searchQueryFunction = async () => {
    // console.log("API call - " + searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestionsList(json[1]);

    // for new API call, store the suggestion list result in cache
    dispatch(
      cachedSearch({
        [searchQuery]: json[1],
      })
    );
  };

  const toggleMenuHandler = () => dispatch(toggleMenu());

  const searchResults = (query) => {
    setSearchQuery(query);
    dispatch(searchText(query));
    setShowSuggestion(false);
  };

  return (
    <>
      <div className="fixed w-full bg-white z-20">
        <div className="grid grid-flow-col py-2 h-[56px] items-start">
          <div className="col-span-1 flex pl-5 h-10 items-center">
            <Bars3Icon
              className="h-8 w-8 cursor-pointer"
              onClick={toggleMenuHandler}
            />
            <Link to="/">
              <img
                className="pl-3 h-5 w-26 mx-3"
                alt="ytd-logo"
                src={yt_logo}
              />
            </Link>
          </div>

          <div className="col-span-10 flex flex-row justify-center">
            <div className="flex flex-col w-1/2 justify-center">
              <span className="flex items-center">
                <input
                  className="h-10 pl-3 w-full border border-gray-500 rounded-l-full focus:outline-blue-400 "
                  type="text"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setShowSuggestion(true)}
                  // onBlur={() => setShowSuggestion(false)}
                ></input>
                {searchQuery !== "" && (
                  <span
                    className="-ml-9 p-1 hover:bg-gray-200 rounded-full"
                    onClick={() => setSearchQuery("")}
                  >
                    <XMarkIcon className="h-6 w-6 cursor-pointer  rounded-full" />
                  </span>
                )}
              </span>

              <div className="shadow-xl rounded-lg top-[65px] bg-white flex-1">
                <ul>
                  {suggestionsList.map((suggestion) => {
                    return (
                      showSuggestion && (
                        <Link
                          to={"/results?search_query=" + suggestion}
                          key={suggestion}
                          className="flex items-center p-2  hover:bg-gray-100 cursor-default"
                          onClick={() => searchResults(suggestion)}
                        >
                          <MagnifyingGlassIcon className="h-4 px-3" />
                          <li>{suggestion}</li>
                        </Link>
                      )
                    );
                  })}
                </ul>
              </div>
            </div>

            <Link to={"/results?search_query=" + searchQuery}>
              <button
                className="h-10 p-2 rounded-r-full border border-gray-500 bg-gray-100 hover:bg-gray-200"
                onClick={() => searchResults(searchQuery)}
              >
                <MagnifyingGlassIcon className="h-4 px-2" />
              </button>
            </Link>

            <div className="w-[40px] h-[40px] bg-gray-100 flex justify-center items-center ml-3 hover:bg-gray-200 rounded-full">
              <MicrophoneIcon className="h-5 cursor-pointer" />
            </div>
          </div>

          <span className="flex items-center">
            <div className="w-[40px] h-[40px]  flex justify-center items-center ml-3 hover:bg-gray-200 rounded-full">
              <VideoCameraIcon className="h-6 cursor-pointer" />
            </div>

            <div className="w-[40px] h-[40px]  flex justify-center items-center ml-3 hover:bg-gray-200 rounded-full">
              <BellAlertIcon className="h-6 cursor-pointer" />
            </div>

            <div className="w-[40px] flex justify-center h-10 items-center ml-3 ">
              <UserCircleIcon className="h-8 cursor-pointer" />
            </div>
          </span>
        </div>
      </div>
      <div className="w-full h-[56px]"></div>
    </>
  );
};

export default Head;
