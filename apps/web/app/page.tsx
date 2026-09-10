import NavBar from "./components/NavBar";
import Link from "next/link";
import StatCard from "./components/StatCard";
import MetricHighlight from "./components/MetricHighlight";
import FeatureCard from "./components/FeatureCard";
import ChartCard from "./components/ChartCard";
import {
  AnalysisIcon,
  MetricsIcon,
  ShieldIcon,
  UploadIcon,
  BookIcon,
  SettingsIcon,
} from "./components/Icons";

export default function Home() {
  const chartData = [
    { name: "Mon", value: 65 },
    { name: "Tue", value: 78 },
    { name: "Wed", value: 72 },
    { name: "Thu", value: 85 },
    { name: "Fri", value: 92 },
    { name: "Sat", value: 88 },
  ];

  return (
    <div className="flex flex-col flex-1 min-h-screen">
      <NavBar />
      <main className="flex flex-1 flex-col bg-[#080D2A] space-y-10">
        {/* Hero Section */}
        <section className="px-6 md:px-12 lg:px-20 py-12 md:py-16 lg:py-20 space-y-6 md:space-y-10">
          <div className="bg-[#F54E00]/15 w-fit py-2 px-3 rounded-full border-[#F54E00] border flex flex-row items-center space-x-3">
            <div className="w-2 h-2 rounded-full bg-[#F54E00]" />
            <span className="text-[#F54E00] font-semibold text-sm md:text-base">
              AI Quality Assurance for Conversational Agents
            </span>
          </div>

          <div className="flex flex-col space-y-8">
            <div className="flex flex-col space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white">
                Stop guessing.
              </h1>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-br from-[#1B0EAA] to-[#F54E00] bg-clip-text text-transparent">
                Start supervising.
              </h1>
            </div>

            <p className="text-lg md:text-2xl text-[#7A9EB8] max-w-4xl leading-relaxed">
              ConvoSight uses Claude AI to automatically score, flag, and
              summarize every conversation your chatbots have — so your
              supervisors spend time coaching, not reading transcripts.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/sign-up"
                className="flex items-center justify-center flex-row w-full sm:w-fit px-6 py-3 space-x-3 rounded-lg bg-[#715FD5] hover:bg-[#8B7AE6] transition-colors border border-[#6700ED]/60 font-semibold"
              >
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.597 3.2A1 1 0 0 0 7.04 4.289a3.49 3.49 0 0 1 .057 1.795 3.448 3.448 0 0 1-.84 1.575.999.999 0 0 0-.077.094c-.596.817-3.96 5.6-.941 10.762l.03.049a7.73 7.73 0 0 0 2.917 2.602 7.617 7.617 0 0 0 3.772.829 8.06 8.06 0 0 0 3.986-.975 8.185 8.185 0 0 0 3.04-2.864c1.301-2.2 1.184-4.556.588-6.441-.583-1.848-1.68-3.414-2.607-4.102a1 1 0 0 0-1.594.757c-.067 1.431-.363 2.551-.794 3.431-.222-2.407-1.127-4.196-2.224-5.524-1.147-1.39-2.564-2.3-3.323-2.788a8.487 8.487 0 0 1-.432-.287Z" />
                </svg>
                Start for Free
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
              <Link
                href="/log-in"
                className="flex items-center justify-center flex-row w-full sm:w-fit px-6 py-3 space-x-3 border-2 border-[#6700ED]/40 rounded-lg hover:border-[#715FD5] text-white transition-colors font-semibold"
              >
                <svg
                  className="w-6 h-6 mr-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeWidth="2"
                    d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"
                  />
                  <path
                    stroke="currentColor"
                    strokeWidth="2"
                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
                See a Demo
              </Link>
            </div>
          </div>
        </section>

        <section className="px-6 md:px-12 lg:px-20 py-12 md:py-16">
          <div className="bg-[#0F284C] border border-[#B4AFF3]/25 border-opacity-25 rounded-xl overflow-hidden">
            <div className="bg-[#071C3B] border-b border-[#B4AFF3]/25 border-opacity-25 p-4">
              <div className="flex items-center space-x-2">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <p className="text-xs text-[#3A5A7A] ml-4">
                  convosight.app/dashboard
                </p>
              </div>
            </div>

            <div className="p-6 md:p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <div className="bg-[#071C3B] border border-[#B4AFF3]/25 border-opacity-25 rounded-lg p-6">
                  <p className="text-[#7A9EB8] text-sm font-medium mb-3">
                    Analyzed
                  </p>
                  <p className="text-4xl font-bold text-white mb-2">1,247</p>
                  <p className="text-xs font-medium text-[#4CAF50]">
                    +48 today
                  </p>
                </div>
                <div className="bg-[#071C3B] border border-[#B4AFF3]/25 border-opacity-25 rounded-lg p-6">
                  <p className="text-[#7A9EB8] text-sm font-medium mb-3">
                    Avg Score
                  </p>
                  <p className="text-4xl font-bold text-white mb-2">82.4</p>
                  <p className="text-xs font-medium text-[#4CAF50]">
                    +31 this week
                  </p>
                </div>
                <div className="bg-[#071C3B] border border-[#B4AFF3]/25 border-opacity-25 rounded-lg p-6">
                  <p className="text-[#7A9EB8] text-sm font-medium mb-3">
                    Flagged
                  </p>
                  <p className="text-4xl font-bold text-white mb-2">34</p>
                  <p className="text-xs font-medium text-[#F54E00]">
                    Needs review
                  </p>
                </div>
                <div className="bg-[#071C3B] border border-[#B4AFF3]/25 border-opacity-25 rounded-lg p-6">
                  <p className="text-[#7A9EB8] text-sm font-medium mb-3">
                    Agents
                  </p>
                  <p className="text-4xl font-bold text-white mb-2">6</p>
                  <p className="text-xs font-medium text-[#4CAF50]">
                    Active now
                  </p>
                </div>
              </div>

              <div className="bg-[#071C3B] border border-[#B4AFF3]/25 border-opacity-25 rounded-lg p-6 w-full">
                <ChartCard
                  title="Conversation Quality Trends"
                  data={chartData}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Metrics Section */}
        <section className="px-6 md:px-12 lg:px-20 py-4 md:py-6  border-b border-t border-[#6700ED]/40">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <MetricHighlight value="98.7%" label="Analysis accuracy" />
            <MetricHighlight value="< 4s" label="Per-conversation AI review" />
            <MetricHighlight value="10x" label="Faster than manual QA" />
            <MetricHighlight value="360°" label="Coverage across all agents" />
          </div>
        </section>

        {/* Features Section */}
        <section className="px-6 md:px-12 lg:px-20 py-12 md:py-16">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Everything your QA team needs
            </h2>
            <p className="text-[#7A9EB8] text-base md:text-lg">
              From ingestion to insight, ConvoSight handles the full quality
              assurance pipeline for your AI agents.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon={<AnalysisIcon />}
              title="AI-Powered Analysis"
              description="Claude analyzes every conversation against your quality rubric, detecting tone, accuracy, compliance, and resolution quality automatically."
            />
            <FeatureCard
              icon={<MetricsIcon />}
              title="Real-Time Metrics"
              description="Track agent performance trends over time. Identify top performers and those who need coaching with detailed per-agent dashboards."
            />
            <FeatureCard
              icon={<ShieldIcon />}
              title="Compliance Monitoring"
              description="Automatically flag conversations that violate sales rules, data privacy rules, or company policy — before they become legal issues."
            />
            <FeatureCard
              icon={<UploadIcon />}
              title="CSV Ingestion"
              description="Upload conversation exports from any platform. We parse, structure, and enrich the data automatically, no engineering required."
            />
            <FeatureCard
              icon={<BookIcon />}
              title="Custom Knowledge Base"
              description="Feed in your policy docs, scripts, and guidelines. The AI evaluates conversations against your specific standards."
            />
            <FeatureCard
              icon={<SettingsIcon />}
              title="Custom Prompts"
              description="Define exactly what you want to measure. Create analysis templates for sales calls, support tickets, onboarding flows, and more."
            />
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-6 md:px-12 lg:px-20 py-16 md:py-24">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Ready to see inside your agents?
            </h2>
            <p className="text-[#7A9EB8] text-base md:text-lg mb-8">
              Sign up free. No credit card required. Analyze your first 100
              conversations at no cost.
            </p>
            <Link
              href="/sign-up"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-[#715FD5] hover:bg-[#8B7AE6] transition-colors border border-[#6700ED]/60 font-bold text-lg"
            >
              <svg
                className="w-6 h-6 mr-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8.597 3.2A1 1 0 0 0 7.04 4.289a3.49 3.49 0 0 1 .057 1.795 3.448 3.448 0 0 1-.84 1.575.999.999 0 0 0-.077.094c-.596.817-3.96 5.6-.941 10.762l.03.049a7.73 7.73 0 0 0 2.917 2.602 7.617 7.617 0 0 0 3.772.829 8.06 8.06 0 0 0 3.986-.975 8.185 8.185 0 0 0 3.04-2.864c1.301-2.2 1.184-4.556.588-6.441-.583-1.848-1.68-3.414-2.607-4.102a1 1 0 0 0-1.594.757c-.067 1.431-.363 2.551-.794 3.431-.222-2.407-1.127-4.196-2.224-5.524-1.147-1.39-2.564-2.3-3.323-2.788a8.487 8.487 0 0 1-.432-.287Z" />
              </svg>
              Create your account
              <svg
                className="w-6 h-6 ml-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </section>
      </main>

      <footer className="bg-[#080D2A] border-t border-[#1E3A5F]">
        <div className="px-6 md:px-12 lg:px-20 py-12">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-8">
            <div className="flex items-center space-x-3">
              <div className="flex bg-[#715FD5] items-center justify-center p-2 rounded-lg">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 17h6l3 3v-3h2V9h-2M4 4h11v8H9l-3 3v-3H4V4Z"
                  />
                </svg>
              </div>
              <span className="font-extrabold text-white">
                ConvoSight<span className="text-[#F54E00]">.</span>
              </span>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 text-center sm:text-right">
              <Link
                href="/terms"
                className="text-[#7A9EB8] hover:text-white transition-colors text-sm"
              >
                Terms of Service
              </Link>
              <Link
                href="/privacy"
                className="text-[#7A9EB8] hover:text-white transition-colors text-sm"
              >
                Privacy Policy
              </Link>
              <p className="text-[#7A9EB8] text-sm">
                © 2026 ConvoSight. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
