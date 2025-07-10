import { useNavigate, useParams } from "react-router-dom";
import { missions } from "../data/mission";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Hook deteksi device
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return isMobile;
};

const PuzzlePage = () => {
  const { missionId } = useParams();
  const mission = missions.find((m) => m.id === parseInt(missionId));
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const isMobile = useIsMobile();
  const hotspots = mission.puzzle.hotspots[isMobile ? "mobile" : "desktop"];

  const handleClick = (isCorrect) => {
    if (isCorrect) {
      setShowSuccess(true);
    } else {
      setMessage("❌ Salah jalur... Perhatikan baik-baik.");
      setTimeout(() => setMessage(""), 1500);
    }
  };

  const handleContinue = () => {
    setShowSuccess(false);
    navigate(`/mission/${mission.id}`);
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-black font-[Cinzel] overflow-hidden">
      {/* 🌌 Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/img/bg_puzzle.jpg"
          alt="puzzle bg"
          className="object-cover w-full h-full opacity-30"
        />
      </div>
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/10 via-black/80 to-black" />

      {/* 🔳 Puzzle Area */}
      <motion.div
        className={`relative z-10 w-full max-w-5xl ${
          isMobile ? "aspect-video" : "h-[480px]"
        } rounded-xl overflow-hidden border border-yellow-900 shadow-[0_0_60px_rgba(255,255,255,0.05)]`}
        style={{
          backgroundImage: `url(/img/${mission.puzzle.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
      >
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/20 to-black/60" />
        {hotspots.map((spot, i) => (
          <div
            key={i}
            onClick={() => handleClick(spot.isCorrect)}
            className="absolute w-[40px] h-[40px] md:w-[70px] md:h-[70px]  rounded-full cursor-pointer transition-all duration-200 hover:ring-2 hover:ring-amber-400"
            style={{
              left: `${spot.x}px`,
              top: `${spot.y}px`,
              backgroundColor: spot.isCorrect
                ? "rgba(255,255,255,1.04)"
                : "rgba(255,0,0,1.05)",
              backdropFilter: "blur(2px)",
            }}
            title={spot.isCorrect ? "Lokasi Benar" : "Lokasi Salah"}
          />
        ))}
      </motion.div>

      {/* 🧩 Clue */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="z-10 mt-10 text-lg tracking-wide text-center text-yellow-200 md:text-xl"
      >
        “{mission.puzzle.clue}”
      </motion.h2>

      {/* ❌ Feedback */}
      {message && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="z-10 mt-4 text-sm font-medium text-red-400"
        >
          {message}
        </motion.p>
      )}

      {/* ✅ Popup Benar */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-30 flex items-center justify-center bg-black/80 backdrop-blur-md"
          >
            <motion.div
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              className="bg-[#0d0f1a] text-yellow-100 p-8 rounded-xl border border-yellow-700 shadow-xl text-center w-full max-w-sm"
            >
              <h3 className="mb-3 text-xl font-bold text-amber-400">
                ✅ Kode Lokasi Terbuka
              </h3>
              <p className="mb-5 text-sm">
                Kamu telah menemukan titik yang benar. Pintu selanjutnya akan terbuka.
              </p>
              <button
                onClick={handleContinue}
                className="px-5 py-2 font-semibold text-black transition rounded-full bg-amber-500 hover:bg-amber-600"
              >
                Lanjutkan
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PuzzlePage;
