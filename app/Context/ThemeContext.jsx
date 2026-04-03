"use client";

import { createContext, useContext, useState, useEffect } from "react";

// Create Context
const ThemeContext = createContext();

// Custom hook to use theme
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
};

// Provider component
export const ThemeProvider = ({ children }) => {
  const [isGlassTheme, setIsGlassTheme] = useState(false);

  // Toggle glass theme
  const toggleGlassTheme = () => {
    const newTheme = !isGlassTheme;
    setIsGlassTheme(newTheme);
    localStorage.setItem("glassTheme", JSON.stringify(newTheme));
  };

  // Load saved theme preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("glassTheme");
    if (savedTheme !== null) {
      setIsGlassTheme(JSON.parse(savedTheme));
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ isGlassTheme, toggleGlassTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};