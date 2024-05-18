"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function InteractiveQandA() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState(
    new Array(5).fill(null)
  );
  const questions = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Madrid"],
      correctAnswer: "Paris",
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Mars", "Venus", "Jupiter", "Saturn"],
      correctAnswer: "Mars",
    },
    {
      question: "Who wrote 'Romeo and Juliet'?",
      options: [
        "William Shakespeare",
        "Charles Dickens",
        "Jane Austen",
        "Leo Tolstoy",
      ],
      correctAnswer: "William Shakespeare",
    },
    {
      question: "What is the chemical symbol for water?",
      options: ["H2O", "CO2", "NaCl", "O2"],
      correctAnswer: "H2O",
    },
    {
      question: "Which country is famous for the Great Wall?",
      options: ["China", "India", "Japan", "Egypt"],
      correctAnswer: "China",
    },
  ];

  const handleNextQuestion = () => {
    setCurrentQuestion((prev) => prev + 1);
  };

  const handleAnswerSelection = (selectedOption) => {
    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[currentQuestion] = selectedOption;
    setSelectedAnswers(updatedAnswers);
  };

  const calculateScore = () => {
    let score = 0;
    questions.forEach((question, index) => {
      if (question.correctAnswer === selectedAnswers[index]) {
        score++;
      }
    });
    return score;
  };

  const handleSubmit = () => {
    const score = calculateScore();
    console.log("Score:", score);
    // Here you can perform any action with the calculated score
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-800">
      <div className="max-w-2xl w-full px-6 py-8 bg-white rounded-lg shadow-lg dark:bg-gray-900">
        <div className="flex items-center justify-between mb-6">
          <Link
            className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
            href="/dashboard"
          >
            Back to Dashboard
          </Link>
          <div className="flex items-center space-x-2">
            <div className="px-3 py-1 text-sm font-medium bg-primary-500 text-white rounded-full">
              Score: {calculateScore()}
            </div>
            <div className="px-3 py-1 text-sm font-medium bg-gray-200 text-gray-600 rounded-full dark:bg-gray-700 dark:text-gray-400">
              Question {currentQuestion + 1} of {questions.length}
            </div>
          </div>
          {currentQuestion < questions.length - 1 ? (
            <Button size="sm" onClick={handleNextQuestion}>
              Next
            </Button>
          ) : (
            <Button size="sm" onClick={handleSubmit}>
              Submit
            </Button>
          )}
        </div>
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold">
              {questions[currentQuestion].question}
            </h2>
            <p className="text-gray-500 dark:text-gray-400">
              Select the correct answer from the options below.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {questions[currentQuestion].options.map((option, index) => (
              <Button
                key={index}
                variant="outline"
                onClick={() => handleAnswerSelection(option)}
              >
                {option}
              </Button>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-8 flex items-center space-x-4">
        {questions.map((_, index) => (
          <div
            key={index}
            className={`px-3 py-1 text-sm font-medium ${
              index === currentQuestion
                ? "bg-primary-500 text-white"
                : "bg-gray-200 text-gray-600"
            } rounded-full dark:bg-gray-700 dark:text-gray-400`}
          >
            Question {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
}

export default InteractiveQandA;
