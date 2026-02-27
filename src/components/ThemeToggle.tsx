import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export const ThemeToggle = () => {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const root = window.document.documentElement;
    const savedTheme = localStorage.getItem("theme");
    const initialTheme =
      savedTheme || (root.classList.contains("dark") ? "dark" : "light");

    root.classList.remove("light", "dark");
    root.classList.add(initialTheme);
    setTheme(initialTheme as "light" | "dark");
  }, []);

  const toggleTheme = () => {
    const root = window.document.documentElement;

    const isDark = root.classList.contains("dark");
    const newTheme = isDark ? "light" : "dark";

    root.classList.remove("light", "dark");
    root.classList.add(newTheme);
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="fixed top-24 right-4 md:top-6 md:right-4 z-[60] rounded-full hover:scale-110 transition-transform glow-effect"
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <Moon className="h-5 w-5" />
      ) : (
        <Sun className="h-5 w-5" />
      )}
    </Button>
  );
};
