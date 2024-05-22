"use client";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import CourseDetails from "../../components/component/course-details";
import React, { useState, useEffect } from "react";
import {
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { fetchCourses } from "@/services/courseService";
import { AddCourse } from "@/components/component/add-course";
import Analytics from "@/components/component/an";
import { Profile } from "@/components/component/profile";
import { useRouter } from "next/navigation";
import { getSession, logout } from "@/services/sessionService";

export function Dashboard({ children }) {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [showAddCourse, setShowAddCourse] = useState(false);
  const [courses, setCourses] = useState([]);
  const [showAnalytics, setShowAnalytics] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();
  if (!getSession()) {
    router.push("/");
  }

  useEffect(() => {
    async function getCourses() {
      try {
        const data = await fetchCourses();
        console.log(data);
        setCourses(data);
      } catch (err) {
        setError(err.message);
      }
    }
    getCourses();
  }, []);

  const handleCourseClick = (course) => {
    setShowAnalytics(false);
    setSelectedCourse(course);
    setShowAddCourse(false);
  };

  const handleAddCourseClick = () => {
    setShowAnalytics(false);
    setShowAddCourse(true);
    setSelectedCourse(null);
  };

  const handleAnalyticsClick = () => {
    setShowAnalytics(true);
    setShowAddCourse(false);
    setSelectedCourse(null);
  };

  return (
    <div className="flex h-screen w-full">
      <div className="border-r bg-gray-100 p-6 dark:bg-gray-800">
        <div className="flex items-center justify-between space-x-5">
          <h2 className="text-lg font-semibold">Courses</h2>
          <Button size="sm" variant="outline" onClick={handleAddCourseClick}>
            Add
          </Button>
          <Button size="sm" variant="outline" onClick={handleAnalyticsClick}>
            Analytics
          </Button>
        </div>
        <div className="mt-6 space-y-2 overflow-y-auto">
          {error && <p className="text-red-500">{error}</p>}
          {courses.map((course) => (
            <div
              key={course.titre}
              className="group cursor-pointer rounded-md bg-white p-3 hover:bg-gray-50 dark:bg-gray-950 dark:hover:bg-gray-900"
              onClick={() => handleCourseClick(course)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <BookIcon className="h-6 w-6 text-gray-900 dark:text-gray-50" />
                  <span className="font-medium">{course.titre}</span>
                </div>
                <Badge className="bg-gray-900/10 text-gray-900 dark:bg-gray-900/20 dark:text-gray-900 dark:bg-gray-50/10 dark:text-gray-50 dark:dark:bg-gray-50/20 dark:dark:text-gray-50 mx-2">
                  Hard
                </Badge>
              </div>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400"></p>
            </div>
          ))}
        </div>
      </div>
      {selectedCourse && !showAddCourse && !showAnalytics && (
        <CourseDetails {...selectedCourse} />
      )}
      <div className="flex items-center justify-center flex-1">
        {showAddCourse && <AddCourse />}
        {showAnalytics && <Analytics />}
      </div>
      <div className="mt-4 mr-3">
        <Profile />
      </div>
    </div>
  );
}

function BookIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  );
}

function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export default Dashboard;
