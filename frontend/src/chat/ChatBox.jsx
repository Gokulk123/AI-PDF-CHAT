import { useEffect, useRef, useState } from "react";
import { Bot } from "lucide-react";

import api from "../api/axios";

import ChatHeader from "./ChatHeader";
import ChatInput from "./ChatInput";
import Message from "./Message";
import SuggestedQuestions from "./SuggestedQuestions";

function ChatBox() {
  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: `# 👋 Welcome to ResumeGPT

I'm your AI Resume Assistant.

I can answer questions about:

• Resume Summary

• Technical Skills

• Projects

• Experience

• Education

• Certifications

• ATS Improvements

• Interview Questions`,
    },
  ]);

  const [loading, setLoading] = useState(false);

  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  const askQuestion = async (question) => {
    if (!question.trim()) return;

    setMessages((prev) => [
      ...prev,
      {
        sender: "user",
        text: question,
      },
    ]);

    setLoading(true);

    try {
      const res = await api.post("/chat", {
        question,
      });

      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: res.data.answer,
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: "❌ Unable to connect to AI.",
        },
      ]);
    }

    setLoading(false);
  };

  return (
    <div className="h-full flex flex-col rounded-3xl border border-slate-800 bg-slate-900 shadow-xl overflow-hidden">

      <ChatHeader />

      {/* Suggestions */}

      <div className="border-b border-slate-800 bg-slate-900 px-6 py-4">

        <SuggestedQuestions onAsk={askQuestion} />

      </div>

      {/* Messages */}

      <div className="flex-1 overflow-y-auto bg-slate-950 px-10 py-8">

        {messages.length === 1 && (

          <div className="text-center max-w-3xl mx-auto mb-10">

            <div className="mx-auto w-20 h-20 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center shadow-lg">

              <Bot size={36} />

            </div>

            <h2 className="text-4xl font-bold mt-6">

              AI Resume Assistant

            </h2>

            <p className="text-slate-400 mt-4 text-lg leading-8">

              Upload your resume once and ask unlimited questions.

              ResumeGPT understands your skills, projects,

              experience, education and certifications using

              RAG + Groq LLM.

            </p>

          </div>

        )}

        <div className="space-y-8">

          {messages.map((msg, index) => (

            <Message
              key={index}
              sender={msg.sender}
              text={msg.text}
            />

          ))}

          {loading && (

            <div className="flex gap-4">

              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500"></div>

              <div className="rounded-3xl bg-slate-800 border border-slate-700 px-6 py-5">

                <div className="flex gap-2">

                  <span className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"></span>

                  <span
                    className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"
                    style={{
                      animationDelay: ".15s",
                    }}
                  ></span>

                  <span
                    className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"
                    style={{
                      animationDelay: ".3s",
                    }}
                  ></span>

                </div>

              </div>

            </div>

          )}

        </div>

        <div ref={bottomRef}></div>

      </div>

      {/* Input */}

      <div className="border-t border-slate-800 bg-slate-900 p-5">

        <ChatInput
          onSend={askQuestion}
          loading={loading}
        />

      </div>

    </div>
  );
}

export default ChatBox;