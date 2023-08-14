import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SEARCH_TEXT_API } from "./constants";
import { formatTime } from "../utils/helper";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { searchText } from "../utils/videoInfo";
import {
  AdjustmentsHorizontalIcon,
  ArrowLongDownIcon,
  ArrowLongUpIcon,
} from "@heroicons/react/24/outline";

const SearchVideos = () => {
  const dispatch = useDispatch();
  const text = useSelector((store) => store.videoDetails.text);
  const [videoInfo, setVideoInfo] = useState([]);
  const [originalVideosArray, setOrginalVideosArray] = useState([]);
  const [sortVideosOrder, setSortVideosOrder] = useState("asc");

  const [params] = useSearchParams();

  if (text === "") {
    dispatch(searchText(params.get("search_query")));
  }

  const getSearchQueryVideos = async () => {
    const data = await fetch(SEARCH_TEXT_API + text);
    const jsonData = await data.json();
    setVideoInfo(jsonData?.items);
    setOrginalVideosArray(jsonData?.items);
  };

  useEffect(() => {
    getSearchQueryVideos();
  }, [text]);

  const sortByDate = (sortOrder) => {
    const sortedArray = [...videoInfo].sort((a, b) => {
      if (sortOrder === "asc") {
        setSortVideosOrder("desc");
        return (
          new Date(b.snippet.publishedAt) - new Date(a.snippet.publishedAt)
        );
      }
      if (sortOrder === "desc") {
        setSortVideosOrder("def");
        return (
          new Date(a.snippet.publishedAt) - new Date(b.snippet.publishedAt)
        );
      }
    });

    if (sortOrder === "def") {
      setSortVideosOrder("asc");
      setVideoInfo(originalVideosArray);
    } else setVideoInfo(sortedArray);
  };

  return (
    <div className="flex flex-col">
      <div className="flex items-center">
        <span
          className="cursor-pointer bg-gray-100 hover:bg-gray-200 h-8 w-36 flex justify-center items-center rounded-2xl p-1 text-sm font-semibold mt-2 ml-4"
          onClick={() => sortByDate(sortVideosOrder)}
        >
          <AdjustmentsHorizontalIcon className="h-6 w-6" />
          <span className="pl-2 pr-1">Upload date</span>
        </span>
        <span className="mt-2 ml-2 h-8 w-8 p-1 rounded-full flex justify-center items-center">
          {sortVideosOrder === "desc" ? (
            <span className="bg-gray-200 ml-2 h-8 w-8 p-1 rounded-full flex justify-center items-center">
              <ArrowLongUpIcon className="h-4 w-4 bg-gray-200" />
            </span>
          ) : sortVideosOrder === "def" ? (
            <span className="bg-gray-200 ml-2 h-8 w-8 p-1 rounded-full flex justify-center items-center">
              <ArrowLongDownIcon className="h-4 w-4 bg-gray-200" />
            </span>
          ) : null}
        </span>
      </div>
      <div className="mx-5">
        {videoInfo.map((video) => {
          return (
            <Link
              to={"/watch?v=" + video.id.videoId}
              key={video?.id?.videoId}
              className="my-2"
            >
              <section className="flex my-4">
                <div className="w-[320px] h-[180px] ">
                  <img
                    alt="thumbnail"
                    src={video.snippet?.thumbnails?.medium?.url}
                    className="rounded-2xl"
                  />
                </div>
                <div className="ml-3">
                  <span className="flex flex-col font-medium text-lg">
                    {video?.snippet?.title}
                  </span>
                  <div>
                    <span className="text-xs mr-1">views</span>
                    <span className="text-xs mr-1">•</span>
                    <span className="text-xs">
                      {formatTime(video?.snippet?.publishedAt)}
                    </span>
                  </div>
                  <div className="text-xs my-4">
                    {video?.snippet?.channelTitle}
                  </div>
                  <div className="text-xs">{video?.snippet?.description}</div>
                </div>
              </section>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SearchVideos;
