import { createContext, useState, useRef } from "react";

export const TimerContext = createContext();

export const TimerProvider = ({ children }) => {
  const [elapsed, setElapsed] = useState(0);         // total detik berjalan
  const intervalRef = useRef(null);                  // id interval timer
  const startTimeRef = useRef(null);                 // waktu mulai

  const startTimer = () => {
    stopTimer(); // Pastikan tidak ada timer lama aktif

    startTimeRef.current = Date.now();
    intervalRef.current = setInterval(() => {
      const now = Date.now();
      const seconds = Math.floor((now - startTimeRef.current) / 1000);
      setElapsed(seconds);
    }, 1000);
  };

  const stopTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const resetTimer = () => {
    stopTimer();
    setElapsed(0);
    startTimeRef.current = null;
  };

  return (
    <TimerContext.Provider value={{ elapsed, startTimer, stopTimer, resetTimer }}>
      {children}
    </TimerContext.Provider>
  );
};
