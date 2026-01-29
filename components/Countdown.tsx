
import React, { useState, useEffect } from 'react';

interface CountdownProps {
  targetDate: string;
}

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState<{ days: number; hours: number; minutes: number; seconds: number } | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      const target = new Date(targetDate).getTime();
      const now = new Date().getTime();
      const difference = target - now;

      if (difference <= 0) {
        clearInterval(timer);
        setTimeLeft(null);
      } else {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (!timeLeft) return <div className="text-lg font-bold text-blue-900 animate-pulse">¡Ha llegado el gran día!</div>;

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center mx-2 md:mx-4">
      <div className="bg-white rounded-xl shadow-md p-3 md:p-4 min-w-[60px] md:min-w-[80px] flex items-center justify-center">
        <span className="text-2xl md:text-3xl font-black text-blue-900">{value.toString().padStart(2, '0')}</span>
      </div>
      <span className="text-[10px] md:text-xs uppercase font-bold text-blue-700 mt-2">{label}</span>
    </div>
  );

  return (
    <div className="flex justify-center items-center py-4">
      <TimeUnit value={timeLeft.days} label="Días" />
      <TimeUnit value={timeLeft.hours} label="Horas" />
      <TimeUnit value={timeLeft.minutes} label="Mins" />
      <TimeUnit value={timeLeft.seconds} label="Segs" />
    </div>
  );
};

export default Countdown;
