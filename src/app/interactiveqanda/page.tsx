"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { getSession } from "@/services/sessionService";

export default function Component() {
  const router = useRouter();
  if (!getSession()) {
    router.push("/");
  }
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState(new Array(3).fill(""));

  const questions = [
    {
      question: "What is your favorite color?",
      placeholder: "Enter your favorite color",
    },
    {
      question: "What is your dream job?",
      placeholder: "Enter your dream job",
    },
    {
      question: "What is your favorite book?",
      placeholder: "Enter your favorite book",
    },
  ];

  const handleNextQuestion = () => {
    setCurrentQuestion((prev) => prev + 1);
  };

  const handlePreviousQuestion = () => {
    setCurrentQuestion((prev) => prev - 1);
  };

  const handleInputChange = (index, value) => {
    const updatedAnswers = [...answers];
    updatedAnswers[index] = value;
    setAnswers(updatedAnswers);
  };

  const handleSubmit = () => {
    // Here you can perform any action with the submitted answers
    console.log("Submitted answers:", answers);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 dark:bg-gray-800">
      <div className="max-w-2xl w-full px-6 py-8 bg-white rounded-lg shadow-lg dark:bg-gray-900">
        <div className="space-y-6">
          <div>
            <h2 className="text-3xl font-bold">Interactive Q&A</h2>
            <p className="text-gray-500 dark:text-gray-400">
              Answer the questions below and submit your responses.
            </p>
          </div>
          <div>
            <div>
              <div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium">
                      {questions[currentQuestion].question}
                    </h3>
                    <div className="text-gray-500 dark:text-gray-400 text-sm">
                      {currentQuestion + 1} of {questions.length}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Input
                      placeholder={questions[currentQuestion].placeholder}
                      value={answers[currentQuestion]}
                      onChange={(e) =>
                        handleInputChange(currentQuestion, e.target.value)
                      }
                    />
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <Button
                  className="mr-2"
                  disabled={currentQuestion === 0}
                  variant="outline"
                  onClick={handlePreviousQuestion}
                >
                  Previous
                </Button>
                {currentQuestion < questions.length - 1 ? (
                  <Button onClick={handleNextQuestion}>Next</Button>
                ) : (
                  <Button onClick={handleSubmit}>Submit</Button>
                )}
                <Link
                  className="mx-2 inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  href="/dashboard"
                >
                  Back to Dashboard
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
