"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function Hero() {
  return (
    <section id="home" className="h-screen flex items-center justify-center text-center relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-matrix-lightGreen font-mono">
          <span className="animate-glitch inline-block">Shanti Rai</span>
        </h1>
        <h2 className="text-2xl md:text-3xl text-matrix-green mb-6 font-mono">Junior Software Developer</h2>
        <p className="text-xl max-w-2xl mx-auto text-matrix-darkGreen mb-8">
          Decoding the matrix, one line of code at a time
        </p>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            href="#contact"
            className="bg-matrix-green text-matrix-black font-semibold py-3 px-8 rounded-full hover:bg-matrix-lightGreen transition duration-300"
          >
            Initiate Contact
          </Link>
        </motion.div>
      </motion.div>
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
      >
        <svg
          className="w-6 h-6 text-matrix-green"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </motion.div>
    </section>
  )
}
