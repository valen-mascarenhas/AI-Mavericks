"use client";
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";
import { MoreDotIcon } from "@/icons";
import { DropdownItem } from "../ui/dropdown/DropdownItem";
import { useState } from "react";
import { Dropdown } from "../ui/dropdown/Dropdown";

// Dynamically import the ReactApexChart component
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

export default function MonthlySalesChart() {
  const options: ApexOptions = {
    colors: ["#465fff", "#4bb738", "#d37d17"],
    chart: {
      fontFamily: "Outfit, sans-serif",
      type: "bar",
      height: 180,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "80%",
        borderRadius: 1,
        borderRadiusApplication: "end",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 4,
      colors: ["transparent"],
    },
    xaxis: {
      categories: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
      ],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    legend: {
      show: true,
      position: "top",
      horizontalAlign: "left",
      fontFamily: "Outfit",
    },
    yaxis: {
      title: {
        text: undefined,
      },
    },
    grid: {
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    fill: {
      opacity: 1,
    },

    tooltip: {
      custom: function({ series, seriesIndex, dataPointIndex, w }) {
        const menus = [
          "Beans Neutrella, Aloo Mutter, Plain Rice, Dal Tadka",
          "Zunka, Matki Usal, Plain Rice, Varan",
          "Padwal Sukha, Paneer Kolhapuri, Shahjahani Pulav, Dal Fry, Madhur Milan",
          "Remark: Holiday, No menu",
          "Cabbage Foogat, Veg Kofta, Curd Rice, Sambar, Remark: Holiday Attached with Weekend"
        ];
        const menuItems = menus[dataPointIndex].split(', ').join('<br/>');
        return '<div class="arrow_box" style="max-width: 100%; word-wrap: break-word;">' +
          '<span>Food menu:<br/>' + menuItems + '</span>' +
          '</div>';
      }
    },
  };
  const series = [
    {
      name: "Footfall Count",
      data: [1062, 1136, 1178, 0, 600],
    },
    {
      name: "Predicted food Count",
      data: [850, 930, 1100, 0, 542],
    },
    {
      name: "Actual food Count",
      data: [860, 950, 1130, 0, 570],
    },

  ];
  const [isOpen, setIsOpen] = useState(false);

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }

  function closeDropdown() {
    setIsOpen(false);
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white px-5 pt-5 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6 sm:pt-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
          Last Weeks Food Consumption
        </h3>
      </div>
     <br></br> <br></br>
      <div className="max-w-full overflow-x-auto custom-scrollbar">
        <div className="-ml-5 min-w-[600px] xl:min-w-full pl-2">
          <ReactApexChart
            options={options}
            series={series}
            type="bar"
            height={300}
          />
        </div>
      </div>
    </div>
  );
}
 