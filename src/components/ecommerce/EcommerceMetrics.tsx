"use client";
import React, { useState, useEffect } from "react";
import Badge from "../ui/badge/Badge";
import { GroupIcon, BoxIconLine } from "@/icons";

export const EcommerceMetrics = () => {
  const [employeeCount, setEmployeeCount] = useState(600);
  const [isBlinking, setIsBlinking] = useState(false);
  const [orderValue, setOrderValue] = useState(Math.floor(600 * 0.85));
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setEmployeeCount((prev) => {
        const newCount = prev + 10;
        setIsBlinking(true);
        setIsLoading(true);

        setTimeout(() => {
          setIsBlinking(false);
          setIsLoading(false);
          setOrderValue(Math.floor(newCount * 0.99));
        }, 5000);

        return newCount;
      });
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center w-full">
      <div className="grid grid-cols-3 gap-4 md:gap-6 w-7/10">
        {/* Employee Count */}
        <div className="rounded-2xl border border-gray-200 bg-white p-3 md:p-4 h-32 dark:border-gray-800 dark:bg-white/[0.03]">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-xl dark:bg-gray-800">
              <GroupIcon className="text-gray-800 size-5 dark:text-white/90" />
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
              <Badge color="green">LIVE</Badge>
            </div>
          </div>
          <div className="mt-2">
            <span className="text-xs text-gray-500 dark:text-gray-400">
              Total Employee count in office
            </span>
            <h4 className={`mt-1 font-bold text-gray-800 text-lg dark:text-white/90 ${isBlinking ? "animate-pulse" : ""}`}>
              {employeeCount}
            </h4>
          </div>
        </div>

        {/* Orders Predicted */}
        <div className="rounded-2xl border border-gray-200 bg-white p-3 md:p-4 h-32 dark:border-gray-800 dark:bg-white/[0.03]">
          <div className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-xl dark:bg-gray-800">
            <BoxIconLine className="text-gray-800 dark:text-white/90" />
          </div>
          
          <div className="mt-2">
            <span className="text-xs text-gray-500 dark:text-gray-400">
              Total orders predicted
            </span>
            {isLoading ? (
              <div className="mt-1 flex justify-center">
                <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-blue-500"></div>
              </div>
            ) : (
              <h4 className="mt-1 font-bold text-gray-800 text-lg dark:text-white/90">
                {orderValue}
              </h4>
            )}
          </div>
        </div>

        {/* Order Placement */}
        <div className="rounded-2xl border border-gray-200 bg-white p-3 md:p-4 h-32 dark:border-gray-800 dark:bg-white/[0.03]">
          <div>
            <h3 className="text-sm font-semibold text-gray-800 dark:text-white/90">
              Order Placement
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Place order for 23/03/2025
            </p>
          </div>
          <input
            id="a-order-count"
            type="number"
            value={orderValue}
            className="dark:bg-dark-900 h-8 w-full rounded-lg border border-gray-300 bg-transparent px-2 py-1 text-xs text-gray-800 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90"
          />
          <br></br>  
          <button
            type="button"
            className="mt-1 w-full rounded-lg bg-brand-500 px-2 py-1 text-xs font-medium text-white hover:bg-brand-600"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};