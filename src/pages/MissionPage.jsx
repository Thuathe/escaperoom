import { useParams, useNavigate } from "react-router-dom";
import { missions } from "../data/mission";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const MissionPage = () => {
  const { missionId } = useParams();
  const mission = missions.find((m) => m.id === parseInt(missionId));
  const navigate = useNavigate();

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selected, setSelected] = useState("");
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);

  const currentQuestion = mission.questions[currentQuestionIndex];

  const handleSubmit = () => {
    if (!selected) return;

    const correct = selected === currentQuestion.answer;
    setIsCorrect(correct);
    setIsAnswered(true);

    if (correct) {
      const key = `score_m${mission.id}`;
      const current = parseInt(localStorage.getItem(key) || "0");
      localStorage.setItem(key, current + 1);
    }

    setTimeout(() => {
      setIsAnswered(false);
      setSelected("");

      if (currentQuestionIndex + 1 < mission.questions.length) {
        setCurrentQuestionIndex((prev) => prev + 1);
      } else {
        navigate(`/result?mission=${mission.id}`);
      }
    }, 1800);
  };

  return (
    <div className="relative h-[100svh] bg-[#0d0f1a] text-[#f5e6c6] font-[Cinzel] overflow-hidden">
      {/* 🌌 Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/img/bg_mission.jpg"
          alt="mission-bg"
          className="object-cover w-full h-full opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#ffb84d22] to-[#0d0f1a]" />
        <div className="absolute inset-0 bg-[url('/img/fog.png')] bg-cover opacity-10" />
      </div>

      {/* 🧠 Konten */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 py-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md px-5 py-6 md:px-8 md:py-8 bg-white/5 backdrop-blur-sm border border-yellow-800 rounded-xl shadow-[0_0_40px_rgba(247,165,77,0.1)]"
        >

          
          {/* Indeks & Judul Misi */}
          <h2
            className="mb-2 text-3xl font-semibold text-center text-amber-300"
            style={{
              color: "rgba(245,226,198,1)",
              textShadow:
                "0 0 20px rgba(247,165,77,0.6), 0 0 20px rgba(247,165,77,0.5), 0 0 40px rgba(247,165,77,0.4)",
                
            }}
          >
            {mission.title}
          </h2>
          <p className="mb-6 text-xs italic font-light text-center text-yellow-200">
            Pertanyaan {currentQuestionIndex + 1} dari {mission.questions.length}
          </p>

          {/* 🧠 Pertanyaan */}
          <p className="mb-5 text-[15px] md:text-base leading-relaxed text-center text-yellow-100">
            {currentQuestion.question}
          </p>

          {/* 📋 Pilihan */}
          <div className="mb-5 space-y-3 text-sm italic font-light">
            {currentQuestion.options.map((opt) => (
              <motion.label
                key={opt}
                whileHover={{ scale: 1.015 }}
                whileTap={{ scale: 0.985 }}
                className={`block py-2.5 px-4 rounded-lg border text-center cursor-pointer transition-all tracking-wide font-medium select-none
                  ${
                    selected === opt
                      ? "bg-[#f5e6c6] text-black border-amber-400"
                      : "bg-black/20 border-yellow-800 text-yellow-100 hover:bg-black/30"
                  }`}
              >
                <input
                  type="radio"
                  name="option"
                  value={opt}
                  checked={selected === opt}
                  onChange={() => setSelected(opt)}
                  className="hidden"
                />
                {opt}
              </motion.label>
            ))}
          </div>

          {/* Feedback */}
          <AnimatePresence>
            {isAnswered && (
              <motion.p
                key="feedback"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className={`text-center font-semibold text-sm mb-4 ${
                  isCorrect ? "text-green-400" : "text-red-400"
                }`}
              >
                {isCorrect ? "✅ Jawaban Benar!" : "❌ Jawaban Salah!"}
              </motion.p>
            )}
          </AnimatePresence>

          {/* Tombol Submit */}
          {!isAnswered && (
            <motion.button
              whileTap={{ scale: 0.96 }}
              whileHover={{ scale: 1.02 }}
              onClick={handleSubmit}
              className="w-full py-2.5 mt-2 text-sm font-semibold text-black rounded-md bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-400 hover:shadow-lg transition-all"
            >
              ✅ Kunci Jawaban
            </motion.button>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default MissionPage;
