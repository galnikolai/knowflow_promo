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
import { Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Pricing() {
  return (
    <>
      <Head>
        <title>Pricing - KnowFlow</title>
        <meta
          name="description"
          content="Simple, transparent pricing for KnowFlow"
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
                Simple, Transparent
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">
                  Pricing
                </span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
                Choose the plan that works best for you. Start free, upgrade
                anytime.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Free Plan */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-2xl">Free</CardTitle>
                    <div className="mt-4">
                      <span className="text-4xl font-bold text-gray-900 dark:text-white">
                        $0
                      </span>
                      <span className="text-gray-600 dark:text-gray-400">
                        /month
                      </span>
                    </div>
                    <CardDescription className="text-base mt-4">
                      Perfect for trying out KnowFlow
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-8">
                      {[
                        "Up to 100 notes",
                        "Basic knowledge graph",
                        "50 flashcards/month",
                        "Community support",
                        "Basic AI features",
                      ].map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 dark:text-gray-300">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <Button variant="outline" className="w-full" size="lg">
                      Get Started
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Pro Plan */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Card className="h-full border-2 border-primary relative">
                  <div className="absolute top-0 right-0 bg-primary text-white px-4 py-1 rounded-bl-lg text-sm font-semibold">
                    Most Popular
                  </div>
                  <CardHeader>
                    <CardTitle className="text-2xl">Pro</CardTitle>
                    <div className="mt-4">
                      <span className="text-4xl font-bold text-gray-900 dark:text-white">
                        $12
                      </span>
                      <span className="text-gray-600 dark:text-gray-400">
                        /month
                      </span>
                    </div>
                    <CardDescription className="text-base mt-4">
                      For serious learners and professionals
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-8">
                      {[
                        "Unlimited notes",
                        "Advanced knowledge graph",
                        "Unlimited flashcards",
                        "Priority support",
                        "Full AI features",
                        "Advanced analytics",
                        "Collaborative workspaces",
                        "Custom card templates",
                      ].map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 dark:text-gray-300">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full" size="lg">
                      Start Free Trial
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Enterprise Plan */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-2xl">Enterprise</CardTitle>
                    <div className="mt-4">
                      <span className="text-4xl font-bold text-gray-900 dark:text-white">
                        Custom
                      </span>
                    </div>
                    <CardDescription className="text-base mt-4">
                      For teams and organizations
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-8">
                      {[
                        "Everything in Pro",
                        "Team collaboration",
                        "SSO & admin controls",
                        "Dedicated support",
                        "Custom integrations",
                        "On-premise deployment",
                        "SLA guarantee",
                        "Training & onboarding",
                      ].map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 dark:text-gray-300">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <Button variant="outline" className="w-full" size="lg">
                      Contact Sales
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {[
                {
                  q: "Can I change plans later?",
                  a: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.",
                },
                {
                  q: "Is there a free trial?",
                  a: "Yes, Pro plan comes with a 14-day free trial. No credit card required.",
                },
                {
                  q: "What payment methods do you accept?",
                  a: "We accept all major credit cards, PayPal, and bank transfers for Enterprise plans.",
                },
                {
                  q: "Can I cancel anytime?",
                  a: "Yes, cancel your subscription anytime. You'll retain access until the end of your billing period.",
                },
              ].map((faq, i) => (
                <Card key={i}>
                  <CardHeader>
                    <CardTitle className="text-lg">{faq.q}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300">{faq.a}</p>
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
