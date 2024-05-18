import { Button } from "@/components/ui/button";

const CourseDetails = ({ title, overview, lessons }) => {
  const renderLessons = () => {
    const lessonElements = [];
    for (let i = 0; i < lessons.length; i++) {
      const lesson = lessons[i];
      lessonElements.push(
        <li key={i} className="flex items-start gap-2">
          <CheckIcon className="h-5 w-5 flex-shrink-0 text-gray-900 dark:text-gray-50" />
          <span>
            {lesson.title} ({lesson.duration})
          </span>
        </li>
      );
    }
    return lessonElements;
  };
  const renderCourseCirc = () => {
    const coursesElements = [];
    for (let i = 0; i < lessons.length; i++) {
      const lesson = lessons[i];
      coursesElements.push(
        <div key={i} className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BookIcon className="h-5 w-5 text-gray-900 dark:text-gray-50" />
            <span>{lesson.title}</span>
          </div>
          <div className="flex items-center gap-2">
            <span>{lesson.duration}</span>
            <Button size="sm" variant="outline">
              Start
            </Button>
          </div>
        </div>
      );
    }
    return coursesElements;
  };

  return (
    <div className="flex-1 p-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">{title}</h2>
        <div className="flex gap-2">
          <Button size="sm" variant="outline">
            Preview
          </Button>
          <Button size="sm" variant="outline">
            Enroll
          </Button>
          <Button size="sm" variant="outline">
            Share
          </Button>
        </div>
      </div>
      <div className="mt-6 space-y-4">
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h3 className="text-sm font-semibold">Course Overview</h3>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              {overview}
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold">What You'll Learn</h3>
            <ul className="mt-2 space-y-2 text-sm text-gray-500 dark:text-gray-400">
              {renderLessons()}
            </ul>
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold">Course Curriculum</h3>
          <div className="mt-2 space-y-2 text-sm text-gray-500 dark:text-gray-400">
            {renderCourseCirc()}
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
