import {
  Sparkles,
  Briefcase,
  GraduationCap,
  Code2,
  Award,
  FileText,
} from "lucide-react";

const questions = [
  {
    icon: <Sparkles size={16} />,
    text: "Summarize my Resume",
  },
  {
    icon: <Code2 size={16} />,
    text: "What are my Skills?",
  },
  {
    icon: <Briefcase size={16} />,
    text: "Explain my Projects",
  },
  {
    icon: <GraduationCap size={16} />,
    text: "Education",
  },
  {
    icon: <Award size={16} />,
    text: "ATS Suggestions",
  },
  {
    icon: <FileText size={16} />,
    text: "Generate Interview Questions",
  },
];

function SuggestedQuestions({ onAsk }) {
  return (
    <div className="flex flex-wrap gap-3">

      {questions.map((item) => (

        <button
          key={item.text}
          onClick={() => onAsk(item.text)}
          className="flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-800 hover:bg-blue-600 border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:scale-105"
        >

          {item.icon}

          <span className="text-sm">

            {item.text}

          </span>

        </button>

      ))}

    </div>
  );
}

export default SuggestedQuestions;