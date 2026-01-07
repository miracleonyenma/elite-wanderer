"use client";

import { useState, useEffect, useSyncExternalStore } from "react";

interface CountdownProps {
  targetDate: string; // ISO date string for countdown (e.g., "2026-02-07T14:00:00")
  className?: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

// Custom hook for hydration-safe mounting
function useHasMounted() {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
}

function calculateTimeLeft(targetDate: string): TimeLeft | null {
  const target = new Date(targetDate);
  const now = new Date();
  const difference = target.getTime() - now.getTime();

  if (difference <= 0) {
    return null;
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

export function EventCountdown({ targetDate, className }: CountdownProps) {
  const hasMounted = useHasMounted();
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(() =>
    calculateTimeLeft(targetDate),
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  // Show placeholder during SSR
  if (!hasMounted) {
    return (
      <div className={className}>
        <div className="flex items-center gap-4 md:gap-8">
          {["Days", "Hrs", "Min", "Sec"].map((label) => (
            <div key={label} className="flex flex-col items-center">
              <span className="font-heading text-3xl font-bold md:text-5xl">
                --
              </span>
              <span className="text-[10px] font-bold tracking-[0.15em] uppercase opacity-60">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (!timeLeft) {
    return (
      <div className={className}>
        <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-bold tracking-[0.2em] uppercase backdrop-blur-md">
          Event Has Started
        </span>
      </div>
    );
  }

  const timeUnits = [
    { value: timeLeft.days, label: "Days" },
    { value: timeLeft.hours, label: "Hrs" },
    { value: timeLeft.minutes, label: "Min" },
    { value: timeLeft.seconds, label: "Sec" },
  ];

  return (
    <div className={className}>
      <div className="flex items-center gap-4 md:gap-8">
        {timeUnits.map((unit, idx) => (
          <div key={unit.label} className="relative flex flex-col items-center">
            <span className="font-heading text-3xl font-bold tabular-nums md:text-5xl">
              {unit.value.toString().padStart(2, "0")}
            </span>
            <span className="text-[10px] font-bold tracking-[0.15em] uppercase opacity-60">
              {unit.label}
            </span>
            {idx < timeUnits.length - 1 && (
              <span className="absolute top-1 -right-2 text-xl opacity-30 md:-right-4 md:text-3xl">
                :
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
