import React from "react";
import ButtonsList from "./ButtonsList";
import VideoContainer from "./VideoContainer";
import { YOUTUBE_VIDEOS_API } from "./constants";

const MainContainer = () => {
  return (
    <>
      <div className="w-full">
        <ButtonsList />
        <VideoContainer api={YOUTUBE_VIDEOS_API} />
      </div>
    </>
  );
};

export default MainContainer;
