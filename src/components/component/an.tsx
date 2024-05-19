import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Button } from "@/components/ui/button";

// Register the necessary components with Chart.js
Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Analytics = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const storedResults = JSON.parse(localStorage.getItem("quizResults")) || [];
    setResults(storedResults);
  }, []);

  const data = {
    labels: results.map((result) => new Date(result.date).toLocaleDateString()),
    datasets: [
      {
        label: "Quiz Scores",
        data: results.map((result) => result.score),
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="max-w-4xl w-full p-8 bg-white rounded-lg shadow-lg dark:bg-gray-900">
      <h2 className="text-3xl font-bold mb-6">Quiz Analytics</h2>
      <div className="relative">
        <Bar data={data} />
      </div>
      <div className="mt-6 flex justify-center">
        <Button size="sm" variant="outline">
          Back to Dashboard
        </Button>
      </div>
    </div>
  );
};

export default Analytics;
