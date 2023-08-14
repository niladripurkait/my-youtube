import React, { useEffect, useState } from "react";
import { formatNumber, formatTime } from "../utils/helper";
import { CHANNEL_LOGO_API, VIEW_COUNT } from "./constants";

const VideoCard = ({ info }) => {
  const { snippet } = info;
  const { thumbnails, title, channelTitle, publishedAt, channelId } = snippet;
  const [channelLogo, setChannelLogo] = useState([]);
  const [views, setViews] = useState("");

  const getChannelLogo = async () => {
    const data = await fetch(CHANNEL_LOGO_API + channelId);
    const jsonData = await data.json();
    setChannelLogo(jsonData?.items[0]?.snippet?.thumbnails?.default?.url);
  };

  const getViewCount = async () => {
    const data = await fetch(VIEW_COUNT + info?.id?.videoId);
    const json = await data.json();
    setViews(json?.items[0]?.statistics?.viewCount);
  };

  useEffect(() => {
    getChannelLogo();
    getViewCount();
  }, []);

  return (
    <div className="flex flex-col lg:h-[289px] md:h-[289px] sm:h-[240px] w-80">
      <img
        className="lg:rounded-2xl md:rounded-2xl"
        alt="thumbnail"
        src={thumbnails.medium.url}
      />

      <span className="flex items-start mt-1 lg:mt-3 md:mt-3 w-full px-1 sm:px-1 lg:px-0 md:px-0">
        <div className="flex w-10">
          <img
            alt="channel_logo"
            src={channelLogo}
            className="w-9 h-9 mt-1 rounded-full "
          />
        </div>

        <span className="ml-2 flex  flex-col w-[284px]">
          <h2 className="text-sm sm:text-sm md:text-base lg:text-base font-medium max-h-12 overflow-hidden text-ellipsis line-clamp-2">
            {title}
          </h2>

          <div className="flex justify-start lg:flex-col md:flex-col text-xs sm:text-xs md:text-sm lg:text-sm">
            <span className="flex items-center text-gray-600  lg:mt-1 md:mt-1 ">
              {channelTitle}
            </span>

            <span className="text-gray-600 px-1 lg:hidden md:hidden">•</span>

            <div className="flex items-center">
              <span className="text-gray-600 ">
                {
                  <span className="pr-1">
                    {info.statistics === undefined
                      ? formatNumber(views)
                      : formatNumber(info?.statistics?.viewCount)}
                  </span>
                }
                views
              </span>

              <span className="text-gray-600 px-1">•</span>
              <span className="text-gray-600 ">{formatTime(publishedAt)}</span>
            </div>
          </div>
        </span>
      </span>
    </div>
  );
};

export default VideoCard;
