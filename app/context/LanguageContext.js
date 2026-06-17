"use client";

import { createContext, useContext, useEffect, useState } from "react";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

useEffect(() => {
  const savedLang = localStorage.getItem("language") || "en";
  setLanguage(savedLang);

  document.documentElement.lang = savedLang;
}, []);

const toggleLanguage = () => {
  const newLang = language === "en" ? "ar" : "en";

  setLanguage(newLang);
  localStorage.setItem("language", newLang);

  document.documentElement.lang = newLang;
};

  return (
    <LanguageContext.Provider
      value={{ language, toggleLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);