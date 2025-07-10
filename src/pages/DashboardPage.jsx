import React, { useState, useEffect } from "react";

import { missions } from "../data/mission";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const DashboardPage = () => {
  const navigate = useNavigate();
  const [showInfoId, setShowInfoId] = useState(null);

  const handleClickMission = (id) => {
    localStorage.setItem(`score_m${id}`, 0);
    navigate(`/puzzle/${id}`);
  };
  useEffect(() => {
    const closePopup = () => setShowInfoId(null);
    window.addEventListener("click", closePopup);
    return () => window.removeEventListener("click", closePopup);
  }, []);

  const radius = 200;

  return (
    <div className="relative h-[100svh] bg-[#0d0f1a] overflow-hidden flex items-center justify-center">
      {/* 🌌 Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/img/bg_map.jpg"
          alt="map background"
          className="object-cover w-full h-full opacity-80"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#ffb84d22] to-[#0d0f1a] z-0" />
      <div className="absolute inset-0 bg-[url('/img/bg_map.jpg')] bg-cover opacity-10 z-0" />

      {/* ✨ Lingkaran Portal Aura */}
      <motion.div
        className="absolute z-0 w-[400px] h-[400px] rounded-full border border-[rgba(245,226,198,1)]"
        transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
        style={{
          boxShadow:
            "0 0 20px rgba(247,165,77,0.5), 0 0 2000px rgba(247,165,77,0.3)",
        }}
      />

      {/* 🧲 Tombol Misi Keliling */}
      <div className="relative z-10 w-[360px] h-[360px] md:w-[480px] md:h-[480px]">
        {missions.map((mission, i) => {
          const angle = (360 / missions.length) * i;
          const x = radius * Math.cos((angle * Math.PI) / 180);
          const y = radius * Math.sin((angle * Math.PI) / 180);

          return (
            <div
              key={mission.id}
              className="absolute flex flex-col items-center"
              style={{
                left: `calc(50% + ${x}px - 50px)`,
                top: `calc(50% + ${y}px - 50px)`,
              }}
            >
              {/* Tombol Misi */}
              <motion.button
                onClick={() => handleClickMission(mission.id)}
                className="w-[100px] h-[100px] rounded-full border-[1px]  border-[rgba(245,226,198,1)] shadow-lg overflow-hidden bg-black/30 backdrop-blur-md transition-all relative"
                style={{
                  scale: 1,
                  boxShadow:
                    "0 0 20px rgba(247,165,77, 0.6), 0 0 40px rgba(251, 191, 36, 0.4)",
                }}
                whileHover={{
                  scale: 0.9,
                  boxShadow:
                    "0 0 20px rgba(0, 0, 0, 0.6), 0 0 40px rgba(5, 0, 0, 0.4)",
                }}
                animate={{
                  rotate: [-3, 3, -3], // goyang kanan-kiri
                }}
                transition={{
                  duration: 1, // setiap tombol beda timing dikit
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {/* Gambar bulat */}
                <img
                  src={`/img/m${mission.id}.jpg`}
                  alt={`Misi ${mission.id}`}
                  className="object-cover w-full h-full"
                />

                {/* Label di atas */}
                <div className="absolute inset-0 flex items-start justify-center pt-2">
                  <span className="text-xs font-bold text-yellow-200 drop-shadow-sm bg-black/40 px-2 py-0.5 rounded-full">
                    Misi {mission.id}
                  </span>
                </div>
              </motion.button>

              {/* Tombol Info */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowInfoId(mission.id === showInfoId ? null : mission.id);
                }}
                className="mt-1 px-2 py-0.5 flex items-center gap-1 text-xs font-medium text-yellow-200 border border-yellow-500/40 rounded-md bg-black/20 backdrop-blur-sm hover:text-yellow-100 hover:border-yellow-400 hover:shadow-md transition-all"
              >
                <span>ℹ️</span>
                <span>Info</span>
              </button>

              {/* Popup Info */}
              {showInfoId === mission.id && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="absolute z-20 p-3 mt-2 text-xs text-yellow-100 border border-yellow-700 rounded shadow-lg top-full w-44 bg-black/80 backdrop-blur-md"
                  onClick={(e) => e.stopPropagation()}
                >
                  <p className="mb-1 font-bold text-amber-400">
                    {mission.title}
                  </p>
                  <p className="leading-snug">{mission.info}</p>
                </motion.div>
              )}
            </div>
          );
        })}

        {/* 🌀 Pusat Portal */}
        <motion.div
          className="absolute left-[35%] top-[35%] -translate-x-1/2 -translate-y-1/2 w-28 h-28 md:w-36 md:h-36 rounded-full border border-[rgba(247,165,77, 0.6)] bg-black/40 text-amber-300 font-bold text-sm md:text-base flex items-center justify-center text-center animate-pulse shadow-[0_0_25px_rgba(251,191,36,0.4)] backdrop-blur-sm"
          animate={{ scale: [1, 1.03, 1] }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut",
          }}
          style={{
            fontFamily: "Cinzel, serif",
            textShadow:
              "0 0 20px rgba(247,165,77, 0.6), 0 0 40px rgba(251, 191, 36, 0.4)",
          }}
        >
           PILIH MISI
        </motion.div>
      </div>
    </div>
  );
};

export default DashboardPage;
