import LineChartOne from "@/components/charts/line/LineChartOne";
import ComponentCard from "@/components/common/ComponentCard";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Line Charts ",
  description:
    "",
};
export default function LineChart() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Download Reports" />
      <div className="space-y-6">
        <ComponentCard title="">
          <LineChartOne />
        </ComponentCard>
      </div>
    </div>
  );
}
