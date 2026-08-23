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
      <main className="flex flex-1 flex-col bg-[#080D2A]">
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
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.122 17.645a7.185 7.185 0 0 1-2.656 2.495 7.06 7.06 0 0 1-3.52.853 6.617 6.617 0 0 1-3.306-.718 6.73 6.73 0 0 1-2.54-2.266c-2.672-4.57.287-8.846.887-9.668A4.448 4.448 0 0 0 8.07 6.31 4.49 4.49 0 0 0 7.997 4c1.284.965 6.43 3.258 5.525 10.631 1.496-1.136 2.7-3.046 2.846-6.216 1.43 1.061 3.985 5.462 1.754 9.23Z" />
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
                className="flex items-center justify-center w-full sm:w-fit px-6 py-3 text-[#7A9EB8] border-2 border-[#1E3A5F] rounded-lg hover:border-[#715FD5] hover:text-white transition-colors font-semibold"
              >
                👁️ See a Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Dashboard Preview Section */}
        <section className="px-6 md:px-12 lg:px-20 py-12 md:py-16">
          <div className="bg-[#0F1B35] border border-[#1E3A5F] rounded-xl p-6 md:p-8">
            {/* Browser Header */}
            <div className="flex items-center space-x-2 mb-6">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <p className="text-xs text-[#7A9EB8] ml-4">
                convosight.app/dashboard
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <StatCard
                label="Analyzed"
                value="1,247"
                change="+48 today"
                changeType="positive"
              />
              <StatCard
                label="Avg Score"
                value="82.4"
                change="+31 this week"
                changeType="positive"
              />
              <StatCard
                label="Flagged"
                value="34"
                change="Needs review"
                changeType="warning"
              />
              <StatCard
                label="Agents"
                value="6"
                change="Active now"
                changeType="positive"
              />
            </div>

            {/* Chart */}
            <ChartCard title="Conversation Quality Trends" data={chartData} />
          </div>
        </section>

        {/* Metrics Section */}
        <section className="px-6 md:px-12 lg:px-20 py-12 md:py-16">
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
                className="w-6 h-6 mr-3"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M18.122 17.645a7.185 7.185 0 0 1-2.656 2.495 7.06 7.06 0 0 1-3.52.853 6.617 6.617 0 0 1-3.306-.718 6.73 6.73 0 0 1-2.54-2.266c-2.672-4.57.287-8.846.887-9.668A4.448 4.448 0 0 0 8.07 6.31 4.49 4.49 0 0 0 7.997 4c1.284.965 6.43 3.258 5.525 10.631 1.496-1.136 2.7-3.046 2.846-6.216 1.43 1.061 3.985 5.462 1.754 9.23Z" />
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

        {/* Footer Spacing */}
        <div className="h-12" />
      </main>
    </div>
  );
}
