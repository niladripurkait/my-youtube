import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { SEARCH_BY_ID, SUBSCRIBERS_COUNT } from "./constants";
import { formatNumber } from "../utils/helper";
import {
  HandThumbDownIcon,
  HandThumbUpIcon,
  ShareIcon,
  ArrowDownTrayIcon,
} from "@heroicons/react/24/outline";
import { CHANNEL_LOGO_API } from "./constants";
import { useSelector } from "react-redux";
import { BiLike, BiDislike } from "react-icons/bi";
import { PiShareFatLight } from "react-icons/pi";

const VideoDescription = () => {
  // const [params] = useSearchParams();
  const id = useSelector((store) => store.videoDetails.id);
  // const [videoId, setVideoId] = useState(id);
  const [videoInfo, setVideoInfo] = useState([]);
  const { snippet, statistics } = videoInfo;
  const [channelLogo, setChannelLogo] = useState("");
  const [subscribersCount, setSubscribersCount] = useState("");
  const [showDescription, setShowDescription] = useState(false);

  const result = async () => {
    // const data = await fetch(SEARCH_BY_ID + videoId);
    const data = await fetch(SEARCH_BY_ID + id);
    const json = await data.json();
    setVideoInfo(json?.items[0]);
  };

  const getChannelLogo = async () => {
    const data = await fetch(CHANNEL_LOGO_API + snippet.channelId);
    const jsonData = await data.json();
    setChannelLogo(jsonData?.items[0]?.snippet?.thumbnails?.default?.url);
  };

  const getSubscribersCount = async () => {
    const data = await fetch(SUBSCRIBERS_COUNT + snippet.channelId);
    const jsonData = await data.json();
    setSubscribersCount(jsonData?.items[0].statistics.subscriberCount);
  };

  useEffect(() => {
    // setVideoId(params.get("v"));
    result();
  }, [id]);

  useEffect(() => {
    if (videoInfo.length !== 0) {
      getChannelLogo();
      getSubscribersCount();
    }
  }, [videoInfo]);

  const showMore = () => {
    setShowDescription(!showDescription);
  };

  if (videoInfo.length === 0) return;

  return (
    <div className="flex flex-col pl-3 ml-2 w-[1000px]">
      <span className="font-semibold text-xl">{snippet.title}</span>

      <div className="flex justify-between items-center my-4">
        <div className="flex items-center">
          <img
            alt="channel_logo"
            src={channelLogo}
            className="h-9 w-9 rounded-full"
          />

          <div className="flex flex-col pl-2">
            <span className="font-semibold">{snippet.channelTitle}</span>
            <span className="text-xs">
              {formatNumber(subscribersCount)} subscribers
            </span>
          </div>

          <button className="bg-black text-white rounded-3xl text-sm py-2 px-5 mx-6 font-semibold h-9 flex items-center">
            Subscribe
          </button>
        </div>

        <div className="flex items-center">
          <span className="flex bg-gray-200 w-40 h-9 rounded-3xl p-2">
            <span className="flex justify-center items-center font-semibold text-sm w-2/3  h-full">
              <BiLike className="h-5 w-5" />
              <span className="px-2">{formatNumber(statistics.likeCount)}</span>
            </span>
            <span className="flex justify-center items-center border border-l-black w-1/3  h-full">
              <BiDislike className="h-5 w-5" />
            </span>
          </span>

          <span className="flex justify-center items-center h-9 w-28 bg-gray-200 rounded-3xl p-2 ml-2">
            <PiShareFatLight className="h-5 w-5 mx-1" />
            <span className="font-semibold mx-1">Share</span>
          </span>

          <span className="flex justify-center items-center h-9 w-36 bg-gray-200 rounded-3xl p-2 ml-2">
            <ArrowDownTrayIcon className="h-5 w-5 mx-1" />
            <span className="font-semibold mx-1">Download</span>
          </span>
        </div>
      </div>

      <div>
        <pre
          className={`bg-gray-200 rounded-xl p-3 my-2 w-full overflow-x-auto whitespace-pre-wrap break-words font-sans text-sm ${
            showDescription
              ? ""
              : `h-28 cursor-pointer overflow-hidden text-ellipsis line-clamp-5 hover:bg-gray-300`
          }`}
          onClick={showMore}
        >
          {snippet.description}
        </pre>
      </div>
    </div>
  );
};

export default VideoDescription;
