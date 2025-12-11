import Head from 'next/head'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

export default function Terms() {
  return (
    <>
      <Head>
        <title>Terms of Service - KnowFlow</title>
        <meta name="description" content="KnowFlow Terms of Service" />
      </Head>

      <Navbar />

      <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 pt-16">
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Terms of Service</h1>
            <p className="text-gray-600 mb-8">Last updated: January 1, 2024</p>

            <div className="prose prose-lg max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Agreement to Terms</h2>
                <p className="text-gray-600 leading-relaxed">
                  By accessing or using KnowFlow, you agree to be bound by these Terms of Service. 
                  If you disagree with any part of these terms, you may not access the service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Use License</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Permission is granted to use KnowFlow for personal, non-commercial purposes. 
                  This license does not include:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Modifying or copying materials</li>
                  <li>Using materials for commercial purposes</li>
                  <li>Removing copyright or proprietary notations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">User Accounts</h2>
                <p className="text-gray-600 leading-relaxed">
                  You are responsible for maintaining the confidentiality of your account and password. 
                  You agree to accept responsibility for all activities that occur under your account.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Content</h2>
                <p className="text-gray-600 leading-relaxed">
                  You retain all rights to content you create using KnowFlow. You grant us a license 
                  to use, store, and process your content solely to provide the service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
                <p className="text-gray-600 leading-relaxed">
                  KnowFlow shall not be liable for any indirect, incidental, special, consequential, 
                  or punitive damages resulting from your use of the service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
                <p className="text-gray-600 leading-relaxed">
                  Questions about the Terms of Service should be sent to legal@knowflow.com
                </p>
              </section>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}

