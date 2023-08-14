import React, { useEffect, useState } from "react";
import { COMMENTS_API } from "./constants";
import CommentsList from "./CommentsList";
import { useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";

const CommentsContainer = () => {
  // const [params] = useSearchParams();
  const id = useSelector((store) => store.videoDetails.id);
  // const [videoId, setVideoId] = useState(params.get("v"));
  const [comments, setComments] = useState([]);
  // console.log(videoId);

  useEffect(() => {
    // setVideoId(params.get("v"));
    getComments();
  }, [id]);

  const getComments = async () => {
    const data = await fetch(COMMENTS_API + id);
    const jsonData = await data.json();
    // console.log(jsonData);
    setComments(jsonData.items);
  };

  return (
    <div>
      <div className="p-3 m-2 font-bold">Comments</div>
      <div>
        <CommentsList comments={comments} />
      </div>
      <div></div>
    </div>
  );
};

export default CommentsContainer;
