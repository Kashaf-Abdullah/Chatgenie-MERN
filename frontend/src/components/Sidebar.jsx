import { IoIosCloseCircle } from "react-icons/io";
import { ChatData } from "../context/ChatContext";
import { MdDelete } from "react-icons/md";
import { LoadingSpinner } from "./Loading";
import { UserData } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import { FiLogOut, FiPlus } from "react-icons/fi";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const { chats, createChat, createLod, setSelected, deleteChat } = ChatData();

  const { logoutHandler } = UserData();
  const navigate = useNavigate();

  const deleteChatHandler = (id) => {
    if (confirm("are you sure you want to delete this chat")) {
      deleteChat(id);
    }
  };

  const clickEvent = (id) => {
    setSelected(id);
    toggleSidebar();
  };
  return (
    <>
      {isOpen && (
        <button
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
          onClick={toggleSidebar}
          aria-label="Close chat sidebar"
        />
      )}
      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-[min(86vw,320px)] flex-col border-r border-white/[0.07] bg-[#101521] p-4 shadow-2xl transition-transform duration-300 md:relative md:z-auto md:w-[280px] md:shrink-0 md:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-16 items-center justify-between px-1">
          <div className="flex items-center gap-3">
            <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-indigo-400 to-violet-600 text-sm font-bold text-white shadow-lg shadow-violet-950/40">CG</div>
            <span className="text-lg font-semibold tracking-tight text-white">ChatGenie</span>
          </div>
          <button
            className="grid h-9 w-9 place-items-center rounded-lg text-xl text-slate-400 hover:bg-white/[0.06] hover:text-white md:hidden"
            onClick={toggleSidebar}
            aria-label="Close sidebar"
          >
            <IoIosCloseCircle />
          </button>
        </div>

        <button
          onClick={createChat}
          className="mb-5 flex h-11 w-full items-center justify-center gap-2 rounded-xl border border-indigo-400/20 bg-indigo-500/10 text-sm font-medium text-indigo-200 transition hover:border-indigo-400/40 hover:bg-indigo-500/20"
        >
          {createLod ? <LoadingSpinner /> : <><FiPlus /> New chat</>}
        </button>

        <p className="mb-2 px-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Recent chats</p>
        <div className="thin-scrollbar min-h-0 flex-1 overflow-y-auto">
          {chats && chats.length > 0 ? (
            chats.map((e) => (
              <div
                key={e._id}
                className={`group mb-1.5 flex items-center rounded-xl transition ${
                  e._id === undefined ? "" : "hover:bg-white/[0.05]"
                }`}
              >
                <button
                  type="button"
                  className="min-w-0 flex-1 truncate px-3 py-3 text-left text-sm text-slate-300"
                  onClick={() => clickEvent(e._id)}
                >
                  {e.latestMessage || "Untitled chat"}
                </button>
                <button
                  type="button"
                  className="mr-2 grid h-8 w-8 shrink-0 place-items-center rounded-lg text-slate-500 opacity-70 transition hover:bg-red-500/10 hover:text-red-400 md:opacity-0 md:group-hover:opacity-100"
                  onClick={() => deleteChatHandler(e._id)}
                  aria-label="Delete chat"
                >
                  <MdDelete />
                </button>
              </div>
            ))
          ) : (
            <div className="mt-8 px-3 text-center text-sm text-slate-500">No chats yet</div>
          )}
        </div>

        <div className="mt-3 border-t border-white/[0.06] pt-3">
          <button
            className="flex h-11 w-full items-center gap-3 rounded-xl px-3 text-sm text-slate-400 transition hover:bg-white/[0.05] hover:text-slate-100"
            onClick={() => logoutHandler(navigate)}
          >
            <FiLogOut />
            Sign out
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;