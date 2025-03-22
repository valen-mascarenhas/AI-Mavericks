import type { Metadata } from "next";
import { EcommerceMetrics } from "@/components/ecommerce/EcommerceMetrics";
import React, { useState, useEffect } from "react";
import MonthlyTarget from "@/components/ecommerce/MonthlyTarget";
import MonthlySalesChart from "@/components/ecommerce/MonthlySalesChart";
import StatisticsChart from "@/components/ecommerce/StatisticsChart";
import CalendarCard from "@/components/ecommerce/CalendarCard";
import RecentOrders from "@/components/ecommerce/RecentOrders";

export const metadata: Metadata = {
  title:
    "PSL Admin Dashboard ",
  description: "",
};

export default function Ecommerce() {
  return (
    <div className="grid grid-cols-12 gap-4 md:gap-6">
      <div className="col-span-6 space-y-6 xl:col-span-12">
        <EcommerceMetrics />
      </div>

      {/* <div className="col-span-12 xl:col-span-5">
        <MonthlyTarget />
      </div> */}

      <div className="col-span-12 xl:col-span-6">
      <MonthlySalesChart />
      </div>

      <div className="col-span-12 xl:col-span-6">
      <RecentOrders />
      </div>

      <div className="col-span-7 xl:col-span-8">
        <CalendarCard />
      </div>
    </div>
  );
}
