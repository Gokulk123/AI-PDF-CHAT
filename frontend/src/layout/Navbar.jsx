import { Bot, Bell, Search } from "lucide-react";

function Navbar() {
  return (
    <header className="h-16 bg-slate-900 border-b border-slate-800 px-6 flex items-center justify-between">

      {/* Logo */}

      <div className="flex items-center gap-4">

        <div className="w-11 h-11 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center shadow-lg">

          <Bot size={22} />

        </div>

        <div>

          <h1 className="text-xl font-bold tracking-wide">
            ResumeGPT
          </h1>

          <p className="text-xs text-slate-400">
            AI Resume Reviewer • RAG Powered
          </p>

        </div>

      </div>

      {/* Search */}

      <div className="hidden lg:flex items-center w-[360px] bg-slate-800 border border-slate-700 rounded-xl px-4">

        <Search
          size={16}
          className="text-slate-400"
        />

        <input
          type="text"
          placeholder="Search chats..."
          className="bg-transparent outline-none flex-1 px-3 py-2 text-sm placeholder:text-slate-500"
        />

      </div>

      {/* Right */}

      <div className="flex items-center gap-4">

        <button className="relative w-10 h-10 rounded-xl bg-slate-800 hover:bg-slate-700 transition flex items-center justify-center">

          <Bell size={18} />

          <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-red-500"></span>

        </button>

        <div className="flex items-center gap-3">

          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center font-semibold">

            G

          </div>

          <div className="hidden md:block">

            <h3 className="text-sm font-semibold">
              Gokul
            </h3>

            <p className="text-xs text-slate-400">
              Full Stack Developer
            </p>

          </div>

        </div>

      </div>

    </header>
  );
}

export default Navbar;