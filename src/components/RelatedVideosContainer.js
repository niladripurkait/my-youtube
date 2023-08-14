import React, { useEffect, useState } from "react";
import { RELATED_SEARCH } from "./constants";
import RelatedVideoCard from "./RelatedVideoCard";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const RelatedVideosContainer = () => {
  const id = useSelector((store) => store.videoDetails.id);
  // console.log(id);

  const [videos, setVideos] = useState([]);

  const fetchRelatedVideos = async () => {
    const data = await fetch(RELATED_SEARCH + id);
    console.log(data);
    const jsonData = await data.json();
    console.log(jsonData?.items);
    setVideos(jsonData?.items);
  };

  useEffect(() => {
    fetchRelatedVideos();
  }, [id]);

  // console.log(videoId);
  return (
    <div className="mr-2">
      {videos?.map((video) => {
        return (
          <Link
            to={"/watch?v=" + video?.id?.videoId}
            key={video?.id?.videoId}
            className="m-2 p-1"
          >
            <RelatedVideoCard {...video} />
          </Link>
        );
      })}
    </div>
  );
};

export default RelatedVideosContainer;
