import Link from "next/link";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { CardContent, Card } from "@/components/ui/card";
import { Profile } from "@/components/component/profile";

export function HomeMain() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-16 flex items-center bg-gradient-to-r from-indigo-500 to-purple-500 shadow-sm">
        <Link className="flex items-center justify-center" href="#">
          <BookIcon className="h-6 w-6 text-white" />
          <span className="sr-only">AI Learning Platform</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium text-white hover:text-gray-200"
            href="authenticate"
          >
            Login
          </Link>
          <Link
            className="text-sm font-medium text-white hover:text-gray-200"
            href="#"
          >
            About
          </Link>
          <Link
            className="text-sm font-medium text-white hover:text-gray-200"
            href="#"
          >
            Contact
          </Link>
          <Profile />
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-6">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                  Unlock Your Potential with AI-Powered Learning
                </h1>
                <p className="text-gray-200 md:text-xl lg:text-lg">
                  Our AI-driven e-learning platform provides personalized course
                  recommendations, AI-generated learning content, and advanced
                  progress tracking to help you achieve your educational goals.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md bg-white px-6 text-sm font-medium text-indigo-500 shadow transition-colors hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                    href="authenticate"
                  >
                    Join Us
                  </Link>
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-white bg-transparent px-6 text-sm font-medium text-white shadow-sm transition-colors hover:bg-white hover:text-indigo-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800"
                    href="#"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
              <img
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-2xl object-bottom sm:w-full lg:aspect-square"
                height="550"
                src="/placeholder.svg"
                width="550"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 lg:grid-cols-3 lg:gap-12">
              <div className="grid gap-4">
                <LightbulbIcon className="h-8 w-8 text-white" />
                <h3 className="text-xl font-bold text-white">
                  Personalized Recommendations
                </h3>
                <p className="text-gray-200">
                  Our AI-powered recommendation engine suggests courses tailored
                  to your learning style and goals.
                </p>
              </div>
              <div className="grid gap-4">
                <BotIcon className="h-8 w-8 text-white" />
                <h3 className="text-xl font-bold text-white">
                  AI-Generated Content
                </h3>
                <p className="text-gray-200">
                  Enjoy seamlessly generated learning content that adapts to
                  your needs and progress.
                </p>
              </div>
              <div className="grid gap-4">
                <BarChartIcon className="h-8 w-8 text-white" />
                <h3 className="text-xl font-bold text-white">
                  Advanced Progress Tracking
                </h3>
                <p className="text-gray-200">
                  Track your learning progress and achievements with our
                  comprehensive analytics.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-6">
                <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                  Hear from Our Satisfied Learners
                </h2>
                <p className="text-gray-200 md:text-xl lg:text-lg">
                  Our AI-powered e-learning platform has helped thousands of
                  students achieve their educational goals. Here's what they
                  have to say.
                </p>
              </div>
              <div className="grid gap-6">
                <Card className="bg-white shadow-sm text-gray-900">
                  <CardContent>
                    <blockquote className="text-lg font-semibold leading-snug">
                      “The personalized course recommendations have been a
                      game-changer for me. I've made more progress in the last
                      few months than I did in the previous year.”
                    </blockquote>
                    <div className="flex items-center pt-4 space-x-4">
                      <Avatar>
                        <AvatarImage src="/placeholder-avatar.svg" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-semibold text-gray-900">
                          Jane Doe
                        </div>
                        <div className="text-sm text-gray-600">
                          Software Engineer
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-white shadow-sm text-gray-900">
                  <CardContent>
                    <blockquote className="text-lg font-semibold leading-snug">
                      “The AI-generated learning content is incredibly engaging
                      and effective. I'm retaining information better than ever
                      before.”
                    </blockquote>
                    <div className="flex items-center pt-4 space-x-4">
                      <Avatar>
                        <AvatarImage src="/placeholder-avatar.svg" />
                        <AvatarFallback>JB</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-semibold text-gray-900">
                          John Bravo
                        </div>
                        <div className="text-sm text-gray-600">
                          Marketing Manager
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-4 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-200 bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
        <p className="text-sm">
          © 2024 AI Learning Platform. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm hover:text-gray-200" href="#">
            About
          </Link>
          <Link className="text-sm hover:text-gray-200" href="#">
            Contact
          </Link>
          <Link className="text-sm hover:text-gray-200" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}

function BarChartIcon(props) {
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
      <line x1="12" x2="12" y1="20" y2="10" />
      <line x1="18" x2="18" y1="20" y2="4" />
      <line x1="6" x2="6" y1="20" y2="16" />
    </svg>
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

function BotIcon(props) {
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
      <path d="M12 8V4H8" />
      <rect width="16" height="12" x="4" y="8" rx="2" />
      <path d="M2 14h2" />
      <path d="M20 14h2" />
      <path d="M15 13v2" />
      <path d="M9 13v2" />
    </svg>
  );
}

function LightbulbIcon(props) {
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
      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
      <path d="M9 18h6" />
      <path d="M10 22h4" />
    </svg>
  );
}
