import Head from "next/head";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Sparkles,
  Network,
  Brain,
  Zap,
  ArrowRight,
  CheckCircle2,
  FileText,
  Video,
  Link2,
  Clock,
  TrendingUp,
  Users,
  Image,
  Music,
  BookOpen,
  Download,
  Upload,
  BarChart3,
  Shield,
  Lock,
} from "lucide-react";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Features() {
  return (
    <>
      <Head>
        <title>Features - KnowFlow</title>
        <meta
          name="description"
          content="Discover all features of KnowFlow - Knowledge graphs, spaced repetition, AI assistance, and more"
        />
      </Head>

      <Navbar />

      <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 pt-16">
        {/* Hero */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                Powerful Features for
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">
                  Serious Learners
                </span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
                Everything you need to turn information into long-term memory
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Features */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Network,
                  title: "Visual Knowledge Graph",
                  description:
                    "See connections between concepts and ideas at a glance. Navigate your knowledge like a map.",
                  features: [
                    "Interactive graph visualization",
                    "Automatic relationship detection",
                    "Custom connection types",
                    "Graph search and filtering",
                  ],
                },
                {
                  icon: Brain,
                  title: "Smart Flashcards",
                  description:
                    "AI-generated cards optimized for retention. Create cards from notes with one click.",
                  features: [
                    "Auto-generate from notes",
                    "Multiple card types",
                    "Rich media support",
                    "Image occlusion",
                  ],
                },
                {
                  icon: Zap,
                  title: "Adaptive Quizzes",
                  description:
                    "Test your knowledge with personalized quizzes that adapt to your learning pace.",
                  features: [
                    "Multiple choice questions",
                    "Fill in the blank",
                    "True/False questions",
                    "Performance tracking",
                  ],
                },
                {
                  icon: Sparkles,
                  title: "AI Expansion",
                  description:
                    "Discover new connections and expand your notes with AI-powered suggestions.",
                  features: [
                    "Smart topic suggestions",
                    "Connection recommendations",
                    "Content generation",
                    "Knowledge gaps detection",
                  ],
                },
                {
                  icon: Clock,
                  title: "Smart Scheduling",
                  description:
                    "Optimized review timing based on your memory. Never forget what you learned.",
                  features: [
                    "Spaced repetition algorithm",
                    "Adaptive intervals",
                    "Review reminders",
                    "Performance-based scheduling",
                  ],
                },
                {
                  icon: TrendingUp,
                  title: "Progress Tracking",
                  description:
                    "See your learning journey and improvement over time with detailed analytics.",
                  features: [
                    "Learning statistics",
                    "Retention curves",
                    "Study streaks",
                    "Subject-wise progress",
                  ],
                },
                {
                  icon: FileText,
                  title: "Multi-Format Import",
                  description:
                    "Import from PDFs, articles, videos, and more. Your knowledge, your way.",
                  features: [
                    "PDF text extraction",
                    "Web article import",
                    "Video transcripts",
                    "Markdown support",
                  ],
                },
                {
                  icon: Users,
                  title: "Collaborative Learning",
                  description:
                    "Share knowledge graphs and study together with friends and colleagues.",
                  features: [
                    "Shared knowledge bases",
                    "Study groups",
                    "Comment threads",
                    "Public graphs",
                  ],
                },
                {
                  icon: BarChart3,
                  title: "Learning Analytics",
                  description:
                    "Deep insights into your learning patterns and retention rates.",
                  features: [
                    "Detailed statistics",
                    "Retention analysis",
                    "Study time tracking",
                    "Export reports",
                  ],
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-xl transition-shadow">
                    <CardHeader>
                      <feature.icon className="h-10 w-10 text-primary mb-4" />
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                      <CardDescription className="text-base mt-2">
                        {feature.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {feature.features.map((item, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300"
                          >
                            <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Import Formats */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Import From Any Source
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Bring your existing knowledge into KnowFlow
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  icon: FileText,
                  name: "PDFs",
                  desc: "Extract text and notes",
                },
                {
                  icon: Link2,
                  name: "Web Articles",
                  desc: "Save from browser",
                },
                { icon: Video, name: "Videos", desc: "Transcript processing" },
                { icon: BookOpen, name: "E-books", desc: "Import chapters" },
                { icon: Image, name: "Images", desc: "OCR text extraction" },
                { icon: Music, name: "Audio", desc: "Transcribe recordings" },
                { icon: Download, name: "Markdown", desc: "Import .md files" },
                { icon: Upload, name: "Export", desc: "No vendor lock-in" },
              ].map((format, index) => (
                <Card key={index} className="text-center p-6">
                  <format.icon className="h-10 w-10 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                    {format.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {format.desc}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Security Features */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Built for Privacy
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Your data is encrypted and you own it completely
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Lock,
                  title: "End-to-End Encryption",
                  description:
                    "All your notes and data are encrypted. We cannot read your content.",
                },
                {
                  icon: Shield,
                  title: "You Own Your Data",
                  description:
                    "Export everything anytime in standard formats. No lock-in.",
                },
                {
                  icon: Sparkles,
                  title: "Open Source",
                  description:
                    "Core features are open source. Transparency builds trust.",
                },
              ].map((feature, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <feature.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary to-purple-600">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join the waitlist to be among the first to experience KnowFlow
            </p>
            <Link href="/#waitlist">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-gray-100 px-8"
              >
                Join Waitlist
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
