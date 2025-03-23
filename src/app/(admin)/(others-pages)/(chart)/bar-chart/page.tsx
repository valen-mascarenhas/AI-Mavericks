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

const fullFeedbackText = "DayLunchSnacksMondayChapati, Plain Rice, Dal Makhani, Bhendi Do Pyaza, Shev Tomato Rassa, Salad, Buttermilk, Pickle, FruitBread PatticeTuesdayChapati, Veg Schezwan Rice, Dal Fry, Aloo Harbara Sukha, Veg Manchurian, Salad, Curd, Pickle, SoupRagi Idli Sambar and Lime SarbatWednesdayChapati / Bhakari, Plain Rice, Varan, Dhobli Besan, Bharli Wangi, Salad, Buttermilk, Thecha, SweetIndori PohaThursdayChapati, Plain Rice, Dal Panchmel, Tawa Veg, Chavli Usal, Salad, Buttermilk, Pickle, FruitSprout Chiwada Chat and Kokam SarbatFridayChapati, Veg Biryani, Dal Fry, Aloo Gobi Adraki, Paneer Butter Masala, Salad, Chutney, Pickle, Sweet, SoupVeg Puff";

const FileDownload = () => {
  const [generatedFeedback, setGeneratedFeedback] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerateFeedback = () => {
    setGeneratedFeedback("");
    setIsGenerating(true);
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullFeedbackText.length) {
        setGeneratedFeedback((prev) => prev + fullFeedbackText[index]);
        index++;
      } else {
        clearInterval(interval);
        setIsGenerating(false);
      }
    }, 50);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-white shadow-lg rounded-lg">
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
      </div>

      <div>
        <button 
          onClick={handleGenerateFeedback} 
          className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Generate Feedback
        </button>

        <div className="p-4 bg-gray-100 border rounded-md font-mono text-green-600">
          <h3 className="text-lg font-medium text-gray-700 mb-2">Generated Feedback</h3>
          <pre className="whitespace-pre-wrap">{generatedFeedback}</pre>
        </div>
      </div>
    </div>
  );
};

export default FileDownload;