import Head from 'next/head'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, Calendar, Clock } from 'lucide-react'
import { motion } from 'framer-motion'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

export default function Blog() {
  const posts = [
    {
      title: 'The Science of Spaced Repetition',
      excerpt: 'How spaced repetition algorithms help you remember 95% of what you learn.',
      date: 'Jan 15, 2024',
      readTime: '5 min read',
      slug: 'science-of-spaced-repetition'
    },
    {
      title: 'Building a Second Brain: A Complete Guide',
      excerpt: 'Learn how to structure your knowledge for long-term retention and easy recall.',
      date: 'Jan 10, 2024',
      readTime: '8 min read',
      slug: 'building-second-brain'
    },
    {
      title: 'Knowledge Graphs: Visualizing How You Think',
      excerpt: 'Why knowledge graphs are more powerful than traditional note-taking methods.',
      date: 'Jan 5, 2024',
      readTime: '6 min read',
      slug: 'knowledge-graphs-visualizing'
    },
    {
      title: 'AI and Learning: The Future of Education',
      excerpt: 'How AI is transforming personalized learning and knowledge management.',
      date: 'Dec 28, 2023',
      readTime: '7 min read',
      slug: 'ai-and-learning'
    }
  ]

  return (
    <>
      <Head>
        <title>Blog - KnowFlow</title>
        <meta name="description" content="Learn about knowledge management, spaced repetition, and effective learning" />
      </Head>

      <Navbar />

      <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 pt-16">
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
                KnowFlow
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">
                  Blog
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                Learn about effective learning, knowledge management, and memory science
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {posts.map((post, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-xl transition-shadow">
                    <CardHeader>
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <CardTitle className="text-2xl mb-3">{post.title}</CardTitle>
                      <CardDescription className="text-base">
                        {post.excerpt}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Link href={`/blog/${post.slug}`}>
                        <Button variant="ghost" className="p-0">
                          Read More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}

