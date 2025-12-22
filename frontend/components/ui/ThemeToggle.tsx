"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";



const ThemeToggle = () => {

const { theme, setTheme } = useTheme();
    
  return (
   <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="flex items-center gap-2 w-full px-3 py-2 rounded-lg hover:bg-ts-border text-ts-text-main"
    >
      {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
      <span>Toggle theme</span>
    </button>
  )
}

export default ThemeToggle
