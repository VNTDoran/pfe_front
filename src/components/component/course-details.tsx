import { Button } from "@/components/ui/button";
import Link from "next/link";

const CourseDetails = ({ id, titre, chapters }) => {
  const renderPods = (pods) => {
    return pods.map((pod, index) => (
      <li key={index} className="flex items-start gap-2">
        <CheckIcon className="h-5 w-5 flex-shrink-0 text-gray-900 dark:text-gray-50" />
        <span>{pod.title}</span>
      </li>
    ));
  };

  const renderChapters = () => {
    return chapters.map((chapter) => (
      <div key={chapter.id} className="pl-4">
        <h3 className="text-sm font-semibold">{chapter.title}</h3>
      </div>
    ));
  };

  return (
    <div className="flex-1 p-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">{titre}</h2>
        <div className="mx-2 flex gap-2">
          <Link href={{ pathname: "/coursecontent", query: { id: id } }}>
            <Button size="sm" variant="outline">
              Read Course
            </Button>
          </Link>
          <Link href={{ pathname: "/quiz", query: { id: id } }}>
            <Button size="sm" variant="outline">
              Take Quiz
            </Button>
          </Link>
          <Link href={{ pathname: "/interactiveqanda", query: { id: id } }}>
            <Button size="sm" variant="outline">
              Start interactive Q&A
            </Button>
          </Link>
        </div>
      </div>
      <div className="mt-6 space-y-4">
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h3 className="text-sm font-semibold">Course Overview</h3>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Welcome to your course.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold">What You'll Learn</h3>
            <ul className="mt-2 space-y-2 text-sm text-gray-500 dark:text-gray-400">
              {renderChapters()}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

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

export default CourseDetails;
