import React, { useEffect } from "react";
import ChatMesssage from "./ChatMesssage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomMsg, generateRandomName } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const intervalTimer = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomMsg(20),
        })
      );
    }, 1500);

    return () => clearInterval(intervalTimer);
  }, []);

  const messages = useSelector((store) => store.chat.message);

  return (
    <>
      <div>
        {messages.map((msg, i) => (
          <ChatMesssage key={i} name={msg.name} message={msg.message} />
        ))}
      </div>
    </>
  );
};

export default LiveChat;
