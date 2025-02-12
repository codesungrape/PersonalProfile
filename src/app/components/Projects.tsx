"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const projects = [
  {
    title: "Tasty Ten",
    description:
      "A full-stack React/Next.js application developed during a 24-hour hackathon. Users can select a query or choose from preset queries to fetch 10 random recipes.",
    image: "/images/tasty-ten.jpg",
    tech: ["Next.js", "React", "Tailwind CSS", "React-Bootstrap", "API Integration"],
    github: "https://github.com/codesungrape/Tasty-Ten-hackathon",
    nextSteps: "Implementing React testing library before developing further CRUD operations.",
  },
  {
    title: "Career Bloom",
    description:
      "Led a 4-person team to design a digital solution for adult learners facing employment barriers. Integrated AI-guided self-reflection with human support.",
    image: "/images/career-bloom.jpg",
    tech: ["Figma", "OpenAI", "Canva"],
    prototype: "https://shorturl.at/8YRcL",
    canva: "https://shorturl.at/SnY9Q",
  },
  {
    title: "Dave's Movies API",
    description:
      "A RESTful API using Node.js that performs CRUD operations on a custom-designed PostgreSQL movie database.",
    image: "/images/daves-movies.jpg",
    tech: ["JavaScript", "Node.js", "PostgreSQL", "Render"],
    github: "https://github.com/codesungrape/SQLhackathon",
    nextSteps: "Currently applying automated unit tests with Vitest.",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 md:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-matrix-lightGreen font-mono">
          Digital Constructs
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="matrix-card rounded-lg overflow-hidden shadow-lg"
            >
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={400}
                height={225}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-matrix-lightGreen">{project.title}</h3>
                <p className="text-matrix-green mb-4">{project.description}</p>
                <div className="mb-4">
                  <h4 className="text-matrix-lightGreen font-semibold mb-2">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="bg-matrix-darkGreen text-matrix-lightGreen px-2 py-1 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-matrix-lightGreen hover:text-matrix-green mr-4"
                  >
                    GitHub
                  </a>
                )}
                {project.prototype && (
                  <a
                    href={project.prototype}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-matrix-lightGreen hover:text-matrix-green mr-4"
                  >
                    Prototype
                  </a>
                )}
                {project.canva && (
                  <a
                    href={project.canva}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-matrix-lightGreen hover:text-matrix-green"
                  >
                    Canva
                  </a>
                )}
                {project.nextSteps && (
                  <p className="text-matrix-green mt-4">
                    <strong>Next Steps:</strong> {project.nextSteps}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}





