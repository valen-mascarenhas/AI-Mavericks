"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const mealData = [
  { day: "Monday", lunch: "Chapati, Plain Rice, Dal Makhani, Bhendi Do Pyaza, Shev Tomato Rassa, Salad, Buttermilk, Pickle, Fruit", snacks: "Bread Pattice" },
  { day: "Tuesday", lunch: "Chapati, Veg Schezwan Rice, Dal Fry, Aloo Harbara Sukha, Veg Manchurian, Salad, Curd, Pickle, Soup", snacks: "Ragi Idli Sambar and Lime Sarbat" },
  { day: "Wednesday", lunch: "Chapati / Bhakari, Plain Rice, Varan, Dhobli Besan, Bharli Wangi, Salad, Buttermilk, Thecha, Sweet", snacks: "Indori Poha" },
  { day: "Thursday", lunch: "Chapati, Plain Rice, Dal Panchmel, Tawa Veg, Chavli Usal, Salad, Buttermilk, Pickle, Fruit", snacks: "Sprout Chiwada Chat and Kokam Sarbat" },
  { day: "Friday", lunch: "Chapati, Veg Biryani, Dal Fry, Aloo Gobi Adraki, Paneer Butter Masala, Salad, Chutney, Pickle, Sweet, Soup", snacks: "Veg Puff" },
];

const fullFeedbackText = `Monday:
We expect around 1224 people to have lunch.
About 733 people are likely to have snacks (like Bread Pattice).

Tuesday:
Around 1478 people are expected for lunch.
About 733 people may take snacks (like Ragi Idli Sambar and Lime Sarbat).

Wednesday:
Around 1190 people are expected for lunch.
About 733 people are likely to have snacks (like Indori Poha).

Thursday:
We expect around 1071 people to have lunch.
Around 733 people are likely to have snacks (like Sprout Chiwada Chat and Kokam Sarbat).

Friday:
Lunch data is not available for the listed items, so we can’t predict the lunch count accurately.
However, about 733 people are expected to have snacks (like Veg Puff).`;

const FileDownload = () => {
  const [generatedFeedback, setGeneratedFeedback] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullFeedbackText.length) {
        setGeneratedFeedback((prev) => prev + fullFeedbackText[index]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 50); // Adjust speed of text generation

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-white shadow-lg rounded-lg">
      {/* Table and Feedback Section */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800 mb-4">This Weeks Meal Plan</h2>
        <div className="overflow-auto max-h-64 border rounded-md p-4">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b">
                <th className="p-2 font-semibold">Day</th>
                <th className="p-2 font-semibold">Lunch</th>
                <th className="p-2 font-semibold">Snacks</th>
              </tr>
            </thead>
            <tbody>
              {mealData.map((item, index) => (
                <tr key={index} className="border-b">
                  <td className="p-2">{item.day}</td>
                  <td className="p-2">{item.lunch}</td>
                  <td className="p-2">{item.snacks}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Generated Feedback */}
        <div className="mt-4 p-4 bg-gray-100 border rounded-md font-mono text-green-600">
          <h3 className="text-lg font-medium text-gray-700 mb-2">Generated Feedback</h3>
          <pre className="whitespace-pre-wrap">{generatedFeedback}</pre>
        </div>
      </div>
    </div>
  );
};

export default FileDownload;