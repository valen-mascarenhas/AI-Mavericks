"use client";
import React, { useState } from "react";
import { format, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, subMonths, addMonths, isBefore, isToday, isSameMonth } from "date-fns";

const eventData: Record<string, string> = {
  "2025-02-23": "0/0",
  "2025-02-24": "720/576",
  "2025-02-25": "810/648",
  "2025-02-26": "950/760",
  "2025-02-27": "880/704",
  "2025-02-28": "600/480",
  "2025-03-01": "0/0",
  "2025-03-02": "0/0",
  "2025-03-03": "800/640",
  "2025-03-04": "700/560",
  "2025-03-05": "900/720",
  "2025-03-06": "750/600",
  "2025-03-07": "820/656",
  "2025-03-08": "0/0",
  "2025-03-09": "0/0",
  "2025-03-10": "500/400",
  "2025-03-11": "600/480",
  "2025-03-12": "950/760",
  "2025-03-13": "576/461",
  "2025-03-14": "Holi",
  "2025-03-15": "0/0",
  "2025-03-16": "0/0",
  "2025-03-17": "880/704",
  "2025-03-18": "940/752",
  "2025-03-19": "670/536",
  "2025-03-20": "730/584",
  "2025-03-21": "810/648",
  "2025-03-22": "0/0",
  "2025-03-23": "0/0",
  "2025-03-24": "920/736",
  "2025-03-25": "780/624",
  "2025-03-26": "890/712",
  "2025-03-27": "960/768",
  "2025-03-28": "640/512",
  "2025-03-29": "0/0",
  "2025-03-30": "0/0",
  "2025-03-31": "720/576",
  "2025-04-01": "850/680",
  "2025-04-02": "900/720",
  "2025-04-03": "950/760",
  "2025-04-04": "700/560",
  "2025-04-05": "820/656"
};

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);

  const days = [];
  let currentDate = startDate;

  while (currentDate <= endDate) {
    days.push({ date: currentDate });
    currentDate = addDays(currentDate, 1);
  }

  return (
    <div className="p-6 w-[550px] mx-auto relative">
      <div className="flex justify-between items-center mb-4">
        <button onClick={() => setCurrentMonth(subMonths(currentMonth, 1))} className="px-4 py-2 bg-gray-300 rounded">← Prev</button>
        <h2 className="text-2xl font-bold text-center">{format(currentMonth, "MMMM yyyy")}</h2>
        <button onClick={() => setCurrentMonth(addMonths(currentMonth, 1))} className="px-4 py-2 bg-gray-300 rounded">Next →</button>
      </div>
      <div className="grid grid-cols-7 gap-2 text-center text-lg relative z-10">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className="font-semibold">{day}</div>
        ))}
        {days.map((day, index) => {
          const formattedDate = format(day.date, "yyyy-MM-dd");
          const eventText = eventData[formattedDate] || "No Events";

          return (
            <div
              key={index}
              className={`relative p-3 rounded-lg text-xl group hover:z-20 ${
                !isSameMonth(day.date, monthStart) ? "bg-gray-200 text-gray-400" :
                isBefore(day.date, new Date()) && !isToday(day.date) ? "bg-gray-400 text-gray-700" : "bg-blue-300 text-black"
              } ${isToday(day.date) ? "border-2 border-red-500" : ""}`}
            >
              {format(day.date, "d")}
              <div className="absolute left-1/2 top-[-40px] transform -translate-x-1/2 hidden w-40 bg-gray-800 text-white text-sm p-2 rounded shadow-lg group-hover:block">
                {eventText}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
 