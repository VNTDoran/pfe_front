export function CourseContent() {
  return (
    <div className="grid min-h-screen w-full grid-cols-[1fr_300px] overflow-hidden">
      <main className="flex flex-col overflow-auto">
        <div className="container mx-auto px-4 py-12 md:px-6 md:py-16 lg:px-8 lg:py-20">
          <div className="prose prose-gray mx-auto max-w-4xl dark:prose-invert">
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Introduction to Web Development
            </h1>
            <p className="mb-8 text-lg text-gray-500 dark:text-gray-400">
              In this lesson, we'll cover the fundamentals of web development,
              including HTML, CSS, and JavaScript.
            </p>
            <h2 className="mb-4 text-2xl font-bold tracking-tight md:text-3xl">
              Chapter 1: HTML Basics
            </h2>
            <p>
              HTML, or Hypertext Markup Language, is the standard markup
              language used to create web pages. It provides the structure and
              content of a web page, including headings, paragraphs, images, and
              links.
            </p>
            <h3 className="mb-2 text-xl font-bold tracking-tight md:text-2xl">
              1.1 HTML Elements
            </h3>
            <p>
              {`
                      HTML elements are the building blocks of a web page. They are
                      enclosed in angle brackets, such as <h1> and <p>, and
                      define the different parts of a web page.
                    `}
            </p>
            <h3 className="mb-2 text-xl font-bold tracking-tight md:text-2xl">
              1.2 HTML Attributes
            </h3>
            <p>
              HTML attributes provide additional information about an element
              and are added inside the opening tag. Examples include the "src"
              attribute for an image and the "href" attribute for a link.
            </p>
            <h2 className="mb-4 text-2xl font-bold tracking-tight md:text-3xl">
              Chapter 2: CSS Basics
            </h2>
            <p>
              CSS, or Cascading Style Sheets, is the language used to style the
              content and layout of a web page. It allows you to control the
              appearance of HTML elements, such as color, font, and size.
            </p>
            <h3 className="mb-2 text-xl font-bold tracking-tight md:text-2xl">
              2.1 CSS Selectors
            </h3>
            <p>
              CSS selectors are used to target specific HTML elements to apply
              styles. They can be based on element type, class, ID, or other
              attributes.
            </p>
            <h3 className="mb-2 text-xl font-bold tracking-tight md:text-2xl">
              2.2 CSS Properties
            </h3>
            <p>
              CSS properties define the specific styles to be applied to an
              element, such as color, font-size, and margin.
            </p>
            <h2 className="mb-4 text-2xl font-bold tracking-tight md:text-3xl">
              Chapter 3: JavaScript Basics
            </h2>
            <p>
              JavaScript is a programming language used to add interactivity and
              dynamic behavior to web pages. It can be used to manipulate the
              content and structure of a web page, as well as respond to user
              actions.
            </p>
            <h3 className="mb-2 text-xl font-bold tracking-tight md:text-2xl">
              3.1 JavaScript Variables
            </h3>
            <p>
              Variables in JavaScript are used to store and manipulate data.
              They can hold different data types, such as numbers, strings, and
              booleans.
            </p>
            <h3 className="mb-2 text-xl font-bold tracking-tight md:text-2xl">
              3.2 JavaScript Functions
            </h3>
            <p>
              Functions in JavaScript are reusable blocks of code that can be
              called to perform specific tasks. They can take parameters and
              return values.
            </p>
          </div>
        </div>
      </main>
      <aside className="border-l bg-gray-100/40 px-4 py-12 dark:bg-gray-800/40 md:px-6 md:py-16 lg:px-8 lg:py-20">
        <div className="sticky top-0 space-y-4">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            Table of Contents
          </h2>
          <nav className="space-y-2">
            <a
              className="block rounded-md px-3 py-2 text-sm font-medium text-gray-500 transition-colors hover:bg-gray-200 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-50"
              href="#"
            >
              Chapter 1: HTML Basics
            </a>
            <a
              className="block rounded-md px-3 py-2 text-sm font-medium text-gray-500 transition-colors hover:bg-gray-200 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-50"
              href="#"
            >
              1.1 HTML Elements
            </a>
            <a
              className="block rounded-md px-3 py-2 text-sm font-medium text-gray-500 transition-colors hover:bg-gray-200 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-50"
              href="#"
            >
              1.2 HTML Attributes
            </a>
            <a
              className="block rounded-md px-3 py-2 text-sm font-medium text-gray-500 transition-colors hover:bg-gray-200 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-50"
              href="#"
            >
              Chapter 2: CSS Basics
            </a>
            <a
              className="block rounded-md px-3 py-2 text-sm font-medium text-gray-500 transition-colors hover:bg-gray-200 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-50"
              href="#"
            >
              2.1 CSS Selectors
            </a>
            <a
              className="block rounded-md px-3 py-2 text-sm font-medium text-gray-500 transition-colors hover:bg-gray-200 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-50"
              href="#"
            >
              2.2 CSS Properties
            </a>
            <a
              className="block rounded-md px-3 py-2 text-sm font-medium text-gray-500 transition-colors hover:bg-gray-200 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-50"
              href="#"
            >
              Chapter 3: JavaScript Basics
            </a>
            <a
              className="block rounded-md px-3 py-2 text-sm font-medium text-gray-500 transition-colors hover:bg-gray-200 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-50"
              href="#"
            >
              3.1 JavaScript Variables
            </a>
            <a
              className="block rounded-md px-3 py-2 text-sm font-medium text-gray-500 transition-colors hover:bg-gray-200 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-50"
              href="#"
            >
              3.2 JavaScript Functions
            </a>
          </nav>
        </div>
      </aside>
    </div>
  );
}
