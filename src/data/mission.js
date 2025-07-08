export const missions = [
  {
    id: 1,
    title: "Misi 1: Fungsi Dasar",
    puzzle: {
      type: "riddle",
      clue: "Bentukku besar, tak punya resleting, sering ada di sawah dan pasar.",
      answer: "karung",
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
    puzzle: {
      type: "riddle",
      clue: "Aku bisa menghitung banyaknya data, bukan SUM, bukan MIN. Siapakah aku?",
      answer: "count"
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
    puzzle: {
      type: "riddle",
      clue: "Digunakan untuk mengetahui cicilan per bulan. Apakah aku?",
      answer: "pmt"
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
    puzzle: {
      type: "riddle",
      clue: "Aku bisa menemukan nama hanya dengan kode. Siapakah aku?",
      answer: "vlookup"
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
    puzzle: {
      type: "riddle",
      clue: "Aku bekerja saat dua syarat benar. Tapi aku bukan OR. Siapakah aku?",
      answer: "and"
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
