import Head from "next/head";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Privacy() {
  return (
    <>
      <Head>
        <title>Privacy Policy - KnowFlow</title>
        <meta name="description" content="KnowFlow Privacy Policy" />
      </Head>

      <Navbar />

      <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 pt-16">
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Privacy Policy
            </h1>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Last updated: January 1, 2024
            </p>

            <div className="prose prose-lg max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Introduction
                </h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  At KnowFlow, we take your privacy seriously. This Privacy
                  Policy explains how we collect, use, disclose, and safeguard
                  your information when you use our service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Information We Collect
                </h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  We collect information that you provide directly to us,
                  including:
                </p>
                <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
                  <li>Account information (name, email address)</li>
                  <li>
                    Content you create (notes, flashcards, knowledge graphs)
                  </li>
                  <li>Usage data (how you interact with the service)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  How We Use Your Information
                </h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process transactions and send related information</li>
                  <li>Send technical notices and support messages</li>
                  <li>Respond to your comments and questions</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Data Security
                </h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  We implement appropriate technical and organizational security
                  measures to protect your personal information. All data is
                  encrypted in transit and at rest.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Your Rights
                </h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
                  <li>Access your personal data</li>
                  <li>Correct inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Export your data at any time</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Contact Us
                </h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  If you have questions about this Privacy Policy, please
                  contact us at privacy@knowflow.com
                </p>
              </section>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
