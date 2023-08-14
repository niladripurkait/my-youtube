import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import yt_shorts from "../images/yt_shorts.png";
import { GoHome, GoHistory, GoVideo } from "react-icons/go";
import {
  MdOutlineSubscriptions,
  MdOutlineVideoLibrary,
  MdOutlineWatchLater,
  MdSportsHandball,
} from "react-icons/md";
import { SiYoutubemusic, SiYoutubegaming } from "react-icons/si";
import { BsDownload, BsNewspaper, BsMusicNoteList } from "react-icons/bs";
import { BiLike, BiHelpCircle, BiMoviePlay } from "react-icons/bi";
import { FiTrendingUp } from "react-icons/fi";
import { CiSettings } from "react-icons/ci";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;

  return (
    <>
      <div className="w-[230px] h-[calc(100vh-73px)] p-2 z-[12] bg-white overflow-y-hidden hover:overflow-y-scroll fixed flex flex-col shrink-0 grow-0 basis-[230px]">
        <ul>
          <li className="mx-1 w-[200px] hover:bg-gray-200 rounded-xl pl-1">
            <Link to="/" className="flex items-center">
              <GoHome className="h-6 w-6 m-2" />
              <h1 className="ml-4 text-sm">Home</h1>
            </Link>
          </li>

          <li className="mx-1 w-[200px] h-6 py-5 hover:bg-gray-200 rounded-xl flex items-center cursor-pointer pl-[2px]">
            <img alt="yt_shorts" src={yt_shorts} className="h-11 w-11" />
            <h1 className="ml-4 text-sm"> Shorts</h1>
          </li>

          <li className="mx-1 w-[200px] hover:bg-gray-200 rounded-xl flex items-center cursor-pointer pl-1">
            <MdOutlineSubscriptions className="h-6 w-6 m-2" />
            <span className="">
              <h1 className="ml-4 text-sm"> Subscriptions</h1>
            </span>
          </li>

          <li className="mx-1 w-[200px] hover:bg-gray-200 rounded-xl flex items-center cursor-pointer pl-1">
            <SiYoutubemusic className="h-6 w-6 m-2" />
            <h1 className="ml-4 text-sm"> YouTube Music</h1>
          </li>
        </ul>

        <span className=" flex items-center w-full p-1 h-[25px] justify-center ">
          <span className="w-full border border-b-gray-100"></span>
        </span>

        <ul>
          <li className="mx-1 w-[200px] hover:bg-gray-200 rounded-xl flex items-center cursor-pointer pl-1">
            <MdOutlineVideoLibrary className="h-6 w-6 m-2" />
            <h1 className="ml-4 text-sm">Library</h1>
          </li>

          <li className="mx-1 w-[200px] hover:bg-gray-200 rounded-xl flex items-center cursor-pointer pl-1">
            <GoHistory className="h-6 w-6 m-2" />
            <h1 className="ml-4 text-sm">History</h1>
          </li>

          <li className="mx-1 w-[200px] hover:bg-gray-200 rounded-xl flex items-center cursor-pointer pl-1">
            <GoVideo className="h-6 w-6 m-2" />
            <h1 className="ml-4 text-sm">Your Videos</h1>
          </li>

          <li className="mx-1 w-[200px] hover:bg-gray-200 rounded-xl flex items-center cursor-pointer pl-1">
            <MdOutlineWatchLater className="h-6 w-6 m-2" />
            <h1 className="ml-4 text-sm">Watch Later</h1>
          </li>

          <li className="mx-1 w-[200px] hover:bg-gray-200 rounded-xl flex items-center cursor-pointer pl-1">
            <BsDownload className="h-6 w-6 m-2" />
            <h1 className="ml-4 text-sm">Downloads</h1>
          </li>

          <li className="mx-1 w-[200px] hover:bg-gray-200 rounded-xl flex items-center cursor-pointer pl-1">
            <BiLike className="h-6 w-6 m-2" />
            <h1 className="ml-4 text-sm w-20 whitespace-nowrap">
              Liked Videos
            </h1>
          </li>
        </ul>

        <span className=" flex items-center w-full p-1 h-[25px] justify-center ">
          <span className="w-full border border-b-gray-100"></span>
        </span>

        <h1 className="font-base ml-3 mb-2">Explore</h1>
        <ul>
          <li className="mx-1 w-[200px] hover:bg-gray-200 rounded-xl flex items-center cursor-pointer pl-1">
            <FiTrendingUp className="h-6 w-6 m-2" />
            <h1 className="ml-4 text-sm">Trending</h1>
          </li>

          <li className="mx-1 w-[200px] hover:bg-gray-200 rounded-xl flex items-center cursor-pointer pl-1">
            <BsMusicNoteList className="h-6 w-6 m-2" />
            <h1 className="ml-4 text-sm">Music</h1>
          </li>

          <li className="mx-1 w-[200px] hover:bg-gray-200 rounded-xl flex items-center cursor-pointer pl-1">
            <BiMoviePlay className="h-6 w-6 m-2" />
            <h1 className="ml-4 text-sm">Movies</h1>
          </li>

          <li className="mx-1 w-[200px] hover:bg-gray-200 rounded-xl flex items-center cursor-pointer pl-1">
            <SiYoutubegaming className="h-6 w-6 m-2" />
            <h1 className="ml-4 text-sm">Gaming</h1>
          </li>

          <li className="mx-1 w-[200px] hover:bg-gray-200 rounded-xl flex items-center cursor-pointer pl-1">
            <BsNewspaper className="h-6 w-6 m-2" />
            <h1 className="ml-4 text-sm">News</h1>
          </li>

          <li className="mx-1 w-[200px] hover:bg-gray-200 rounded-xl flex items-center cursor-pointer pl-1">
            <MdSportsHandball className="h-6 w-6 m-2" />
            <h1 className="ml-4 text-sm">Sports</h1>
          </li>
        </ul>

        <span className=" flex items-center w-full p-1 h-[25px] justify-center ">
          <span className="w-full border border-b-gray-100"></span>
        </span>

        <ul>
          <li className="mx-1 hover:bg-gray-200 rounded-xl flex items-center cursor-pointer pl-1">
            <CiSettings className="h-6 w-6 m-2" />
            <h1 className="ml-4 text-sm">Settings</h1>
          </li>

          <li className="mx-1 hover:bg-gray-200 rounded-xl flex items-center cursor-pointer pl-1">
            <BiHelpCircle className="h-6 w-6 m-2" />
            <h1 className="ml-4 text-sm">Help</h1>
          </li>
        </ul>
      </div>

      <div className="flex shrink-0 grow-0 basis-[230px] fixed lg:relative"></div>
    </>
  );
};

export default SideBar;
