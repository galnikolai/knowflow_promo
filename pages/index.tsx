import { useState } from 'react'
import Head from 'next/head'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  Sparkles, 
  Network, 
  Brain, 
  Zap, 
  CheckCircle2, 
  ArrowRight,
  GraduationCap,
  Code,
  Languages,
  Briefcase,
  TrendingUp,
  Users,
  Clock,
  Link2,
  Star,
  Quote,
  ChevronDown,
  BookOpen,
  Target,
  BarChart3,
  Shield,
  Lock,
  Download,
  Upload,
  RefreshCw,
  FileText,
  Video,
  Image,
  Music,
  PlayCircle
} from 'lucide-react'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Home() {
  const [email, setEmail] = useState('')
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  }

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <>
      <Head>
        <title>KnowFlow - Turn Information Into Long-Term Memory</title>
        <meta name="description" content="Personal knowledge management system with visual graph, spaced repetition, and AI assistance" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </Head>

      <Navbar />

      <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 pt-16">
        {/* Hero Section */}
        <section className="pt-20 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Turn Information Into
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">
                  Long-Term Memory
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                KnowFlow combines visual knowledge graphs, spaced repetition, and AI assistance 
                to help you learn faster and remember longer.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  size="lg" 
                  className="text-lg px-8 py-6"
                  onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Join Waitlist
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                  <PlayCircle className="mr-2 h-5 w-5" />
                  Watch Demo
                </Button>
              </div>
              
              {/* Trust Indicators */}
              <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="h-5 w-5 text-primary" />
                  <span>Privacy-first</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  <span>10,000+ on waitlist</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Problem → Agitation → Solution */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 text-red-600 mb-4">
                    <Clock className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">The Problem</h3>
                  <p className="text-gray-600 leading-relaxed">
                    You save tons of notes, but forget what you learned. Information overload makes it impossible 
                    to see connections between ideas. Knowledge feels scattered and lost.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 text-orange-600 mb-4">
                    <TrendingUp className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">The Agitation</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Every course, article, and book adds to the pile. You invest time learning, 
                    but weeks later it&apos;s gone. Your second brain isn&apos;t helping you remember—just collect.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-4">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">The Solution</h3>
                  <p className="text-gray-600 leading-relaxed">
                    KnowFlow turns your notes into a visual knowledge graph, uses spaced repetition 
                    to make memories stick, and AI to help you expand and connect ideas effortlessly.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* How KnowFlow Works - 3 Steps */}
        <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                How KnowFlow Works
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Three powerful features that work together to transform how you learn
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: '01',
                  icon: Network,
                  title: 'Build Your Knowledge Graph',
                  description: 'Visualize how ideas connect. See relationships between concepts, topics, and notes in an interactive graph that grows with your learning.',
                  color: 'from-blue-500 to-cyan-500'
                },
                {
                  step: '02',
                  icon: Brain,
                  title: 'Never Forget with Spaced Repetition',
                  description: 'Turn notes into flashcards and quizzes. KnowFlow schedules reviews using proven spaced repetition algorithms to ensure long-term retention.',
                  color: 'from-purple-500 to-pink-500'
                },
                {
                  step: '03',
                  icon: Zap,
                  title: 'Expand with AI Assistance',
                  description: 'Generate flashcards, create quizzes, and expand topics with AI. Get suggestions for connections you might have missed.',
                  color: 'from-orange-500 to-red-500'
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full border-2 hover:shadow-xl transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-sm font-semibold text-gray-400">{feature.step}</span>
                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center`}>
                          <feature.icon className="h-6 w-6 text-white" />
                        </div>
                      </div>
                      <CardTitle className="text-2xl">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base leading-relaxed">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Main Features */}
        <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                Everything You Need to Master Knowledge
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Powerful features designed for serious learners
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Network,
                  title: 'Visual Knowledge Graph',
                  description: 'See connections between concepts and ideas at a glance'
                },
                {
                  icon: Brain,
                  title: 'Smart Flashcards',
                  description: 'AI-generated cards optimized for retention'
                },
                {
                  icon: Zap,
                  title: 'Adaptive Quizzes',
                  description: 'Test your knowledge with personalized quizzes'
                },
                {
                  icon: Sparkles,
                  title: 'AI Expansion',
                  description: 'Discover new connections and expand your notes'
                },
                {
                  icon: Link2,
                  title: 'Multi-Format Support',
                  description: 'Import from PDFs, articles, videos, and more'
                },
                {
                  icon: Clock,
                  title: 'Smart Scheduling',
                  description: 'Optimized review timing based on your memory'
                },
                {
                  icon: TrendingUp,
                  title: 'Progress Tracking',
                  description: 'See your learning journey and improvement over time'
                },
                {
                  icon: Users,
                  title: 'Collaborative Learning',
                  description: 'Share knowledge graphs and study together'
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow border-gray-200">
                    <CardHeader>
                      <feature.icon className="h-8 w-8 text-primary mb-3" />
                      <CardTitle className="text-lg">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{feature.description}</CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Who This Is For */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                Built for Serious Learners
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                KnowFlow is perfect if you&apos;re ready to take your learning to the next level
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: GraduationCap,
                  title: 'Students',
                  description: 'Prepare for exams with confidence. Turn lectures and textbooks into lasting knowledge.'
                },
                {
                  icon: Code,
                  title: 'Developers',
                  description: 'Master new frameworks and languages. Build a personal knowledge base of coding concepts.'
                },
                {
                  icon: Languages,
                  title: 'Language Learners',
                  description: 'Remember vocabulary and grammar rules. Connect language concepts for faster learning.'
                },
                {
                  icon: Briefcase,
                  title: 'Knowledge Workers',
                  description: 'Build your second brain. Organize research, articles, and insights into actionable knowledge.'
                }
              ].map((audience, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full text-center hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                        <audience.icon className="h-8 w-8" />
                      </div>
                      <CardTitle>{audience.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">
                        {audience.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 to-purple-50">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { number: '95%', label: 'Retention Rate', icon: TrendingUp },
                { number: '3x', label: 'Faster Learning', icon: Zap },
                { number: '10k+', label: 'Waitlist Members', icon: Users },
                { number: '4.9/5', label: 'User Rating', icon: Star }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                    <stat.icon className="h-8 w-8" />
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                Loved by Learners
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                See what early users are saying about KnowFlow
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: 'Sarah Chen',
                  role: 'Medical Student',
                  content: 'KnowFlow transformed how I study. The spaced repetition actually works—I remember 90% more than before.',
                  rating: 5
                },
                {
                  name: 'Marcus Johnson',
                  role: 'Software Engineer',
                  content: 'Finally, a tool that combines note-taking with actual memory retention. The knowledge graph is brilliant.',
                  rating: 5
                },
                {
                  name: 'Elena Rodriguez',
                  role: 'Language Teacher',
                  content: 'My students love the interactive quizzes. The AI suggestions help them discover connections they missed.',
                  rating: 5
                }
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full">
                    <CardHeader>
                      <div className="flex items-center gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <Quote className="h-8 w-8 text-primary/20 mb-4" />
                      <CardDescription className="text-base leading-relaxed">
                        {testimonial.content}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.role}</div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                Real-World Use Cases
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                See how KnowFlow helps in different scenarios
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Exam Preparation',
                  description: 'A student preparing for medical school entrance exams uses KnowFlow to create flashcards from textbooks, visualize connections between biology and chemistry concepts, and track retention rates across different subjects.',
                  icon: GraduationCap,
                  result: 'Increased retention from 40% to 92% in 3 months'
                },
                {
                  title: 'Professional Development',
                  description: 'A developer learning a new framework creates a knowledge graph linking concepts, generates practice quizzes, and uses AI to discover related topics. The spaced repetition ensures long-term retention of coding patterns.',
                  icon: Code,
                  result: 'Mastered React in 6 weeks instead of 3 months'
                },
                {
                  title: 'Language Learning',
                  description: 'A language learner imports vocabulary from courses, creates connections between grammar rules, and uses adaptive quizzes to practice. The visual graph shows relationships between words and concepts.',
                  icon: Languages,
                  result: 'Retained 85% of vocabulary after 6 months'
                },
                {
                  title: 'Research & Analysis',
                  description: 'A researcher builds a comprehensive knowledge base from papers, articles, and notes. The graph visualization reveals hidden connections, and AI suggests related research areas to explore.',
                  icon: BookOpen,
                  result: 'Discovered 3 new research angles through connections'
                }
              ].map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-xl transition-shadow">
                    <CardHeader>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                          <useCase.icon className="h-6 w-6 text-primary" />
                        </div>
                        <CardTitle className="text-2xl">{useCase.title}</CardTitle>
                      </div>
                      <CardDescription className="text-base leading-relaxed">
                        {useCase.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                        <Target className="h-4 w-4" />
                        <span>{useCase.result}</span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                  Why Knowledge Graphs Matter
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Your brain thinks in connections, not in folders. KnowFlow mirrors how you actually learn.
                </p>
                <div className="space-y-4">
                  {[
                    'See relationships between ideas instantly',
                    'Discover hidden connections in your notes',
                    'Build on existing knowledge naturally',
                    'Navigate your knowledge like a map'
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-lg">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-2 gap-4"
              >
                {[
                  { icon: BarChart3, title: 'Track Progress', color: 'from-blue-500 to-cyan-500' },
                  { icon: Brain, title: 'Smart Reviews', color: 'from-purple-500 to-pink-500' },
                  { icon: Sparkles, title: 'AI Insights', color: 'from-orange-500 to-red-500' },
                  { icon: Shield, title: 'Your Data', color: 'from-green-500 to-emerald-500' }
                ].map((feature, index) => (
                  <Card key={index} className="p-6 text-center">
                    <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center mx-auto mb-4`}>
                      <feature.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                  </Card>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Import & Export */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                Import From Anywhere
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Bring your existing knowledge into KnowFlow with ease
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: FileText, name: 'PDFs', description: 'Import text and notes from PDF documents' },
                { icon: Link2, name: 'Web Articles', description: 'Save and process articles from the web' },
                { icon: Video, name: 'Video Transcripts', description: 'Extract knowledge from YouTube and courses' },
                { icon: BookOpen, name: 'E-books', description: 'Import chapters and highlights from e-books' },
                { icon: Image, name: 'Images', description: 'Extract text from images and screenshots' },
                { icon: Music, name: 'Audio Notes', description: 'Transcribe and process audio recordings' },
                { icon: Download, name: 'Markdown', description: 'Import existing Markdown files' },
                { icon: Upload, name: 'Export', description: 'Export your data anytime, no lock-in' }
              ].map((format, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Card className="h-full text-center hover:shadow-lg transition-shadow p-6">
                    <format.icon className="h-10 w-10 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold text-gray-900 mb-2">{format.name}</h3>
                    <p className="text-sm text-gray-600">{format.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                Why KnowFlow?
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                We combine the best of note-taking, spaced repetition, and AI assistance
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-4 px-4 font-semibold text-gray-900">Feature</th>
                    <th className="text-center py-4 px-4 font-semibold text-primary">KnowFlow</th>
                    <th className="text-center py-4 px-4 font-semibold text-gray-600">Notion</th>
                    <th className="text-center py-4 px-4 font-semibold text-gray-600">Anki</th>
                    <th className="text-center py-4 px-4 font-semibold text-gray-600">Obsidian</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: 'Visual Knowledge Graph', knowflow: true, notion: false, anki: false, obsidian: true },
                    { feature: 'Spaced Repetition', knowflow: true, notion: false, anki: true, obsidian: false },
                    { feature: 'AI-Powered Expansion', knowflow: true, notion: true, anki: false, obsidian: false },
                    { feature: 'Smart Flashcards', knowflow: true, notion: false, anki: true, obsidian: false },
                    { feature: 'Adaptive Quizzes', knowflow: true, notion: false, anki: false, obsidian: false },
                    { feature: 'Learning Analytics', knowflow: true, notion: false, anki: true, obsidian: false },
                    { feature: 'Multi-Format Import', knowflow: true, notion: true, anki: false, obsidian: true },
                    { feature: 'Mobile App', knowflow: true, notion: true, anki: true, obsidian: true }
                  ].map((row, index) => (
                    <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="py-4 px-4 text-gray-700 font-medium">{row.feature}</td>
                      <td className="py-4 px-4 text-center">
                        <CheckCircle2 className="h-5 w-5 text-primary mx-auto" />
                      </td>
                      <td className="py-4 px-4 text-center">
                        {row.notion ? <CheckCircle2 className="h-5 w-5 text-gray-400 mx-auto" /> : <span className="text-gray-300">—</span>}
                      </td>
                      <td className="py-4 px-4 text-center">
                        {row.anki ? <CheckCircle2 className="h-5 w-5 text-gray-400 mx-auto" /> : <span className="text-gray-300">—</span>}
                      </td>
                      <td className="py-4 px-4 text-center">
                        {row.obsidian ? <CheckCircle2 className="h-5 w-5 text-gray-400 mx-auto" /> : <span className="text-gray-300">—</span>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Trust & Security */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                Your Privacy Matters
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                We built KnowFlow with privacy and security as core principles
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Lock,
                  title: 'End-to-End Encryption',
                  description: 'Your notes and data are encrypted in transit and at rest. We can\'t read your content, even if we wanted to.'
                },
                {
                  icon: Shield,
                  title: 'You Own Your Data',
                  description: 'Export all your data anytime in standard formats. No vendor lock-in. Your knowledge stays yours.'
                },
                {
                  icon: RefreshCw,
                  title: 'Open Source Core',
                  description: 'Core features are open source. Transparency builds trust. Contribute and verify how we handle your data.'
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full text-center">
                    <CardHeader>
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                        <feature.icon className="h-8 w-8" />
                      </div>
                      <CardTitle>{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600">
                Everything you need to know about KnowFlow
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  question: 'How is KnowFlow different from other note-taking apps?',
                  answer: 'KnowFlow uniquely combines three powerful features: visual knowledge graphs, spaced repetition for memory retention, and AI assistance. Unlike traditional note apps that just store information, KnowFlow helps you actually remember and understand connections between concepts.'
                },
                {
                  question: 'How does spaced repetition work in KnowFlow?',
                  answer: 'KnowFlow uses proven spaced repetition algorithms (similar to Anki) that schedule reviews based on how well you remember each card. Cards you struggle with appear more frequently, while well-known cards are reviewed less often. This optimizes learning and long-term retention.'
                },
                {
                  question: 'Can I import my existing notes?',
                  answer: 'Yes! KnowFlow supports importing from PDFs, Markdown files, web articles, video transcripts, and more. We\'re working on direct imports from Notion, Obsidian, and other popular tools. You can always export your data too—no lock-in.'
                },
                {
                  question: 'Is my data private and secure?',
                  answer: 'Absolutely. Your notes are encrypted end-to-end, and we can\'t read your content. You own your data and can export it anytime. Core features are open source, so you can verify our security practices.'
                },
                {
                  question: 'Will KnowFlow work on mobile?',
                  answer: 'Yes! KnowFlow will have native mobile apps for iOS and Android, so you can review flashcards and access your knowledge graph anywhere. Your data syncs seamlessly across all devices.'
                },
                {
                  question: 'When will KnowFlow be available?',
                  answer: 'We\'re in active development and planning a beta launch in early 2024. Join the waitlist to get early access and help shape the product. Beta testers will get lifetime discounts.'
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Card className="border-2">
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full text-left"
                    >
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-lg pr-8">{faq.question}</CardTitle>
                          <ChevronDown
                            className={`h-5 w-5 text-gray-400 transition-transform flex-shrink-0 ${
                              openFaq === index ? 'rotate-180' : ''
                            }`}
                          />
                        </div>
                      </CardHeader>
                    </button>
                    {openFaq === index && (
                      <CardContent>
                        <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                      </CardContent>
                    )}
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Secondary CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Start Building Your Second Brain Today
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Join thousands of learners who are already transforming how they learn and remember.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="text-lg px-8 py-6"
                  onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Get Early Access
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                  Learn More
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Waitlist CTA */}
        <section id="waitlist" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary via-blue-600 to-purple-600">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                Ready to Transform Your Learning?
              </h2>
              <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
                Join the waitlist to get early access. Be among the first to experience 
                the future of knowledge management.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg border-0 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary"
                />
                <Button 
                  size="lg" 
                  className="bg-white text-primary hover:bg-gray-100 px-8 py-3"
                >
                  Join Waitlist
                </Button>
              </div>
              <p className="text-sm text-blue-100 mt-4">
                No spam. Unsubscribe at any time.
              </p>
            </motion.div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}

