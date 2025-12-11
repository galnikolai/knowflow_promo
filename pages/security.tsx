import Head from "next/head";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lock, Shield, Key, Eye, Server, FileCheck } from "lucide-react";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Security() {
  return (
    <>
      <Head>
        <title>Security - KnowFlow</title>
        <meta
          name="description"
          content="Learn about KnowFlow's security practices"
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
                Security at
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">
                  KnowFlow
                </span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
                Your data security is our top priority. Learn how we protect
                your information.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Lock,
                  title: "End-to-End Encryption",
                  description:
                    "All data is encrypted in transit using TLS 1.3 and at rest using AES-256 encryption.",
                },
                {
                  icon: Key,
                  title: "Authentication",
                  description:
                    "Multi-factor authentication and secure password hashing using industry-standard algorithms.",
                },
                {
                  icon: Shield,
                  title: "Access Controls",
                  description:
                    "Granular permissions and role-based access control to ensure only authorized access.",
                },
                {
                  icon: Eye,
                  title: "Privacy by Design",
                  description:
                    "We cannot read your encrypted content. Zero-knowledge architecture ensures your privacy.",
                },
                {
                  icon: Server,
                  title: "Infrastructure",
                  description:
                    "Hosted on secure cloud infrastructure with regular security audits and monitoring.",
                },
                {
                  icon: FileCheck,
                  title: "Compliance",
                  description:
                    "We follow GDPR, SOC 2, and other industry standards for data protection.",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full">
                    <CardHeader>
                      <feature.icon className="h-10 w-10 text-primary mb-4" />
                      <CardTitle>{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 dark:text-gray-300">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Security Practices
            </h2>
            <div className="space-y-6">
              <div className="prose prose-lg max-w-none">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Regular Security Audits
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We conduct regular security audits and penetration testing to
                  identify and fix vulnerabilities.
                </p>
              </div>
              <div className="prose prose-lg max-w-none">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Incident Response
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We have a dedicated security team and incident response
                  procedures to quickly address any security issues.
                </p>
              </div>
              <div className="prose prose-lg max-w-none">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Data Backup
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Your data is backed up regularly and stored securely in
                  multiple geographic locations.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Report a Security Issue
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Found a security vulnerability? Please report it to
              security@knowflow.com
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              We take security seriously and will respond to all reports
              promptly.
            </p>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
