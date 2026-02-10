import { useState, useEffect } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="relative w-14 h-7 flex items-center bg-gray-300 dark:bg-gray-700 rounded-full p-1 transition-colors duration-300 focus:outline-none"
    >
      {/* The sliding circle */}
      <span
        className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
          theme === "dark" ? "translate-x-7" : "translate-x-0"
        } flex items-center justify-center text-yellow-500`}
      >
        {theme === "light" ? "☀️" : "🌙"}
      </span>
    </button>
  );
}
