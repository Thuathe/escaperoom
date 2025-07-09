import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const SinopsisPage = () => {
  const navigate = useNavigate();
  const playerName = localStorage.getItem("playerName");

  const paragraphs = [
    `Di tanganmu kini tergenggam naskah kuno — berasal dari ruang paling dalam dalam kastil hitam, Vault of Numbers.`,
    `Ia berisi petunjuk tersembunyi, teka-teki logika, dan jejak-jejak digital dari organisasi rahasia bernama The Formula Society.`,
    `Hanya yang berpikir cepat dan tajam yang bisa menembus lima labirin perhitungan.`,
    `Dan kamu, Agen ${playerName}, terpilih untuk membuka misteri dunia yang telah lama terkunci.`,
  ];

  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < paragraphs.length) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  return (
    <div
      className="relative h-[100svh] bg-[#0d0f1a] overflow-hidden"
      onClick={handleNext}
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/img/bg_home.jpg"
          alt="background"
          className="object-cover w-full h-full opacity-60 transition-opacity duration-[2000ms]"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#ffb84d33] to-[#0d0f1a] z-0" />
      <div className="absolute inset-0 bg-[url('/img/fog.jpg')] bg-cover opacity-10 z-0" />

      {/* Guardian */}
      <motion.img
        src="/img/guardian.png"
        alt="Karakter Pemandu"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-0 left-0 z-10 w-[300px] pointer-events-none select-none md:w-48 lg:w-80 drop-shadow-xl"
        style={{
          filter: "drop-shadow(0 0 12px rgba(247,165,77,0.6))"
        }}
      />

      {/* Konten box naskah */}
      <div className="relative top-[-20%] md:top-0 flex items-center justify-center h-full px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="w-full max-w-sm px-6 py-6 text-[#f5deb3] border border-yellow-800 shadow-xl backdrop-blur-sm bg-[url('/img/parchment.png')] bg-cover bg-center rounded-xl"
          style={{
            backgroundColor: "rgba(255,255,255,0.05)",
            fontFamily: "Cinzel, serif",
            boxShadow: "0 0 25px rgba(247,165,77,0.2), 0 0 50px rgba(247,165,77,0.15)"
          }}
        >
          <h2
            className="mb-4 text-xl font-extrabold tracking-wider text-center"
            style={{
              color: "rgba(245,226,198,1)",
              textShadow: "0 0 15px rgba(255,215,140,0.4), 0 0 35px rgba(255,165,0,0.3)",
            }}
          >
            Naskah Rahasia
          </h2>

          {/* Paragraf transisi satu per satu */}
          <AnimatePresence mode="wait">
            <motion.p
              key={currentStep}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="text-sm leading-relaxed text-center text-yellow-100 select-none md:text-base"
              style={{ minHeight: "90px" }}
            >
              {paragraphs[currentStep] || ""}
            </motion.p>
          </AnimatePresence>

          {/* Hint ketuk */}
          {currentStep < paragraphs.length && (
            <motion.p
              className="mt-6 text-xs italic text-center text-yellow-100 select-none opacity-30 animate-pulse"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              Ketuk layar untuk melanjutkan...
            </motion.p>
          )}

          {/* Tombol masuk muncul di akhir */}
          {currentStep >= paragraphs.length && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/dashboard")}
              className="w-full py-2 mt-4 text-sm font-semibold text-black transition-all duration-300 rounded-md shadow bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-400 hover:shadow-yellow-400/30"
              style={{ fontFamily: "Cinzel, serif" }}
            >
              🗺️ Buka Peta Labirin
            </motion.button>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default SinopsisPage;
