"use client";
import React, { useState, useEffect } from "react";
import Badge from "../ui/badge/Badge";
import { GroupIcon, BoxIconLine } from "@/icons";

export const EcommerceMetrics = () => {
  const [employeeCount, setEmployeeCount] = useState(600);
  const [orderValue, setOrderValue] = useState(Math.floor(600 * 0.85));
  const [lunchValue, setLunchValue] = useState(Math.floor(600 * 0.40));
  const [isSpinning, setIsSpinning] = useState(false);

  const getCurrentDate = () => {
    const today = new Date();
    return today.toLocaleDateString("en-GB"); // "en-GB" formats as DD/MM/YYYY
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setEmployeeCount((prev) => prev + 10);
      setIsSpinning(true);
      setTimeout(() => {
        setOrderValue(Math.floor((employeeCount + 5) * 0.75));
        setLunchValue(Math.floor((employeeCount + 5) * 0.40));
        setIsSpinning(false);
      }, 5000);
    }, 50000);

    return () => clearInterval(interval);
  }, [employeeCount]);

  return (
    <div className="flex justify-center w-full">
      <div className="grid grid-cols-3 gap-4 md:gap-6 w-7/10">
        {[{
            title: "Total Employee count in office",
            value: employeeCount,
            bgColor: "bg-green-200 dark:bg-green-900",
            icon: <GroupIcon className="text-gray-800 size-5 dark:text-white/90" />, 
          },
          {
            title: "Total orders predicted",
            value: isSpinning ? (
              <div className="relative w-6 h-6">
                <div className="absolute w-full h-full border-4 border-transparent border-t-gray-500 rounded-full animate-spin"></div>
              </div>
            ) : orderValue,
            bgColor: "bg-amber-200 dark:bg-amber-900",
            icon: <BoxIconLine className="text-gray-800 dark:text-white/90" />, 
          },
        ].map((item, index) => (
          <div key={index} className={`rounded-2xl border border-gray-200 p-3 md:p-4 h-40 dark:border-gray-800 ${item.bgColor} flex flex-col justify-between`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-center w-10 h-10 bg-opacity-20 rounded-xl dark:bg-opacity-20">
                {item.icon}
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                <Badge color="green">LIVE</Badge>
              </div>
            </div>
            <div className="mt-2 flex flex-col items-center">
              <span className="text-xs text-gray-500 dark:text-gray-400">{item.title}</span>
              <h4 className={`mt-1 font-bold text-gray-800 text-lg dark:text-white/90 px-4 py-2 rounded-lg bg-opacity-50` }>
                {item.value}
              </h4>
            </div>
          </div>
        ))}

        <div className="rounded-2xl border border-gray-200 bg-white p-4 h-40 dark:border-gray-800 dark:bg-gray-900 shadow-md flex flex-col justify-between">
          <div>
            <h3 className="text-sm font-semibold text-gray-800 dark:text-white/90">Order Placement</h3>
            <p className="text-xs text-gray-500 dark:text-gray-400">{getCurrentDate()}</p>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between items-center bg-green-300 dark:bg-green-800 p-2 rounded-lg w-full">
              <h2 className="text-xs font-medium text-gray-800 dark:text-white/90 whitespace-nowrap">Lunch:</h2>
              <span className="px-3 py-1 text-white bg-green-500 rounded-lg text-xs">
                <b>{orderValue}</b>
              </span>
            </div>
            <div className="flex justify-between items-center bg-blue-300 dark:bg-blue-800 p-2 rounded-lg w-full">
              <h2 className="text-xs font-medium text-gray-800 dark:text-white/90 whitespace-nowrap">Snacks:</h2>
              <span className="px-3 py-1 text-white bg-blue-500 rounded-lg text-xs">
                <b>{lunchValue}</b>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};