"use client";
import React from "react";
import { Table, TableBody, TableCell, TableHeader, TableRow } from "../ui/table";

const tableData = [
  { period: "Weekly", lunch: 840, snacks: 560, total: 1400 },
  { period: "Monthly", lunch: 3600, snacks: 2400, total: 6000 },
];

const todayStats = {
  lunch: 130,
  snacks: 90,
};

const CostAnalysis = () => {
  return (
    <div className="col-span-12 xl:col-span-6 bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Vendor Cost Analysis</h2>
      
      {/* Today's Stats */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg text-center">
          <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300">Today's Lunch Orders</h3>
          <p className="text-xl font-semibold text-gray-900 dark:text-white">{todayStats.lunch}</p>
        </div>
        <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg text-center">
          <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300">Today's Snack Orders</h3>
          <p className="text-xl font-semibold text-gray-900 dark:text-white">{todayStats.snacks}</p>
        </div>
      </div>
      
      <Table>
        <TableHeader className="border-gray-200 dark:border-gray-800 border-y bg-gray-50 dark:bg-gray-900">
          <TableRow>
            <TableCell isHeader className="py-4 font-medium text-gray-700 text-start dark:text-gray-300">
              Time Period
            </TableCell>
            <TableCell isHeader className="py-4 font-medium text-gray-700 text-start dark:text-gray-300">
              Lunch Orders
            </TableCell>
            <TableCell isHeader className="py-4 font-medium text-gray-700 text-start dark:text-gray-300">
              Snack Orders
            </TableCell>
            <TableCell isHeader className="py-4 font-medium text-gray-700 text-start dark:text-gray-300">
              Total Orders
            </TableCell>
          </TableRow>
        </TableHeader>
        <TableBody className="divide-y divide-gray-200 dark:divide-gray-800">
          {tableData.map((row, index) => (
            <TableRow key={index} className="hover:bg-gray-100 dark:hover:bg-gray-800">
              <TableCell className="py-4 text-gray-800 dark:text-white/90 font-medium">{row.period}</TableCell>
              <TableCell className="py-4 text-gray-600 dark:text-gray-400">{row.lunch}</TableCell>
              <TableCell className="py-4 text-gray-600 dark:text-gray-400">{row.snacks}</TableCell>
              <TableCell className="py-4 text-gray-600 dark:text-gray-400">{row.total}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default CostAnalysis;
