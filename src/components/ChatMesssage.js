import React from "react";
import { UserCircleIcon } from "@heroicons/react/24/solid";

const ChatMesssage = ({ name, message }) => {
  return (
    <div className="flex my-2 px-3">
      <UserCircleIcon className="h-6" />
      <span className="px-2 font-bold">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMesssage;
