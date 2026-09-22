import Link from "next/link";

export default function Back() {
  return (
    <nav className="flex flex-row w-full items-center justify-between px-10 h-fit">
      <div className="flex items-center justify-center space-x-4 my-5">
        <Link href="/" className="flex flex-row space-x-2 hover:font-bold">
          <svg
            className="w-6 h-6 "
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
              d="m14 8-4 4 4 4"
            />
          </svg>
          Back
        </Link>
      </div>
    </nav>
  );
}
