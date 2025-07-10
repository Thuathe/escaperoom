export const missions = [
  {
    id: 1,
    title: "Misi 1: Fungsi Dasar",
    info: "Latihan dasar untuk mengenali fungsi-fungsi paling umum dalam perhitungan Excel.",
    puzzle: {
      type: "riddle",
      clue: "Bentuk ku besar dan tidak mempunyai resleting, Aku sering terlihat di sawah dan di pasar, Menampung banyak tapi bukan koper. Siapakah Aku?",
      answer: "karung",
      image: "room-1.jpg",
      hotspots: {
        desktop: [
          { x: 65, y: 270, isCorrect: true },
          { x: 169, y: 55, isCorrect: false },
          { x: 575, y: 380, isCorrect: false },
          { x: 460, y: 330, isCorrect: false },
          { x: 760, y: 340, isCorrect: false }
        ],
        mobile: [
          { x: 30, y: 170, isCorrect: true },
          { x: 110, y: 40, isCorrect: false },
          { x: 270, y: 230, isCorrect: false },
          { x: 210, y: 180, isCorrect: false },
          { x: 330, y: 190, isCorrect: false }
        ]
      }
    },
    questions: [
      {
        question: "Untuk menjumlahkan item rahasia, agen menggunakan fungsi...",
        options: ["ADD", "Combine", "TOTAL", "SUM"],
        answer: "SUM"
      },
      {
        question: "Fungsi untuk membulatkan angka ke atas adalah...",
        options: ["Floor", "Ceiling", "RoundDown", "Shorten"],
        answer: "Ceiling"
      }
    ]
  },
  {
    id: 2,
    title: "Misi 2: Statistik",
    info: "Pahami cara menganalisis data menggunakan COUNT, MAX, dan fungsi statistik lainnya.",
    puzzle: {
      type: "riddle",
      clue: "Aku bisa menghitung banyaknya data, bukan SUM, bukan MIN. Siapakah aku?",
      answer: "count",
      image: "room-2.jpg",
      hotspots: {
        desktop: [
          { x: 100, y: 250, isCorrect: true },
          { x: 70, y: 100, isCorrect: false },
          { x: 320, y: 90, isCorrect: false },
          { x: 300, y: 300, isCorrect: false },
          { x: 140, y: 340, isCorrect: false }
        ],
        mobile: [
          { x: 50, y: 160, isCorrect: true },
          { x: 40, y: 60, isCorrect: false },
          { x: 180, y: 50, isCorrect: false },
          { x: 160, y: 180, isCorrect: false },
          { x: 90, y: 200, isCorrect: false }
        ]
      }
    },
    questions: [
      {
        question: "Fungsi untuk menghitung banyaknya data dalam Excel?",
        options: ["SUM", "MIN", "COUNT", "IF"],
        answer: "COUNT"
      },
      {
        question: "Untuk mengetahui nilai tertinggi dari skor agen digunakan...",
        options: ["MIN", "AVERAGE", "MAX", "MOD"],
        answer: "MAX"
      }
    ]
  },
  {
    id: 3,
    title: "Misi 3: Finansial",
    info: "Gunakan fungsi keuangan seperti PMT dan FV untuk mengendalikan masa depan keuanganmu.",
    puzzle: {
      type: "riddle",
      clue: "Digunakan untuk mengetahui cicilan per bulan. Apakah aku?",
      answer: "pmt",
      image: "room-3.jpg",
      hotspots: {
        desktop: [
          { x: 140, y: 200, isCorrect: true },
          { x: 60, y: 80, isCorrect: false },
          { x: 320, y: 120, isCorrect: false },
          { x: 100, y: 320, isCorrect: false },
          { x: 370, y: 280, isCorrect: false }
        ],
        mobile: [
          { x: 70, y: 130, isCorrect: true },
          { x: 30, y: 40, isCorrect: false },
          { x: 170, y: 70, isCorrect: false },
          { x: 60, y: 200, isCorrect: false },
          { x: 190, y: 180, isCorrect: false }
        ]
      }
    },
    questions: [
      {
        question: "Fungsi yang menghitung cicilan bulanan adalah...",
        options: ["PV", "FV", "PMT", "NPer"],
        answer: "PMT"
      },
      {
        question: "Fungsi untuk mengetahui nilai di masa depan adalah...",
        options: ["FV", "RATE", "PV", "COUNT"],
        answer: "FV"
      }
    ]
  },
  {
    id: 4,
    title: "Misi 4: Lookup",
    info: "Tantangan untuk menemukan informasi tersembunyi menggunakan lookup dan reference.",
    puzzle: {
      type: "riddle",
      clue: "Aku bisa menemukan nama hanya dengan kode. Siapakah aku?",
      answer: "vlookup",
      image: "room-4.jpg",
      hotspots: {
        desktop: [
          { x: 180, y: 220, isCorrect: true },
          { x: 40, y: 70, isCorrect: false },
          { x: 290, y: 130, isCorrect: false },
          { x: 280, y: 310, isCorrect: false },
          { x: 130, y: 360, isCorrect: false }
        ],
        mobile: [
          { x: 80, y: 150, isCorrect: true },
          { x: 20, y: 40, isCorrect: false },
          { x: 160, y: 80, isCorrect: false },
          { x: 150, y: 200, isCorrect: false },
          { x: 70, y: 240, isCorrect: false }
        ]
      }
    },
    questions: [
      {
        question: "Fungsi untuk mencari data secara vertikal?",
        options: ["HLOOKUP", "INDEX", "VLOOKUP", "MATCH"],
        answer: "VLOOKUP"
      },
      {
        question: "Fungsi untuk mengekstrak data berdasarkan baris & kolom?",
        options: ["INDEX", "MATCH", "IF", "SUMIF"],
        answer: "INDEX"
      }
    ]
  },
  {
    id: 5,
    title: "Misi 5: Logika",
    info: "Uji kemampuan berpikirmu dengan logika AND, OR, dan NOT. Jangan tertipu ilusi!",
    puzzle: {
      type: "riddle",
      clue: "Aku bekerja saat dua syarat benar. Tapi aku bukan OR. Siapakah aku?",
      answer: "and",
      image: "room-5.jpg",
      hotspots: {
        desktop: [
          { x: 200, y: 250, isCorrect: true },
          { x: 70, y: 100, isCorrect: false },
          { x: 330, y: 110, isCorrect: false },
          { x: 90, y: 310, isCorrect: false },
          { x: 350, y: 270, isCorrect: false }
        ],
        mobile: [
          { x: 100, y: 160, isCorrect: true },
          { x: 40, y: 60, isCorrect: false },
          { x: 180, y: 70, isCorrect: false },
          { x: 50, y: 200, isCorrect: false },
          { x: 190, y: 170, isCorrect: false }
        ]
      }
    },
    questions: [
      {
        question: "Fungsi logika untuk dua kondisi sekaligus?",
        options: ["OR", "AND", "IF", "ROUND"],
        answer: "AND"
      },
      {
        question: "Apa hasil dari =NOT(TRUE) ?",
        options: ["TRUE", "FALSE", "ERROR", "0"],
        answer: "FALSE"
      }
    ]
  }
];
