"use client";
import React from "react";
import Link from "next/link";

const FileDownload = () => {
  return (
    <div className="col-span-12 xl:col-span-6 bg-white shadow-lg rounded-lg p-6 text-center">
      {/* <h2 className="text-xl font-semibold text-gray-800 mb-4">Download Reports</h2> */}
      <div className="flex flex-col gap-4">
        <Link href="/path/to/excel.xlsx" download>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700">
            Download Vendor Sales Report
          </button>
        </Link>
        <Link href="/path/to/report.pdf" download>
          <button className="px-4 py-2 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700">
            Download Impact Metrics Report
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FileDownload;
