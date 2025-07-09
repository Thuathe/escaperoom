import { useParams, useNavigate } from "react-router-dom";
import { missions } from "../data/mission";
import { useState } from "react";

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
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        navigate(`/result?mission=${mission.id}`);
      }
    }, 2000);
  };

  return (
    <div className="relative min-h-screen bg-[#0d0f1a] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/img/bg.jpg"
          alt="castle"
          className="object-cover w-full h-full opacity-30"
        />
      </div>

      {/* Kabut + cahaya */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#ffb84d22] to-[#0d0f1a] z-0" />
      <div className="absolute inset-0 bg-[url('/img/fog.png')] bg-cover opacity-10 z-0" />

      {/* Konten */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="w-full max-w-2xl p-8 text-white border border-yellow-900 shadow-xl backdrop-blur-lg bg-white/5 rounded-xl">
          <h2 className="mb-2 text-2xl font-bold text-amber-400">{mission.title}</h2>
          <p className="mb-4 text-sm text-yellow-200">
            Pertanyaan {currentQuestionIndex + 1} dari {mission.questions.length}
          </p>
          <p className="mb-6 text-yellow-100">{currentQuestion.question}</p>

          <div className="grid gap-4 mb-6">
            {currentQuestion.options.map((opt) => (
              <label
                key={opt}
                className={`block px-4 py-2 border rounded cursor-pointer transition-all duration-200 ${
                  selected === opt
                    ? "bg-amber-100 text-black border-amber-400"
                    : "bg-black/30 text-yellow-200 border-yellow-800 hover:bg-black/40"
                }`}
              >
                <input
                  type="radio"
                  name="option"
                  value={opt}
                  checked={selected === opt}
                  onChange={() => setSelected(opt)}
                  className="mr-2"
                />
                {opt}
              </label>
            ))}
          </div>

          {isAnswered && (
            <div
              className={`text-center mb-4 font-semibold ${
                isCorrect ? "text-green-400" : "text-red-400"
              }`}
            >
              {isCorrect ? "Jawaban Benar!" : "Jawaban Salah!"}
            </div>
          )}

          {!isAnswered && (
            <button
              onClick={handleSubmit}
              className="w-full px-4 py-2 font-bold text-black transition rounded shadow-md bg-amber-500 hover:bg-amber-600"
            >
              ✅ Kunci Jawaban
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MissionPage;
