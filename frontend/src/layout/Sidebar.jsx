import {
  FileText,
  Sparkles,
  Briefcase,
  GraduationCap,
  Code2,
  Award,
  User,
  Brain,
  MessageSquare,
  BarChart3,
  BadgeCheck,
  Cpu,
  Database,
  Bot,
  ChevronRight,
} from "lucide-react";

const menus = [
  { icon: Sparkles, text: "Resume Summary", active: true },
  { icon: Code2, text: "Technical Skills" },
  { icon: Briefcase, text: "Projects" },
  { icon: User, text: "Experience" },
  { icon: GraduationCap, text: "Education" },
  { icon: Award, text: "Certificates" },
  { icon: Brain, text: "ATS Suggestions" },
  { icon: MessageSquare, text: "Interview Questions" },
  { icon: BarChart3, text: "Resume Analysis" },
];

function Sidebar() {
  return (
    <aside className="w-[320px] bg-slate-950 border-r border-slate-800 flex flex-col">

      {/* Header */}
      <div className="px-6 py-7 border-b border-slate-800">

        <h1 className="text-2xl font-bold text-white">
          ResumeGPT
        </h1>

        <p className="text-slate-400 text-sm mt-2">
          AI Resume Reviewer • RAG Powered
        </p>

      </div>

      {/* Resume Card */}
      <div className="p-6">

        <div className="bg-slate-900 border border-slate-700 rounded-3xl p-5 hover:border-blue-500 transition">

          <div className="flex items-center gap-4">

            <div className="w-16 h-16 rounded-2xl bg-blue-600 flex items-center justify-center">

              <FileText size={30} />

            </div>

            <div className="flex-1">

              <h2 className="font-semibold">
                Resume.pdf
              </h2>

              <p className="text-slate-400 text-sm">
                2.4 MB PDF
              </p>

              <div className="flex items-center gap-2 mt-2">

                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>

                <span className="text-green-400 text-sm">
                  Indexed Successfully
                </span>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* AI Features */}
      <div className="px-6">

        <p className="uppercase text-xs tracking-widest text-slate-500 mb-5">
          AI FEATURES
        </p>

        <div className="space-y-2">

          {menus.map((item) => (
            <button
              key={item.text}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-2xl transition-all duration-300 ${
                item.active
                  ? "bg-blue-600 shadow-lg"
                  : "bg-slate-900 hover:bg-slate-800 border border-slate-800"
              }`}
            >

              <div className="flex items-center gap-3">

                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    item.active
                      ? "bg-white/20"
                      : "bg-slate-800"
                  }`}
                >
                  <item.icon size={18} />
                </div>

                <span className="font-medium">
                  {item.text}
                </span>

              </div>

              <ChevronRight size={18} />

            </button>
          ))}

        </div>

      </div>

      {/* Resume Stats */}
      <div className="px-6 mt-8">

        <div className="bg-slate-900 border border-slate-700 rounded-3xl p-5">

          <h2 className="font-semibold text-lg mb-5">
            Resume Analytics
          </h2>

          <div className="space-y-5">

            <div>

              <div className="flex justify-between text-sm">

                <span className="text-slate-400">
                  ATS Score
                </span>

                <span className="font-semibold text-green-400">
                  92%
                </span>

              </div>

              <div className="w-full bg-slate-700 rounded-full h-2 mt-2">

                <div className="bg-green-500 h-2 rounded-full w-[92%]"></div>

              </div>

            </div>

            <div className="flex justify-between">

              <span className="text-slate-400">
                Pages
              </span>

              <span>2</span>

            </div>

            <div className="flex justify-between">

              <span className="text-slate-400">
                Sections
              </span>

              <span>8</span>

            </div>

            <div className="flex justify-between">

              <span className="text-slate-400">
                Indexed
              </span>

              <BadgeCheck
                className="text-green-400"
                size={18}
              />

            </div>

          </div>

        </div>

      </div>

      {/* Footer */}
      <div className="mt-auto p-6">

        <div className="rounded-3xl bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-700 p-6 shadow-2xl">

          <div className="flex items-center gap-3 mb-4">

            <Bot size={28} />

            <h2 className="text-xl font-bold">
              AI Stack
            </h2>

          </div>

          <div className="space-y-3 text-blue-100 text-sm">

            <div className="flex items-center gap-3">
              <Cpu size={16} />
              Groq LLM
            </div>

            <div className="flex items-center gap-3">
              <Bot size={16} />
              LangChain
            </div>

            <div className="flex items-center gap-3">
              <Database size={16} />
              ChromaDB
            </div>

            <div className="flex items-center gap-3">
              <Sparkles size={16} />
              RAG Pipeline
            </div>

          </div>

        </div>

      </div>

    </aside>
  );
}

export default Sidebar;