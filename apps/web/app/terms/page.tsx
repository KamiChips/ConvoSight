import Back from "../components/Back";
import { terms } from "../data/terms";

export default function Terms() {
  return (
    <div className="flex flex-col flex-1 min-h-screen bg-[#080D2A]">
      <Back />
      <main className="flex flex-1 flex-col w-full max-w-3xl mx-auto px-4 sm:px-6 pb-16 space-y-8 sm:space-y-10">
        <div className="flex items-center justify-start space-x-2 mb-2">
          <div className="flex bg-[#715FD5] items-center justify-center p-2 rounded-lg">
            <svg
              className="w-5 h-5 text-white"
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
          <span className="font-bold text-lg sm:text-xl text-white">
            ConvoSight
          </span>
        </div>
        <div className="space-y-2">
          <h1 className="font-bold text-2xl sm:text-3xl text-white">
            Terms of Service
          </h1>
          <p className="text-[#7A9EB8] text-sm">Last Updated: June 20, 2026</p>
        </div>
        <section className="bg-[#0F284C] flex flex-row gap-3 border border-[#B4AFF3]/25 rounded-xl p-4 sm:p-5">
          <svg
            className="w-6 h-6 shrink-0 text-[#FFF047]"
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
              d="M12 13V8m0 8h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          <p className="text-sm text-[#C5D8E8]">
            Please read these Terms carefully before using ConvoSight. By
            creating an account, you agree to be legally bound by this
            agreement.
          </p>
        </section>
        <section className="divide-y divide-solid divide-[#B4AFF3]/15">
          {terms.map((term, i) => (
            <div key={term.title} className="space-y-4 py-6 first:pt-0">
              <h2 className="font-semibold text-white text-base">
                {i + 1}. {term.title}
              </h2>
              <p className="text-sm leading-relaxed text-[#8BAEC8]">
                {term.body}
              </p>
            </div>
          ))}
        </section>
        <div className="items-center justify-start flex fle-row space-x-5">
          <button className="flex flex-row bg-[#715FD5] hover:bg-[#8B7AE6] transition-colors text-white border border-[#3020CC] p-3 rounded-md hover:shadow-2xl font-semibold cursor-pointer">
            <svg
              className="w-6 h-6 text-white mr-2"
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
                d="M5 11.917 9.724 16.5 19 7.5"
              />
            </svg>
            I Accept
          </button>
          <button className="border border-[#3020CC] hover:border-[#715FD5] transition-colors p-3 px-5 rounded-md text-white font-semibold hover:shadow-2xl cursor-pointer">
            Decline
          </button>
        </div>
      </main>
    </div>
  );
}
