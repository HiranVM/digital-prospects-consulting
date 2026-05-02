"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const [mounted, setMounted] = React.useState(false);
  const { setTheme, theme } = useTheme();

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="h-9 w-16" />;
  }

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="relative inline-flex h-9 w-16 items-center justify-center rounded-full bg-slate-200 dark:bg-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
      aria-label="Toggle theme"
    >
      <span className="sr-only">Toggle theme</span>
      <div
        className={`absolute left-1 flex h-7 w-7 items-center justify-center rounded-full bg-white transition-transform ${
          theme === "dark" ? "translate-x-7" : "translate-x-0"
        }`}
      >
        {theme === "dark" ? (
          <Moon className="h-4 w-4 text-slate-800" />
        ) : (
          <Sun className="h-4 w-4 text-amber-500" />
        )}
      </div>
    </button>
  );
}
