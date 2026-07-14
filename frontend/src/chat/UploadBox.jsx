import { useRef, useState } from "react";
import {
  UploadCloud,
  FileText,
  CheckCircle,
  Loader2,
  Sparkles,
  ShieldCheck,
  BrainCircuit,
} from "lucide-react";
import api from "../api/axios";

function UploadCard() {
  const inputRef = useRef();

  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploaded, setUploaded] = useState(false);

  const handleFile = (e) => {
    const selected = e.target.files[0];

    if (!selected) return;

    setFile(selected);
    setUploaded(false);
  };

  const uploadResume = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("pdf", file);

    try {
      setUploading(true);

      await api.post("/pdf/upload", formData);

      setUploaded(true);
    } catch {
      alert("Upload Failed");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="h-full">

      <div className="h-full flex flex-col bg-slate-900 border border-slate-800 rounded-3xl shadow-xl">

        {/* Header */}

        <div className="text-center px-8 pt-8">

          <div className="mx-auto w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center shadow-lg">

            <UploadCloud size={32} />

          </div>

          <h2 className="text-3xl font-bold mt-5">

            Upload Resume

          </h2>

          <p className="text-slate-400 mt-2 leading-7">

            Upload your PDF and let AI instantly understand your
            skills, projects and experience.

          </p>

        </div>

        {/* Upload Area */}

        <div
          onClick={() => inputRef.current.click()}
          className="
            mx-8
            mt-8
            rounded-3xl
            border-2
            border-dashed
            border-slate-700
            hover:border-blue-500
            hover:bg-slate-800/30
            transition-all
            cursor-pointer
            text-center
            py-10
            px-6
        "
        >

          <UploadCloud
            size={60}
            className="mx-auto text-blue-500"
          />

          <h3 className="text-xl font-semibold mt-5">

            Drag & Drop Resume

          </h3>

          <p className="text-slate-400 mt-2">

            or click here to browse

          </p>

          <input
            hidden
            type="file"
            accept=".pdf"
            ref={inputRef}
            onChange={handleFile}
          />

        </div>

        {/* Selected File */}

        {file && (

          <div className="mx-8 mt-6 rounded-2xl border border-slate-700 bg-slate-800 p-4 flex items-center justify-between">

            <div className="flex items-center gap-4">

              <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center">

                <FileText size={22} />

              </div>

              <div>

                <h3 className="font-semibold truncate max-w-[180px]">

                  {file.name}

                </h3>

                <p className="text-sm text-slate-400">

                  {(file.size / 1024 / 1024).toFixed(2)} MB

                </p>

              </div>

            </div>

            {uploaded && (

              <CheckCircle
                className="text-green-500"
                size={28}
              />

            )}

          </div>

        )}

        {/* Features */}

        <div className="grid grid-cols-3 gap-3 px-8 mt-8">

          <div className="rounded-2xl bg-slate-800 p-4 text-center">

            <BrainCircuit
              size={24}
              className="mx-auto text-blue-500"
            />

            <p className="text-xs mt-3 text-slate-400">

              AI Analysis

            </p>

          </div>

          <div className="rounded-2xl bg-slate-800 p-4 text-center">

            <ShieldCheck
              size={24}
              className="mx-auto text-green-500"
            />

            <p className="text-xs mt-3 text-slate-400">

              Secure

            </p>

          </div>

          <div className="rounded-2xl bg-slate-800 p-4 text-center">

            <Sparkles
              size={24}
              className="mx-auto text-purple-500"
            />

            <p className="text-xs mt-3 text-slate-400">

              ATS Review

            </p>

          </div>

        </div>

        {/* Push everything above */}

        <div className="flex-1" />

        {/* Upload Button */}

        <div className="px-8 pb-6 pt-6">

          <button
            disabled={!file || uploading}
            onClick={uploadResume}
            className="
              w-full
              rounded-2xl
              py-4
              font-semibold
              text-lg
              bg-gradient-to-r
              from-blue-600
              to-indigo-600
              hover:scale-[1.02]
              transition
              disabled:opacity-40
              disabled:hover:scale-100
              flex
              items-center
              justify-center
              gap-3
            "
          >

            {uploading ? (
              <>
                <Loader2 className="animate-spin" />
                Uploading...
              </>
            ) : (
              <>
                <UploadCloud size={20} />
                Upload Resume
              </>
            )}

          </button>

        </div>

        {/* Success */}

        {uploaded && (

          <div className="mx-8 mb-8 rounded-2xl border border-green-500/40 bg-green-500/10 p-5">

            <div className="flex gap-4">

              <CheckCircle
                size={28}
                className="text-green-500"
              />

              <div>

                <h3 className="font-semibold text-green-400">

                  Resume Indexed Successfully

                </h3>

                <p className="text-sm text-green-300 mt-2">

                  You can now ask unlimited questions about your resume.

                </p>

              </div>

            </div>

          </div>

        )}

      </div>

    </div>
  );
}

export default UploadCard;