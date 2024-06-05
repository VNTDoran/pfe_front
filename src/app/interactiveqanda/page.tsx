"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { fetchQstId, saveResultsDB } from "@/services/courseService";
import { useRouter } from "next/navigation";
import { getSession } from "@/services/sessionService";

export function InteractiveQna({ searchParams }) {
  const [quizData, setQuizData] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [showScorePopup, setShowScorePopup] = useState(false);
  const [score, setScore] = useState(0);
  const router = useRouter();

  if (!getSession()) {
    router.push("/");
  }

  useEffect(() => {
    fetchQuizData();
  }, []);

  const fetchQuizData = async () => {
    try {
      const response = await fetchQstId(searchParams.id);
      if (!response.ok) {
        throw new Error("Failed to fetch quiz data");
      }
      const data = await response.json();

      setQuizData(data);
      setUserAnswers(Object.fromEntries(data.map((q) => [q.id, ""])));
    } catch (error) {
      console.error("Error fetching quiz data:", error);
    }
  };

  const handleNextQuestion = () => {
    setCurrentQuestion((prev) => prev + 1);
  };

  const evaluateAnswer = async (questionId, answer) => {
    try {
      const response = await fetch(
        `http://localhost:8089/pfe/evaluateAnswer?questionId=${questionId}&answer=${answer}`
      );
      if (!response.ok) {
        throw new Error("Failed to evaluate answer");
      }
      const result = await response.json();
      //console.log(result);
      return result > 90;
    } catch (error) {
      console.error("Error evaluating answer:", error);
      return false;
    }
  };

  const handleSubmit = async () => {
    const score = await calculateScore();
    setScore(score);
    setShowScorePopup(true);
    saveResults(score);
  };

  const saveResults = async (score) => {
    const scoreData = {
      score: score,
      email: localStorage.getItem("username"),
    };
    try {
      await saveResultsDB(scoreData);
    } catch (error) {
      console.error("Failed to save course:", error);
    }
  };

  const handleClosePopup = () => {
    setShowScorePopup(false);
    router.push("/dashboard");
  };

  const calculateScore = async () => {
    let score = 0;
    for (const [questionId, answer] of Object.entries(userAnswers)) {
      const isCorrect = await evaluateAnswer(questionId, answer);
      if (isCorrect) {
        score++;
      }
    }
    return score;
  };

  const handleAnswerSelection = (e) => {
    const questionId = quizData[currentQuestion]?.id;
    const answer = e.target.value;
    setUserAnswers({ ...userAnswers, [questionId]: answer });
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
              disabled={!userAnswers[quizData[currentQuestion]?.id]}
            >
              Next
            </Button>
          ) : (
            <Button
              size="sm"
              onClick={handleSubmit}
              disabled={!userAnswers[quizData[currentQuestion]?.id]}
            >
              Submit
            </Button>
          )}
        </div>
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold">
              {quizData[currentQuestion]?.content}
            </h2>
            <p className="text-gray-500 dark:text-gray-400">
              Type your answer below.
            </p>
          </div>
          <textarea
            value={userAnswers[quizData[currentQuestion]?.id]}
            onChange={handleAnswerSelection}
            className="w-full h-32 px-3 py-2 text-base border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-50 dark:border-gray-700 dark:focus:ring-gray-300"
          ></textarea>
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

export default InteractiveQna;
