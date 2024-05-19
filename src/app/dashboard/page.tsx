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

export function Dashboard({ children }) {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [showAddCourse, setShowAddCourse] = useState(false);
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState(null);

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
    setSelectedCourse(course);
    setShowAddCourse(false);
  };

  const handleAddCourseClick = () => {
    setShowAddCourse(true);
    setSelectedCourse(null);
  };

  return (
    <div className="flex h-screen w-full">
      <div className="border-r bg-gray-100 p-6 dark:bg-gray-800">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Courses</h2>
          <Button size="sm" variant="outline" onClick={handleAddCourseClick}>
            Add
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
      {selectedCourse && !showAddCourse && (
        <CourseDetails {...selectedCourse} />
      )}

      <div className="flex items-center justify-center flex-1">
        {showAddCourse && <AddCourse />}
      </div>
      <div className="fixed bottom-0 left-0 w-full bg-white dark:bg-gray-950 border-t dark:border-gray-800 p-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="rounded-full" size="icon" variant="ghost">
                <img
                  alt="Avatar"
                  className="rounded-full"
                  height="32"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "32/32",
                    objectFit: "cover",
                  }}
                  width="32"
                />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href="#">Settings</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="#">Logout</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Logged in as John Doe
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Button size="sm" variant="outline">
            Upgrade Plan
          </Button>
          <Button size="sm" variant="outline">
            Billing
          </Button>
        </div>
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