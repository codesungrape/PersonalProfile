"use client"

import { motion } from "framer-motion"

const skillCategories = [
  {
    name: "Front-End",
    skills: [
      "JavaScript",
      "TypeScript",
      "HTML",
      "CSS",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Bootstrap",
      "Figma",
      "UI/UX Design",
      "Vercel",
    ],
  },
  {
    name: "Back-End",
    skills: ["Node.js", "PostgreSQL", "Express", "Next.js API Routes", "RESTful API", "CRUD", "Postman", "Render"],
  },
  {
    name: "Testing",
    skills: ["Vitest", "Jest", "Mocha", "React Testing Library", "Playwright"],
  },
  {
    name: "DevOps & Workflow",
    skills: ["Git", "GitHub", "GitHub Projects", "CI/CD Pipelines", "Trunk-Based Development"],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 md:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-matrix-lightGreen font-mono">
          Skill Matrix
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="matrix-card rounded-lg p-6"
            >
              <h3 className="text-xl font-semibold mb-4 text-matrix-lightGreen">{category.name}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    className="bg-matrix-darkGreen text-matrix-lightGreen px-3 py-1 rounded-full text-sm"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


