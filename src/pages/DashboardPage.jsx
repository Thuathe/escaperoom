import { missions } from "../data/mission";
import { useNavigate } from "react-router-dom";

const DashboardPage = () => {
  const navigate = useNavigate();

const handleClickMission = (id) => {
  // Reset skor misi tertentu (agar tidak bertambah terus saat diulang)
  localStorage.setItem(`score_m${id}`, 0);
  navigate(`/puzzle/${id}`);
};


  return (
    <div className="relative min-h-screen bg-[#0d0f1a] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/img/bg.jpg"
          alt="castle"
          className="object-cover w-full h-full opacity-30"
        />
      </div>

      {/* Kabut dan cahaya keemasan */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#ffb84d22] to-[#0d0f1a] z-0" />
      <div className="absolute inset-0 bg-[url('/img/fog.jpg')] bg-cover opacity-10 z-0" />

      {/* Konten */}
      <div className="relative z-10 p-8 min-h-screen flex flex-col items-center">
        <h1 className="text-4xl font-extrabold text-amber-400 mb-8 tracking-wider drop-shadow-[0_0_12px_#facc15]">
          🗺️ PETA LABIRIN MISI
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl w-full">
          {missions.map((mission) => (
            <button
              key={mission.id}
              onClick={() => handleClickMission(mission.id)}
              className="bg-black/30 border border-yellow-800 backdrop-blur-md hover:border-amber-400 text-left rounded-xl p-6 text-yellow-200 shadow-md hover:shadow-yellow-500 transition-all duration-300 hover:scale-105"
            >
              <h2 className="font-bold text-lg text-amber-400 mb-2 drop-shadow">
                {mission.title}
              </h2>
              <p className="text-sm text-yellow-100">
                {mission.description || "Teka-teki menantimu di balik pintu ini..."}
              </p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
