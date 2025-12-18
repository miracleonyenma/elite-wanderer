// ./components/Site/ThemeButton.tsx

"use client";

import { useTheme } from "next-themes";
import { Moon, Sun1, Monitor } from "iconsax-react";
import { useSyncExternalStore } from "react";

interface SiteThemeButtonProps {
  size?: "sm" | "md" | "lg";
  className?: string;
  showBorder?: boolean;
  showBackground?: boolean;
  sideBarOpen?: boolean;
}

const SiteThemeButton: React.FC<SiteThemeButtonProps> = ({
  size = "sm",
  className = "",
  showBorder = true,
  showBackground = true,
  sideBarOpen,
}) => {
  const { theme, setTheme } = useTheme();

  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  const cycleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else if (theme === "dark") {
      setTheme("system");
    } else {
      setTheme("light");
    }
  };

  // Size configuration - md and lg now support text display
  const sizeConfig = {
    sm: {
      container: "h-8 w-8",
      icon: 18,
      showText: false,
      textSize: "",
      gap: "",
    },
    md: {
      container: "h-9 px-3",
      icon: 20,
      showText: true,
      textSize: "text-sm",
      gap: "gap-2",
    },
    lg: {
      container: "h-10 px-4",
      icon: 22,
      showText: true,
      textSize: "text-base",
      gap: "gap-2.5",
    },
  };

  const config = sizeConfig[size];

  // Build dynamic classes based on props
  const borderClass = showBorder ? "border border-border" : "";
  const backgroundClass = showBackground
    ? "bg-background hover:bg-accent"
    : "hover:bg-accent/50";

  if (!mounted) {
    // Render a placeholder with the same dimensions to prevent layout shift
    return (
      <div
        className={`${
          sideBarOpen ? config.container : "h-8 w-8"
        } ${borderClass} ${backgroundClass} rounded-none ${className}`}
      />
    );
  }

  // Determine icon and label based on theme
  const getThemeDisplay = () => {
    switch (theme) {
      case "light":
        return { Icon: Sun1, label: "Light" };
      case "dark":
        return { Icon: Moon, label: "Dark" };
      case "system":
        return { Icon: Monitor, label: "System" };
      default:
        return { Icon: Monitor, label: "System" };
    }
  };

  const { Icon: ThemeIcon, label: themeLabel } = getThemeDisplay();

  // Determine if we should show text based on sidebar state and config
  const shouldShowText = config.showText && sideBarOpen;

  return (
    <button
      onClick={cycleTheme}
      className={`text-foreground justify-between hover:text-accent-foreground flex cursor-pointer items-center  rounded-none transition-colors ${
        shouldShowText ? config.container : "h-8 w-8"
      } ${
        shouldShowText ? config.gap : ""
      } ${borderClass} ${backgroundClass} ${className}`
        .trim()
        .replace(/\s+/g, " ")}
      aria-label={`Current theme: ${themeLabel}. Click to cycle through themes.`}
      title={`Current: ${themeLabel}`}
    >
      {shouldShowText && sideBarOpen && (
        <span className={`font-medium ${config.textSize} whitespace-nowrap`}>
          {themeLabel}
        </span>
      )}

      <ThemeIcon
        variant="Bulk"
        size={config.icon}
        className="animate-in fade-in zoom-in shrink-0 duration-300"
        color="currentColor"
      />
    </button>
  );
};

export default SiteThemeButton;
