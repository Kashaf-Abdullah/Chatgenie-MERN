import React, { useEffect, useRef, useState } from "react";
import Sidebar from "../components/Sidebar";
import { GiHamburgerMenu } from "react-icons/gi";
import Header from "../components/Header";
import { ChatData } from "../context/ChatContext";
import { CgProfile } from "react-icons/cg";
import { FaRobot, FaPlus } from "react-icons/fa";
import { LoadingBig, LoadingSmall } from "../components/Loading";
import { IoMdSend } from "react-icons/io";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const {
    fetchResponse,
    messages,
    prompt,
    setPrompt,
    newRequestLoading,
    loading,
    chats,
    createChat,
  } = ChatData();

  const submitHandler = (e) => {
    e.preventDefault();
    fetchResponse();
  };

  const messagecontainerRef = useRef();

  useEffect(() => {
    if (messagecontainerRef.current) {
      messagecontainerRef.current.scrollTo({
        top: messagecontainerRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages]);

  return (
    <div className="flex h-[100dvh] overflow-hidden bg-[#090d18] text-slate-100">
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />

      <main className="relative flex min-w-0 flex-1 flex-col">
        <header className="flex h-16 shrink-0 items-center justify-between border-b border-white/[0.06] px-4 md:h-20 md:px-8">
          <button
            onClick={toggleSidebar}
            className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-lg text-slate-200 transition hover:bg-white/[0.08] md:hidden"
            aria-label="Open chat sidebar"
          >
            <GiHamburgerMenu />
          </button>
          <Header />
          <button
            onClick={createChat}
            className="hidden h-10 items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-3 text-sm text-slate-300 transition hover:bg-white/[0.08] sm:flex"
          >
            <FaPlus className="text-xs" />
            New chat
          </button>
        </header>

        <section className="flex min-h-0 flex-1 flex-col">
          {loading ? (
            <div className="grid flex-1 place-items-center">
              <LoadingBig />
            </div>
          ) : (
            <div
              className="thin-scrollbar flex-1 overflow-y-auto px-4 py-5 md:px-8 md:py-7"
              ref={messagecontainerRef}
            >
              <div className="mx-auto w-full max-w-4xl space-y-6 pb-28">
                {messages && messages.length > 0 ? (
                  messages.map((e, i) => (
                    <div key={i} className="space-y-3">
                      <div className="ml-auto flex max-w-[88%] items-start gap-3 md:max-w-[75%]">
                        <div className="order-2 grid h-9 w-9 shrink-0 place-items-center rounded-full bg-indigo-500 text-sm text-white shadow-lg shadow-indigo-950/40">
                          <CgProfile />
                        </div>
                        <div className="rounded-2xl rounded-tr-md border border-white/[0.06] bg-[#171d2e] px-4 py-3 text-sm leading-7 text-slate-100 md:px-5">
                          {e.question}
                        </div>
                      </div>

                      <div className="flex items-start gap-3 md:gap-4">
                        <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-violet-400/20 bg-violet-500/15 text-sm text-violet-300">
                          <FaRobot />
                        </div>
                        <div
                          className="min-w-0 flex-1 pt-1 text-sm leading-7 text-slate-300 [&_a]:text-indigo-300 [&_code]:rounded [&_code]:bg-black/20 [&_code]:px-1 [&_p]:mb-3 [&_pre]:my-3 [&_pre]:overflow-x-auto [&_pre]:rounded-xl [&_pre]:bg-[#05070c] [&_pre]:p-4 [&_strong]:text-slate-100"
                          dangerouslySetInnerHTML={{ __html: e.answer }}
                        />
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="grid min-h-[55vh] place-items-center text-center">
                    <div className="max-w-md">
                      <div className="mx-auto mb-5 grid h-16 w-16 place-items-center rounded-2xl border border-violet-400/20 bg-violet-500/10 text-2xl text-violet-300">
                        <FaRobot />
                      </div>
                      <h1 className="mb-2 text-2xl font-semibold text-white">How can I help you today?</h1>
                      <p className="text-sm leading-6 text-slate-400">
                        Start a conversation, ask a question, or turn an idea into something useful.
                      </p>
                    </div>
                  </div>
                )}

                {newRequestLoading && (
                  <div className="flex items-center gap-3">
                    <div className="grid h-9 w-9 place-items-center rounded-full border border-violet-400/20 bg-violet-500/15 text-violet-300">
                      <FaRobot />
                    </div>
                    <LoadingSmall />
                  </div>
                )}
              </div>
            </div>
          )}
        </section>

        {chats && chats.length > 0 && (
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#090d18] via-[#090d18] to-transparent px-4 pb-4 pt-8 md:px-8 md:pb-6">
            <form
              onSubmit={submitHandler}
              className="mx-auto flex max-w-4xl items-end gap-2 rounded-2xl border border-white/[0.09] bg-[#171d2e]/95 p-2 shadow-2xl shadow-black/30 backdrop-blur"
            >
              <textarea
                className="max-h-32 min-h-[48px] flex-1 resize-none border-0 bg-transparent px-3 py-3 text-sm text-white outline-none placeholder:text-slate-500"
                placeholder="Message ChatGenie..."
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    submitHandler(e);
                  }
                }}
                rows={1}
                required
              />
              <button
                type="submit"
                disabled={newRequestLoading}
                className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-indigo-500 text-lg text-white shadow-lg shadow-indigo-950/30 transition hover:bg-indigo-400 disabled:cursor-not-allowed disabled:opacity-50"
                aria-label="Send message"
              >
                <IoMdSend />
              </button>
            </form>
          </div>
        )}
      </main>
    </div>
  );
};

export default Home;