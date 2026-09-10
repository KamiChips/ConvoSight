import { Outfit } from "next/font/google";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav
      className={`bg-[#071C3B] flex flex-row w-full items-center justify-between px-10 h-fit`}
    >
      <div className="flex items-center justify-center space-x-4 my-5 ">
        <div className="flex bg-[#715FD5] items-center justify-center p-2 rounded-lg">
          <svg
            className="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 17h6l3 3v-3h2V9h-2M4 4h11v8H9l-3 3v-3H4V4Z"
            />
          </svg>
        </div>
        <div className="flex -flex-row items-center justify-center">
          <h1 className="flex font-extrabold text-2xl">ConvoSight</h1>
          <p className="font-extrabold text-2xl text-[#F54E00]">.</p>
        </div>
      </div>
      <div className="flex flex-row space-x-5 justify-end">
        <Link
          href="/terms"
          className="text-[#7A9EB8] items-center font-medium px-4 py-2 hover:text-extrabold hover:text-white"
        >
          Terms
        </Link>
        <Link
          href="/log-in"
          className="font-semibold py-2 px-4 rounded-lg text-md border-[#6700ED]/60 border-2"
        >
          Log In
        </Link>
        <Link
          href="/sign-up"
          className="font-semibold items-center justify-center flex flex-row bg-[#715FD5] border-[#6700ED]/60 py-2 px-4 rounded-lg text-md hover:bg-[#8B7AE6] hover:shadow-xl"
        >
          <svg
            className="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M18.122 17.645a7.185 7.185 0 0 1-2.656 2.495 7.06 7.06 0 0 1-3.52.853 6.617 6.617 0 0 1-3.306-.718 6.73 6.73 0 0 1-2.54-2.266c-2.672-4.57.287-8.846.887-9.668A4.448 4.448 0 0 0 8.07 6.31 4.49 4.49 0 0 0 7.997 4c1.284.965 6.43 3.258 5.525 10.631 1.496-1.136 2.7-3.046 2.846-6.216 1.43 1.061 3.985 5.462 1.754 9.23Z"
            />
          </svg>
          Get Started
        </Link>
      </div>
    </nav>
  );
}
