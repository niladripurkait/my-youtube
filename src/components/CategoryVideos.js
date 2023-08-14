import React, { useEffect, useState } from "react";
import { SEARCH_TEXT_API } from "./constants";
import VideoContainer from "./VideoContainer";
import { useSearchParams } from "react-router-dom";
import ButtonsList from "./ButtonsList";

const CategoryVideos = () => {
  const [params] = useSearchParams();
  const [category, setCategory] = useState(params.get("v"));

  useEffect(() => {
    setCategory(params.get("v"));
  }, [params.get("v")]);

  return (
    <div>
      <ButtonsList />
      <VideoContainer api={SEARCH_TEXT_API + category} />
    </div>
  );
};

export default CategoryVideos;
