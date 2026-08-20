import Image from "next/image";
import NavBar from "./components/NavBar";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <NavBar />
      <main className="flex flex-1 flex-col p-20 bg-[#080D2A]">
        <section className="justify-start space-y-5">
          <div className=" bg-[#F54E00]/15 w-fit py-2 px-3 rounded-full border-[#F54E00] border flex-row flex items-center space-x-3">
            <div className="w-2 h-2 rounded-full bg-[#F54E00]" />
            <span className="text-[#F54E00] font-semibold">
              AI Quality Assurance for Conversational Agents
            </span>
          </div>
          <div className="flex space-y-10 flex-col">
            <div className="flex flex-col space-y-5">
              <h1 className="text-6xl font-extrabold">Stop guessing.</h1>
              <h1 className="text-6xl font-extrabold bg-linear-to-br from-[#1B0EAA] to-[#F54E00] bg-clip-text text-transparent">
                Start supervising.
              </h1>
            </div>
            <span className="flex w-4/6 text-3xl font-inter text-[#7A9EB8]">
              ConvoSight uses Claude AI to automatically score, flag, and
              summarize every conversation your chatbots have — so your
              supervisors spend time coaching, not reading transcripts.
            </span>
            <div className="flex flex-row space-x-5">
              <Link
                href="/sign-up"
                className="flex items-center flex-row w-fit px-4 py-3 space-x-3 rounded-sm bg-[#715FD5] border-[#6700ED]/60"
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
                Start for Free
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
                    d="M19 12H5m14 0-4 4m4-4-4-4"
                  />
                </svg>
              </Link>
              <Link href="/log-in">See a Demo</Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
