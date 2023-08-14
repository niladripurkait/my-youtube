import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { Link, useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addVideoId } from "../utils/videoInfo";
import ShimmerUI from "./ShimmerUI";

const VideoContainer = ({ api }) => {
  const [videos, setVideos] = useState([]);
  const dispatch = useDispatch();
  const [params] = useSearchParams();
  const [cursorInside, setCursorInside] = useState(false);
  const [scrollPosition, setScrollPosition] = useState({
    x: 0,
    y: 0,
  });

  const getVideos = async () => {
    const data = await fetch(api);
    const json = await data.json();
    setVideos(json?.items);
  };

  useEffect(() => {
    getVideos();
  }, [api]);

  useEffect(() => {
    const handleScroll = () => {
      if (!cursorInside) {
        window.scrollTo(scrollPosition.x, scrollPosition.y);
      }
      if (cursorInside) {
        setScrollPosition({ x: window.scrollX, y: window.scrollY });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [cursorInside, scrollPosition]);

  return videos.length === 0 ? (
    <ShimmerUI />
  ) : (
    <>
      <div
        className="w-full h-full flex flex-wrap justify-center py-5"
        onMouseEnter={() => setCursorInside(true)}
        onMouseLeave={() => setCursorInside(false)}
      >
        {params.get("v") === null
          ? videos.map((video) => (
              <Link
                className="lg:h-[289px] md:h-[289px]sm:h-[240px] m-[9px] mb-5 lg:mb-8 md:mb-8"
                key={video.id}
                to={"/watch?v=" + video.id}
                onClick={() => dispatch(addVideoId(video.id))}
              >
                <VideoCard info={video} />
              </Link>
            ))
          : videos.map((video) => (
              <Link
                className="h-[289px] m-[9px] mb-8"
                key={video.id.videoId}
                to={"/watch?v=" + video.id.videoId}
                onClick={() => dispatch(addVideoId(video.id.videoId))}
              >
                <VideoCard info={video} />
              </Link>
            ))}
      </div>
    </>
  );
};

export default VideoContainer;
