"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { fetchCoursebyId } from "@/services/courseService";
import { useRouter } from "next/navigation";
import { getSession } from "@/services/sessionService";
const CourseContent = ({ searchParams }) => {
  const router = useRouter();
  if (!getSession()) {
    router.push("/");
  }
  const id = searchParams.id;
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      const loadCourse = async () => {
        try {
          const selectedCourse = await fetchCoursebyId(id);
          console.log(selectedCourse);
          setCourse(selectedCourse);
        } catch (error) {
          console.error("Error fetching course data:", error);
        } finally {
          setLoading(false);
        }
      };

      loadCourse();
    }
  }, [id]);

  if (!id) {
    return <div>Loading...</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!course) {
    return <div>No course found.</div>;
  }

  return (
    <div className="grid min-h-screen w-full grid-cols-[1fr_300px] overflow-hidden">
      <main className="flex flex-col overflow-auto">
        <div className="container mx-auto px-4 py-12 md:px-6 md:py-16 lg:px-8 lg:py-20">
          <div className="prose prose-gray mx-auto max-w-4xl dark:prose-invert">
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              {course.title}
            </h1>
            <p className="mb-8 text-lg text-gray-500 dark:text-gray-400">
              {course.overview}
            </p>
            {course.chapters.map((chapter) => (
              <div key={chapter.id} id={`chapter-${chapter.id}`}>
                <h2 className="mb-4 text-2xl font-bold tracking-tight md:text-3xl">
                  {chapter.title}
                </h2>
                {chapter.pods.map((pod) => (
                  <div key={pod.id} id={`pod-${pod.id}`}>
                    <h3 className="mb-2 text-xl font-bold tracking-tight md:text-2xl">
                      {pod.title}
                    </h3>
                    <p>{pod.content}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <Link
            className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
            href="/dashboard"
          >
            Back to Dashboard
          </Link>
        </div>
      </main>
      <aside className="border-l bg-gray-100/40 px-4 py-12 dark:bg-gray-800/40 md:px-6 md:py-16 lg:px-8 lg:py-20">
        <div className="sticky top-0 space-y-4">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            Table of Contents
          </h2>
          <nav className="space-y-2">
            {course.chapters.map((chapter) => (
              <a
                key={chapter.id}
                className="block rounded-md px-3 py-2 text-sm font-medium text-gray-500 transition-colors hover:bg-gray-200 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-50"
                href={`#chapter-${chapter.id}`}
              >
                {chapter.title}
              </a>
            ))}
            {course.chapters.map((chapter) =>
              chapter.pods.map((pod) => (
                <a
                  key={pod.id}
                  className="block rounded-md px-3 py-2 text-sm font-medium text-gray-500 transition-colors hover:bg-gray-200 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-50"
                  href={`#pod-${pod.id}`}
                >
                  {pod.title}
                </a>
              ))
            )}
          </nav>
        </div>
      </aside>
    </div>
  );
};

export default CourseContent;
