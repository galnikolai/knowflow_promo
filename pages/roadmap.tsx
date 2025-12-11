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
import { ArrowRight, CheckCircle2, Clock, Zap } from "lucide-react";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Roadmap() {
  const phases = [
    {
      status: "completed",
      title: "Q4 2023 - Foundation",
      items: [
        "Core knowledge graph engine",
        "Basic spaced repetition algorithm",
        "Note-taking interface",
        "Flashcard creation",
        "Beta launch with waitlist",
      ],
    },
    {
      status: "in-progress",
      title: "Q1 2024 - AI & Enhancements",
      items: [
        "AI-powered card generation",
        "Smart content expansion",
        "Advanced analytics dashboard",
        "Mobile app (iOS & Android)",
        "Web clipper extension",
      ],
    },
    {
      status: "planned",
      title: "Q2 2024 - Collaboration",
      items: [
        "Shared knowledge bases",
        "Team workspaces",
        "Commenting system",
        "Public graph sharing",
        "Community templates",
      ],
    },
    {
      status: "planned",
      title: "Q3 2024 - Advanced Features",
      items: [
        "Voice notes and transcription",
        "Video learning support",
        "Advanced import/export",
        "API & integrations",
        "Custom algorithms",
      ],
    },
  ];

  return (
    <>
      <Head>
        <title>Roadmap - KnowFlow</title>
        <meta name="description" content="See what we're building next" />
      </Head>

      <Navbar />

      <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 pt-16">
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                Our
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">
                  Roadmap
                </span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
                See what we&apos;re building and what&apos;s coming next. Your
                feedback shapes our priorities.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
          <div className="max-w-4xl mx-auto space-y-12">
            {phases.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  className={`${
                    phase.status === "in-progress"
                      ? "border-2 border-primary"
                      : ""
                  }`}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <CardTitle className="text-2xl">{phase.title}</CardTitle>
                      {phase.status === "completed" && (
                        <div className="flex items-center gap-2 text-green-600">
                          <CheckCircle2 className="h-5 w-5" />
                          <span className="text-sm font-semibold">
                            Completed
                          </span>
                        </div>
                      )}
                      {phase.status === "in-progress" && (
                        <div className="flex items-center gap-2 text-primary">
                          <Zap className="h-5 w-5" />
                          <span className="text-sm font-semibold">
                            In Progress
                          </span>
                        </div>
                      )}
                      {phase.status === "planned" && (
                        <div className="flex items-center gap-2 text-gray-400">
                          <Clock className="h-5 w-5" />
                          <span className="text-sm font-semibold">Planned</span>
                        </div>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {phase.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2
                            className={`h-5 w-5 flex-shrink-0 mt-0.5 ${
                              phase.status === "completed"
                                ? "text-green-600"
                                : phase.status === "in-progress"
                                ? "text-primary"
                                : "text-gray-300"
                            }`}
                          />
                          <span
                            className={`${
                              phase.status === "completed"
                                ? "text-gray-700 dark:text-gray-300"
                                : phase.status === "in-progress"
                                ? "text-gray-900 dark:text-white"
                                : "text-gray-500 dark:text-gray-400"
                            }`}
                          >
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Have a Feature Request?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              We&apos;d love to hear your ideas. Your feedback helps shape
              KnowFlow.
            </p>
            <Link href="/contact">
              <Button size="lg" className="px-8">
                Send Feedback
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
