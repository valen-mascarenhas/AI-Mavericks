"use client";
import React, { useState } from "react";
import { format, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, subMonths, addMonths, isBefore, isToday, isSameMonth } from "date-fns";

const eventData: Record<string, string> = {
  "2025-02-23": "Lunch count: 0\nSnack count: 0",
  "2025-02-24": "Lunch count: 720\nSnack count: 576",
  "2025-02-25": "Lunch count: 810\nSnack count: 648",
  "2025-02-26": "Lunch count: 950\nSnack count: 760",
  "2025-02-27": "Lunch count: 880\nSnack count: 704",
  "2025-02-28": "Lunch count: 600\nSnack count: 480",
  "2025-03-01": "Lunch count: 0\nSnack count: 0",
  "2025-03-02": "Lunch count: 0\nSnack count: 0",
  "2025-03-03": "Lunch count: 800\nSnack count: 640",
  "2025-03-04": "Lunch count: 700\nSnack count: 560",
  "2025-03-05": "Lunch count: 900\nSnack count: 720",
  "2025-03-06": "Lunch count: 750\nSnack count: 600",
  "2025-03-07": "Lunch count: 820\nSnack count: 656",
  "2025-03-08": "Lunch count: 0\nSnack count: 0",
  "2025-03-09": "Lunch count: 0\nSnack count: 0",
  "2025-03-10": "Lunch count: 500\nSnack count: 400",
  "2025-03-11": "Lunch count: 600\nSnack count: 480",
  "2025-03-12": "Lunch count: 950\nSnack count: 760",
  "2025-03-13": "Lunch count: 576\nSnack count: 461",
  "2025-03-14": "Holi",
  "2025-03-15": "Lunch count: 0\nSnack count: 0",
  "2025-03-16": "Lunch count: 0\nSnack count: 0",
  "2025-03-17": "Lunch count: 880\nSnack count: 704",
  "2025-03-18": "Lunch count: 940\nSnack count: 752",
  "2025-03-19": "Lunch count: 670\nSnack count: 536",
  "2025-03-20": "Lunch count: 730\nSnack count: 584",
  "2025-03-21": "Lunch count: 810\nSnack count: 648",
  "2025-03-22": "Lunch count: 0\nSnack count: 0",
  "2025-03-23": "Lunch count: 0\nSnack count: 0",
  "2025-03-24": "Lunch count: 920\nSnack count: 736",
  "2025-03-25": "Lunch count: 780\nSnack count: 624",
  "2025-03-26": "Lunch count: 890\nSnack count: 712",
  "2025-03-27": "Lunch count: 960\nSnack count: 768",
  "2025-03-28": "Lunch count: 640\nSnack count: 512",
  "2025-03-29": "Lunch count: 0\nSnack count: 0",
  "2025-03-30": "Lunch count: 0\nSnack count: 0",
  "2025-03-31": "Lunch count: 720\nSnack count: 576",
  "2025-04-01": "Lunch count: 850\nSnack count: 680",
  "2025-04-02": "Lunch count: 900\nSnack count: 720",
  "2025-04-03": "Lunch count: 950\nSnack count: 760",
  "2025-04-04": "Lunch count: 700\nSnack count: 560",
  "2025-04-05": "Lunch count: 0\nSnack count: 0"
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
    <div className="p-6 w-[600px] mx-auto relative">
      <h1 className="text-3xl font-bold text-center mb-4">Monthly Calendar</h1>
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
                isBefore(day.date, new Date()) && !isToday(day.date) ? "bg-gray-500 text-gray-800" : "bg-blue-300 text-black"
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