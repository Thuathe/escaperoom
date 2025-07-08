import { useState } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [name, setName] = useState("");
  const [kelas, setKelas] = useState("");
  const navigate = useNavigate();

  const handleStart = () => {
    if (!name.trim() || !kelas.trim()) {
      return alert("Isi nama dan kelas dulu ya, agen!");
    }
    localStorage.setItem("playerName", name);
    localStorage.setItem("playerClass", kelas);
    localStorage.setItem("score", 0);
    navigate("/sinopsis");
  };

  return (
    <div className="relative min-h-screen bg-[#0d0f1a] overflow-hidden">
      {/* Background catur kastil (pakai gambar user upload) */}
      <div className="absolute inset-0 z-0 bg-black">
        <img
          src="\img\fog.jpg" // <- rename file user ke ini dan taruh di public/img/
          alt="castle"
          className="object-cover w-full h-full opacity-30"
        />
      </div>

      {/* Aura emas & kabut */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#ffb84d22] to-[#0d0f1a] z-0" />
      <div className="absolute inset-0 bg-[url('/img/fog.png')] bg-cover opacity-10 z-0" />

      {/* Konten */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="backdrop-blur-md bg-white/5 border border-yellow-900 rounded-2xl p-8 w-full max-w-lg shadow-2xl text-white">
          <h1 className="text-4xl font-extrabold text-center text-amber-400 mb-6 tracking-wide drop-shadow-[0_0_15px_rgba(255,184,77,0.7)]">
            ✦ ESCAPECASTLE ✦
          </h1>
          <p className="mb-6 text-center text-sm text-yellow-100">
            Sebuah kastil hitam dengan lorong tak berujung dan teka-teki api. Masukkan identitasmu untuk memulai pelarian.
          </p>

          <div className="mb-4">
            <label className="block mb-1 text-sm text-yellow-200">Nama Agen</label>
            <input
              type="text"
              placeholder="Contoh: Leonhart"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 bg-black/30 border border-yellow-800 rounded focus:outline-none text-white placeholder:text-yellow-400"
            />
          </div>

          <div className="mb-6">
            <label className="block mb-1 text-sm text-yellow-200">Kelas</label>
            <input
              type="text"
              placeholder="Contoh: XI Elite"
              value={kelas}
              onChange={(e) => setKelas(e.target.value)}
              className="w-full px-4 py-2 bg-black/30 border border-yellow-800 rounded focus:outline-none text-white placeholder:text-yellow-400"
            />
          </div>

          <button
            onClick={handleStart}
            className="w-full bg-amber-500 hover:bg-amber-600 text-black font-bold px-4 py-2 rounded shadow-md transition duration-300"
          >
            🔥 Masuki Labirin
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
