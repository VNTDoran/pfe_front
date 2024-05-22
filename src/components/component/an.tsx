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
import { fetchResults } from "../../services/courseService";

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Analytics = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const getResults = async () => {
      try {
        const response = await fetchResults();
        const resultData = await response.json();
        console.log(resultData);
        setResults(resultData);
      } catch (error) {
        console.error("Failed to fetch quiz results:", error);
      }
    };

    getResults();
  }, []);

  const data = {
    labels: results.map((result) => {
      const dateArray = result.date;
      const dateObject = new Date(
        dateArray[0],
        dateArray[1] - 1,
        dateArray[2],
        dateArray[3],
        dateArray[4],
        dateArray[5]
      );
      return dateObject.toLocaleDateString();
    }),
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
  const options = {
    scales: {
      y: {
        beginAtZero: true,
        max: 25,
      },
    },
  };

  return (
    <div className="max-w-4xl w-full p-8 bg-white rounded-lg shadow-lg dark:bg-gray-900">
      <h2 className="text-3xl font-bold mb-6">Quiz Analytics</h2>
      <div className="relative">
        <Bar data={data} options={options} />
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
