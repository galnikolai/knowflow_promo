import Head from "next/head";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ArrowRight,
  Target,
  Users,
  Heart,
  Sparkles,
  Shield,
} from "lucide-react";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function About() {
  return (
    <>
      <Head>
        <title>About - KnowFlow</title>
        <meta
          name="description"
          content="Learn about KnowFlow's mission and vision"
        />
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
                About
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">
                  KnowFlow
                </span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
                We&apos;re on a mission to help people learn better and remember
                longer.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Our Mission
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                In a world overflowing with information, we believe that true
                learning happens when knowledge becomes memory. KnowFlow was
                born from a simple observation: people collect notes but forget
                what they learned. We set out to change that.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                Our mission is to help millions of learners transform
                information into long-term memory. We combine cutting-edge AI,
                proven learning science, and intuitive design to create a
                cognitive partner that actually helps you remember.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 mt-12">
                Our Vision
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                We envision a future where everyone has a personalized learning
                system that understands how they learn best. A system that
                doesn&apos;t just store information, but actively helps you
                build understanding and retain knowledge for life.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 mt-12">
                Our Values
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {[
                {
                  icon: Target,
                  title: "Learning First",
                  description:
                    "Every decision we make is driven by what helps people learn better.",
                },
                {
                  icon: Shield,
                  title: "Privacy",
                  description:
                    "Your data is yours. We encrypt everything and you can export anytime.",
                },
                {
                  icon: Users,
                  title: "Community",
                  description:
                    "We build with our users, not for them. Your feedback shapes the product.",
                },
              ].map((value, index) => (
                <Card key={index}>
                  <CardHeader>
                    <value.icon className="h-10 w-10 text-primary mb-4" />
                    <CardTitle>{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Join Us
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              We&apos;re always looking for passionate people to join our
              mission.
            </p>
            <Link href="/contact">
              <Button size="lg" className="px-8">
                Get in Touch
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
