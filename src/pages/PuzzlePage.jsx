import { useNavigate, useParams } from "react-router-dom";
import { missions } from "../data/mission";
import { useState } from "react";
import { motion } from "framer-motion";

const PuzzlePage = () => {
  const { missionId } = useParams();
  const mission = missions.find((m) => m.id === parseInt(missionId));
  const navigate = useNavigate();

  const [message, setMessage] = useState("");

  const handleClick = (isCorrect) => {
    if (isCorrect) {
      setMessage("✅ Pintu terbuka... kamu berhasil!");
      setTimeout(() => navigate(`/mission/${mission.id}`), 1200);
    } else {
      setMessage("❌ Salah jalur... Perhatikan baik-baik.");
      setTimeout(() => setMessage(""), 1500);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#0d0f1a] overflow-hidden flex flex-col items-center justify-center p-6">
      {/* Background Kastil + Efek Kabut */}
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
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 text-2xl md:text-3xl font-bold text-amber-400 text-center mb-6 drop-shadow"
      >
        🧩 Tebak Lokasi: {mission.puzzle.clue}
      </motion.h2>

      <motion.div
        className="relative z-10 w-full max-w-4xl h-[480px] rounded-xl overflow-hidden border border-yellow-900 shadow-xl bg-black/30"
        style={{
          backgroundImage: `url(/img/room-${mission.id}.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 120 }}
      >
        {/* ✅ Hotspot Benar */}
        <div
          onClick={() => handleClick(true)}
          className="absolute left-[220px] top-[140px] w-[100px] h-[100px] cursor-pointer hover:ring-4 hover:ring-amber-300/60 rounded-md transition"
          title="Hotspot Benar"
        />

        {/* ❌ Hotspot Salah */}
        <div
          onClick={() => handleClick(false)}
          className="absolute left-[50px] top-[100px] w-[100px] h-[100px] cursor-pointer hover:ring-2 hover:ring-red-400/30 rounded-md transition"
          title="Hotspot Salah"
        />
        <div
          onClick={() => handleClick(false)}
          className="absolute left-[350px] top-[300px] w-[80px] h-[80px] cursor-pointer hover:ring-2 hover:ring-red-400/30 rounded-md transition"
          title="Hotspot Salah 2"
        />
      </motion.div>

      {/* Message Feedback */}
      {message && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 text-lg font-semibold text-yellow-100 text-center z-10"
        >
          {message}
        </motion.p>
      )}
    </div>
  );
};

export default PuzzlePage;
