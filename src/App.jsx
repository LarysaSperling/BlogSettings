import React from "react";
import { BlogSettingsProvider } from "./context/blogSettingsContext";
import SettingsPanel from "./components/settingsPanel";
import Article from "./components/article";
import "./App.css";

export default function App() {
  return (
    <div className="page">
      <BlogSettingsProvider>
        <div className="container">
          <SettingsPanel />
          <Article />
        </div>
      </BlogSettingsProvider>
    </div>
  );
}

