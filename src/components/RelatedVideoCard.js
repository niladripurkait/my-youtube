import React from "react";
import { formatTime } from "../utils/helper";
import { useDispatch } from "react-redux";
import { addVideoId } from "../utils/videoInfo";

const RelatedVideoCard = ({ snippet, id }) => {
  // console.log(snippet);
  // console.log(id);
  const dispatch = useDispatch();
  const setVideoDetails = () => {
    dispatch(addVideoId(id.videoId));
  };

  return (
    <div className="flex justify-center w-full" onClick={setVideoDetails}>
      <span className="w-1/2 ">
        <img
          alt="thumbnail"
          src={snippet.thumbnails.medium.url}
          className="h-28 w-full rounded-xl"
        />
      </span>

      <span className="flex flex-col ml-2 w-1/2">
        <span className="text-sm font-semibold line-clamp-2">
          {snippet.title}
        </span>

        <span className="text-xs my-1">{snippet.channelTitle}</span>

        <span className="flex text-xs">
          {/* <span className="mr-1">views</span> */}
          {/* <span className="mr-1">•</span> */}
          <span>{formatTime(snippet.publishedAt)}</span>
        </span>
      </span>
    </div>
  );
};

export default RelatedVideoCard;
