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
    stopTimer(); // ⛔ Stop timer saat halaman ini diakses
  }, [stopTimer]);

  const formatTime = (seconds) => {
    if (!seconds || isNaN(seconds)) return "0:00";
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, "0")}`;
  };

  if (!mission) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-red-100 text-red-800 font-semibold text-center">
        <div className="p-6 bg-white rounded shadow">Misi tidak ditemukan!</div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-[#0d0f1a] overflow-hidden flex items-center justify-center px-4 font-[Cinzel]">
      {/* 🌌 Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/img/bg_result.jpg"
          alt="background"
          className="object-cover w-full h-full opacity-30"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#ffb84d33] to-[#0d0f1a] z-0" />
      <div className="absolute inset-0 bg-[url('/img/fog.png')] bg-cover opacity-10 z-0" />

      {/* 📜 Sertifikat / Hasil */}
      <div
        className="relative z-10 bg-white/5 backdrop-blur-md border border-yellow-900 rounded-2xl shadow-[0_0_80px_rgba(247,165,77,0.15)] px-6 py-8 w-full max-w-md text-center text-yellow-100"
        style={{
          backgroundImage: "url('/img/parchment.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h2
          className="text-2xl font-extrabold mb-6 tracking-wider uppercase"
          style={{
            color: "#f5e6c6",
            textShadow:
              "0 0 15px rgba(255,215,140,0.4), 0 0 35px rgba(255,165,0,0.2)",
          }}
        >
          🧩 Hasil Misi {missionId}
        </h2>

        <div className="space-y-3 text-sm md:text-base">
          <p>
            Agen Terdaftar: <br />
            <span className="text-lg text-white font-bold">{name}</span>
          </p>
          <p>
            Kelas Rahasia: <br />
            <span className="text-white">{kelas}</span>
          </p>
          <p>
            Skor Keberhasilan: <br />
            <span className="text-amber-300 text-lg font-bold">
              {score} / {mission.questions.length}
            </span>
          </p>
          <p>
            Waktu Penyelesaian: <br />
            <span className="text-white font-semibold">{formatTime(elapsed)}</span>
          </p>
        </div>

        <button
          onClick={() => navigate("/dashboard")}
          className="mt-8 px-6 py-2 text-sm font-bold text-black bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-400 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all"
        >
          🔙 Kembali ke Peta Labirin
        </button>
      </div>
    </div>
  );
};

export default ResultPage;
