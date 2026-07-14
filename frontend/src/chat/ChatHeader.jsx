import { Bot, ShieldCheck } from "lucide-react";

function ChatHeader() {
  return (
    <div className="flex items-center justify-between px-8 py-5 border-b border-slate-800">

      <div className="flex items-center gap-4">

        <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center shadow-lg">

          <Bot size={28} />

        </div>

        <div>

          <h2 className="text-2xl font-bold">
            AI Resume Assistant
          </h2>

          <p className="text-slate-400">
            Chat with your uploaded resume using RAG + Groq AI
          </p>

        </div>

      </div>

      <div className="flex items-center gap-3 bg-emerald-500/10 border border-emerald-500/20 px-5 py-2 rounded-full">

        <ShieldCheck
          size={18}
          className="text-emerald-400"
        />

        <span className="text-emerald-400 font-medium">
          Ready
        </span>

      </div>

    </div>
  );
}

export default ChatHeader;