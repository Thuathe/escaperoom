import { useNavigate, useSearchParams } from "react-router-dom";
import { missions } from "../data/mission";
import { useContext, useEffect } from "react";
import { TimerContext } from "../contexts/TimerContext";

const ResultPage = () => {
  const { elapsed, stopTimer } = useContext(TimerContext);
  const [params] = useSearchParams();
  const missionId = parseInt(params.get("mission") || "1");

  const mission = missions.find((m) => m.id === missionId);
  const name = localStorage.getItem("playerName");
  const kelas = localStorage.getItem("playerClass");
  const score = parseInt(localStorage.getItem(`score_m${missionId}`) || "0");

  const navigate = useNavigate();

  useEffect(() => {
    stopTimer();
  }, [stopTimer]);

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}m ${s}s`;
  };

  if (!mission) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-red-100 text-red-800 font-semibold text-center">
        <div className="p-6 bg-white rounded shadow">Misi tidak ditemukan!</div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-[#0d0f1a] overflow-hidden flex items-center justify-center px-4">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/img/bg.jpg"
          alt="castle"
          className="object-cover w-full h-full opacity-20"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#ffb84d22] to-[#0d0f1a] z-0" />
      <div className="absolute inset-0 bg-[url('/img/fog.jpg')] bg-cover opacity-10 z-0" />

      {/* Konten */}
      <div className="relative z-10 bg-white/5 backdrop-blur-md border border-yellow-900 rounded-2xl shadow-xl p-8 w-full max-w-md text-white text-center">
        <h2 className="text-3xl font-bold text-amber-400 drop-shadow mb-4">🧩 Hasil Misi {missionId}</h2>
        <p className="mb-2 text-yellow-100">
          Nama Agen: <span className="font-semibold text-white">{name}</span>
        </p>
        <p className="mb-2 text-yellow-100">
          Kelas: <span className="font-semibold text-white">{kelas}</span>
        </p>
        <p className="mb-2 text-lg text-yellow-100">
          Skor: <span className="font-semibold text-amber-300">{score} / {mission.questions.length}</span>
        </p>
        <p className="mb-6 text-yellow-100">
          Waktu Penyelesaian: <span className="text-white font-semibold">{formatTime(elapsed)}</span>
        </p>
        <button
          onClick={() => navigate("/dashboard")}
          className="mt-4 bg-amber-500 hover:bg-amber-600 text-black font-semibold px-6 py-2 rounded shadow-lg transition"
        >
          🔙 Kembali ke Peta Labirin
        </button>
      </div>
    </div>
  );
};

export default ResultPage;
