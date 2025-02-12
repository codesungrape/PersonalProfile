"use client"


import { useTheme } from "../contexts/ThemeContext"
import { Sun, Moon } from "lucide-react"

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 p-2 rounded-full bg-pink-200 dark:bg-purple-800 text-pink-800 dark:text-purple-200 transition-colors duration-200"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      {theme === "light" ? <Moon size={24} /> : <Sun size={24} />}
    </button>
  )
}


