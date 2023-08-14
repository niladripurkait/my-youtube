import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { UserCircleIcon } from "@heroicons/react/24/solid";

const MyLiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");

  const dispatch = useDispatch();
  // const messages=useSelector(=)
  const myMessageHandler = () => {
    dispatch(
      addMessage({
        name: "Niladri Purkait",
        message: liveMessage,
      })
    );
    setLiveMessage("");
  };

  return (
    <div className="flex p-3 border border-black w-full rounded-b-xl">
      <UserCircleIcon className="h-6 px-2" />
      <span className="flex flex-col w-full">
        <span className="font-bold">Niladri Purkait</span>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            myMessageHandler();
          }}
        >
          <input
            type="text"
            className="border border-b-black w-full outline-none"
            placeholder="Chat..."
            value={liveMessage}
            onChange={(e) => setLiveMessage(e.target.value)}
          ></input>
          <button className="bg-slate-300">Send</button>
        </form>
      </span>
    </div>
  );
};

export default MyLiveChat;
