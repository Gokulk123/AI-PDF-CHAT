import Navbar from "../layout/Navbar";
import Sidebar from "../layout/Sidebar";
import UploadCard from "../chat/UploadBox";
import ChatBox from "../chat/ChatBox";

function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* Navbar */}
      <Navbar />

      {/* Body */}
      <div className="flex h-[calc(100vh-72px)]">

        {/* Sidebar */}
        <Sidebar />

        {/* Content */}
        <main className="flex-1 p-6">

          <div className="grid grid-cols-12 gap-6 h-full">

            {/* Upload */}
            <div className="col-span-4 flex">
              <UploadCard />
            </div>

            {/* Chat */}
            <div className="col-span-8 flex">
              <ChatBox />
            </div>

          </div>

        </main>

      </div>

    </div>
  );
}

export default Home;