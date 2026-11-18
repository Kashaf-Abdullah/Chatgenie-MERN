import React from "react";
import { ChatData } from "../context/ChatContext";

const Header = () => {
  const { chats } = ChatData();
  return (
    <div className="min-w-0 flex-1 md:flex-none">
      <p className="truncate text-sm font-medium text-slate-200 md:text-base">
        {chats && chats.length === 0 ? "Create a chat to get started" : "Chat with ChatGenie"}
      </p>
    </div>
  );
};

export default Header;