import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/appSlice";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
import MyLiveChat from "./MyLiveChat";
import VideoDescription from "./VideoDescription";
import RelatedVideosContainer from "./RelatedVideosContainer";
import { addVideoId } from "../utils/videoInfo";

const WatchPage = () => {
  const [params] = useSearchParams();
  const dispatch = useDispatch();

  dispatch(addVideoId(params.get("v")));

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(closeMenu());
  }, []);

  return (
    <div className="h-screen w-full">
      <div className="flex w-full items-start">
        <section className="flex flex-col">
          <span>
            <iframe
              className="p-2 m-3"
              width="1000"
              height="600"
              src={
                "https://www.youtube.com/embed/" +
                params.get("v") +
                "?autoplay=1"
              }
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              autoFocus
            ></iframe>
          </span>
          <span>
            <VideoDescription />
          </span>
          <div className="w-[1000px]">
            {/* <div className="w-3/5"> */}
            <CommentsContainer />
          </div>
        </section>
        {/* <div className="w-full m-5 ml-0 mt-0 mb-0 p-2 pt-0  h-[600px]">
          <span className="w-full m-5 ml-0 mb-0 p-2 h-[600px] border border-black rounded-xl rounded-b-none flex flex-col-reverse bg-slate-100 overflow-y-scroll ">
            <LiveChat />
          </span>
          <MyLiveChat />
        </div> */}
        <div>
          <RelatedVideosContainer />
        </div>
      </div>
    </div>
  );
};

export default WatchPage;
