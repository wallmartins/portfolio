"use client";

import { useState, useEffect } from "react";

export default function Clock() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    // Update time every second
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    // Clean up interval on unmount
    return () => clearInterval(timer);
  }, []);

  // Format date as "Day, Month DD HH:MM"
  const formatDate = (date: Date) => {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const day = days[date.getDay()];
    const month = months[date.getMonth()];
    const dateNum = date.getDate();

    // Get hours and minutes with leading zeros if needed
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");

    return `${day}, ${month} ${dateNum} ${hours}:${minutes}`;
  };

  return (
    <div className="flex items-center text-xs text-[#c0cbcd] p-2 rounded-md font-body">
      <svg
        className="w-4 h-4 mr-2"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 6V12L16 14"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {formatDate(currentDateTime)}
    </div>
  );
}
