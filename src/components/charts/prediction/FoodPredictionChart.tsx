"use client";

import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";
import { Dropdown } from "../../ui/dropdown/Dropdown";
import { MoreDotIcon } from "@/icons";
import { useState } from "react";
import { DropdownItem } from "../../ui/dropdown/DropdownItem";

// Dynamically import the ReactApexChart component
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

interface ChartData {
  categories: string[];
  predicted: number[];
  actual: number[];
}

const sampleData: ChartData = {
  categories: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
  predicted: [50, 60, 55, 70, 65],
  actual: [45, 62, 50, 75, 60],
};

const FoodPredictionChart = ({ data = sampleData }: { data: ChartData }) => {
  const [timeRange, setTimeRange] = useState("weekly");
  const [isOpen, setIsOpen] = useState(false);

  const chartOptions: ApexOptions = {
    chart: {
      type: "line",
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      categories: data.categories,
    },
    stroke: {
      curve: "smooth",
    },
    markers: {
      size: 5,
    },
    colors: ["#008FFB", "#FF4560"],
  };

  const series = [
    {
      name: "Predicted Consumption",
      data: data.predicted,
    },
    {
      name: "Actual Consumption",
      data: data.actual,
    },
  ];

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Last Weeks Food Consumption Analysis</h2>
        <Dropdown isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <DropdownItem onClick={() => { setTimeRange("weekly"); setIsOpen(false); }}>Weekly</DropdownItem>
          <DropdownItem onClick={() => { setTimeRange("monthly"); setIsOpen(false); }}>Monthly</DropdownItem>
        </Dropdown>
      </div>
      <ReactApexChart options={chartOptions} series={series} type="line" height={350} />
    </div>
  );
};

export default FoodPredictionChart;
