"use client"
import { useState, useEffect } from "react";
export default function TimerSection({targetDate}){
    const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);
    return(
        <div className="bg-black text-sm text-white text-center py-2">
        Admissions Open for PGDM Business Analytics,
with Triple Specialization with Deadline of{" "}
        <span className="font-bold">20 June 2025</span>
        <div className="flex justify-center gap-4 mt-3">
        {['days', 'hours', 'minutes', 'seconds'].map((unit) => (
          <div key={unit} className="bg-red-700 text-white rounded w-20 py-3 shadow">
            <div className="text-3xl font-bold">{`${timeLeft[unit]<10? "0":""}`}{ timeLeft[unit]}</div>
            <div className="uppercase text-xs">{unit}</div>
          </div>
        ))}
      </div>
      </div>
    )
}