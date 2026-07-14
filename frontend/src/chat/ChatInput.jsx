import { useState } from "react";
import { SendHorizonal, Sparkles } from "lucide-react";

function ChatInput({ onSend, loading }) {
  const [question, setQuestion] = useState("");

  const handleSend = () => {
    if (!question.trim() || loading) return;

    onSend(question);

    setQuestion("");
  };

  return (
    <div className="flex items-end gap-4">

      <div className="relative flex-1">

        <Sparkles
          size={18}
          className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500"
        />

        <input
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSend();
            }
          }}
          placeholder="Ask anything about your resume..."
          className="
          w-full
          bg-slate-800
          border
          border-slate-700
          rounded-2xl
          py-4
          pl-14
          pr-6
          outline-none
          transition
          focus:border-blue-500
          focus:ring-2
          focus:ring-blue-500/20
          "
        />

      </div>

      <button
        onClick={handleSend}
        disabled={loading}
        className="
        h-14
        px-7
        rounded-2xl
        bg-gradient-to-r
        from-blue-600
        to-indigo-600
        hover:scale-105
        transition
        font-semibold
        flex
        items-center
        gap-2
        disabled:opacity-60
        "
      >
        {loading ? "Thinking..." : "Send"}

        <SendHorizonal size={18} />

      </button>

    </div>
  );
}

export default ChatInput;