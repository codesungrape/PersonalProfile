"use client"

import { motion } from "framer-motion"

export default function About() {
  return (
    <section id="about" className="py-20 px-4 md:px-8 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto matrix-card rounded-lg p-8 relative z-10"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-matrix-lightGreen font-mono">
          System Profile
        </h2>
        <p className="text-lg text-matrix-green mb-6">
          Greetings, fellow coder. I&apos;m Shanti Rai, a solutions-driven Junior Software Developer focused on building
          engaging, user-centric applications with clean, maintainable code. Currently progressing through School of
          Code&apos;s Full-Stack Developer bootcamp, I&apos;m enhancing my technical skills in ISTQB certification and TypeScript.
        </p>
        <p className="text-lg text-matrix-green mb-6">
          As a self-taught programmer through Codecademy and Code First Girls, I showcase strong initiative and quick
          learning abilities. My diverse experience in business development and customer service allows me to create
          technical solutions that align with business goals and improve user experiences.
        </p>
        <p className="text-lg text-matrix-green">
          When not immersed in lines of code, you&apos;ll find me exploring the latest tech trends, hacking on open-source
          projects, or diving deep into the intricacies of machine learning algorithms. Join me as we navigate through
          the digital labyrinth and push the boundaries of what&apos;s possible in the world of technology.
        </p>
      </motion.div>
    </section>
  )
}

