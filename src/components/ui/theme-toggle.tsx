"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { cn } from "@/lib/utils";

export const ThemeToggle = ({ className }: { className?: string }) => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme === "dark";
  const label = isDark ? "Switch to light theme" : "Switch to dark theme";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      title={mounted ? label : undefined}
      className={cn(
        "hover:bg-vinyl/10 inline-flex size-10 cursor-pointer items-center justify-center rounded-full [&_svg]:size-[1.125rem]",
        className,
      )}
    >
      {mounted && (isDark ? <Sun aria-hidden /> : <Moon aria-hidden />)}
      <span className="sr-only">{mounted ? label : "Switch theme"}</span>
    </button>
  );
};
