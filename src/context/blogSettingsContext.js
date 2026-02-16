import React, { createContext, useContext, useMemo, useState } from "react";

const BlogSettingsContext = createContext(null);

export function BlogSettingsProvider({ children }) {
  const [fontSize, setFontSize] = useState(18);     
  const [lineHeight, setLineHeight] = useState(1.5); 

  const value = useMemo(
    () => ({
      fontSize,
      lineHeight,
      setFontSize,
      setLineHeight,
    }),
    [fontSize, lineHeight]
  );

  return (
    <BlogSettingsContext.Provider value={value}>
      {children}
    </BlogSettingsContext.Provider>
  );
}

export function useBlogSettings() {
  const ctx = useContext(BlogSettingsContext);
  if (!ctx) {
    throw new Error("useBlogSettings must be used inside BlogSettingsProvider");
  }
  return ctx;
}
