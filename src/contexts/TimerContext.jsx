import { createContext, useState, useEffect, useRef } from "react";

export const TimerContext = createContext();

export const TimerProvider = ({ children }) => {
  const [startTime] = useState(Date.now());
  const [elapsed, setElapsed] = useState(0);
  const [isStopped, setIsStopped] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setElapsed(Math.floor((Date.now() - startTime) / 1000));
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, [startTime]);

  const stopTimer = () => {
    setIsStopped(true);
    clearInterval(intervalRef.current);
  };

  return (
    <TimerContext.Provider value={{ elapsed, stopTimer, isStopped }}>
      {children}
    </TimerContext.Provider>
  );
};
