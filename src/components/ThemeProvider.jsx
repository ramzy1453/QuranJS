import { useEffect } from "react";
import { useTheme } from "../hooks";

export default function ThemeProvider({ children }) {
  const { isDark } = useTheme();
  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.remove("light");
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
      root.classList.add("light");
    }
  }, [isDark]);
  return <>{children}</>;
}
