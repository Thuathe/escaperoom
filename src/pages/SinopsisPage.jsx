import { useNavigate } from "react-router-dom";

const SinopsisPage = () => {
  const navigate = useNavigate();
  const playerName = localStorage.getItem("playerName");

  return (
    <div className="relative min-h-screen bg-[#0d0f1a] overflow-hidden">
      {/* Background kastil */}
      <div className="absolute inset-0 z-0">
        <img
          src="/img/bg.jpg"
          alt="castle"
          className="object-cover w-full h-full opacity-30"
        />
      </div>

      {/* Lapisan kabut & aura api */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#ffb84d22] to-[#0d0f1a] z-0" />
      <div className="absolute inset-0 bg-[url('/img/fog.jpg')] bg-cover opacity-10 z-0" />

      {/* Konten */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6">
        <div className="backdrop-blur-lg bg-white/5 border border-yellow-900 rounded-xl p-8 w-full max-w-3xl shadow-2xl text-white">
          <h2 className="text-3xl font-bold text-center text-amber-400 mb-6 drop-shadow">
            Selamat Datang, Agen {playerName}
          </h2>
          <p className="mb-6 text-sm md:text-base text-yellow-100 leading-relaxed text-justify">
            Kamu adalah seorang analis keuangan yang terperangkap dalam kastil hitam legendaris,
            <span className="italic"> Vault of Numbers</span>—ruang virtual rahasia milik <span className="font-semibold">The Formula Society</span>.
            Untuk keluar, kamu harus memecahkan 5 misi penuh jebakan logika. Setiap misi berisi teka-teki, riddle, dan tantangan berpikir cepat.
            Tak semua berhasil keluar. Tapi mungkin… kamu bukan manusia biasa.
          </p>

          <button
            onClick={() => navigate("/dashboard")}
            className="mt-4 w-full bg-amber-500 hover:bg-amber-600 text-black font-bold px-6 py-2 rounded shadow-md transition-all duration-300"
          >
            🗺️ Masuk ke Peta Labirin
          </button>
        </div>
      </div>
    </div>
  );
};

export default SinopsisPage;
