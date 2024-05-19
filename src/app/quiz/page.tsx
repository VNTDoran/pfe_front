"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { fetchQuizId } from "@/services/courseService";
import { useRouter } from "next/navigation";

export function Quiz({ searchParams }) {
  const [currentQuiz, setCurrentQuiz] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [isAnswerSelected, setIsAnswerSelected] = useState(false);
  const [showScorePopup, setShowScorePopup] = useState(false);
  const [score, setScore] = useState(0);
  const [quizData, setQuizData] = useState([]);
  const router = useRouter();

  useEffect(() => {
    fetchQuizData();
  }, []);
  useEffect(() => {
    setIsAnswerSelected(selectedAnswers[currentQuestion] !== null);
  }, [selectedAnswers, currentQuestion]);
  const fetchQuizData = async () => {
    try {
      const response = await fetchQuizId(searchParams.id);
      if (!response.ok) {
        throw new Error("Failed to fetch quiz data");
      }
      const data = await response.json();
      const flattenedQuestions = data.flatMap((quiz) => quiz.questions);
      setQuizData(flattenedQuestions);
      setSelectedAnswers(new Array(flattenedQuestions.length).fill(null));
    } catch (error) {
      console.error("Error fetching quiz data:", error);
    }
  };

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
    quizData.forEach((question, index) => {
      if (question.choices[selectedAnswers[index]]?.isCorrect) {
        score++;
      }
    });
    return score;
  };

  const handleSubmit = () => {
    const score = calculateScore();
    setScore(score);
    setShowScorePopup(true);
    saveResults(score);
  };
  const saveResults = (score) => {
    const results = JSON.parse(localStorage.getItem("quizResults")) || [];
    results.push({ date: new Date().toISOString(), score });
    localStorage.setItem("quizResults", JSON.stringify(results));
  };

  const handleClosePopup = () => {
    setShowScorePopup(false);
    router.push("/dashboard");
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-800">
      <div className="max-w-fit w-full px-6 py-8 bg-white rounded-lg shadow-lg dark:bg-gray-900">
        <div className="flex items-center justify-between mb-6">
          <Link
            className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
            href="/dashboard"
          >
            Back to Dashboard
          </Link>
          <div className="px-3 py-1 text-sm font-medium bg-primary-500 text-black rounded-full">
            Question {currentQuestion + 1} of {quizData.length}
          </div>
          {currentQuestion < quizData.length - 1 ? (
            <Button
              size="sm"
              onClick={handleNextQuestion}
              disabled={!isAnswerSelected}
            >
              Next
            </Button>
          ) : (
            <Button
              size="sm"
              onClick={handleSubmit}
              disabled={!isAnswerSelected}
            >
              Submit
            </Button>
          )}
        </div>
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold">
              {quizData[currentQuestion]?.question}
            </h2>
            <p className="text-gray-500 dark:text-gray-400">
              Select the correct answer from the options below.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {quizData[currentQuestion]?.choices.map((option, index) => (
              <Button
                className={
                  selectedAnswers[currentQuestion] === index
                    ? "bg-primary-500 bg-cyan-500"
                    : ""
                }
                key={index}
                onClick={() => handleAnswerSelection(index)}
                variant="outline"
              >
                {option.choice}
              </Button>
            ))}
          </div>
        </div>
      </div>
      {showScorePopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Quiz Score</h2>
            <p className="text-lg">
              You scored {score} out of {quizData.length}!
            </p>
            <div className="mt-6 flex justify-end">
              <Button onClick={handleClosePopup}>Close</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Quiz;
