import React from "react";
import { useBlogSettings } from "../../context/blogSettingsContext";
import styles from "./styles.module.css";

export default function Article() {
  const { fontSize, lineHeight } = useBlogSettings();

  return (
    <article
      className={styles.article}
      style={{
        fontSize: `${fontSize}px`,
        lineHeight: lineHeight,
      }}
    >
      <p>
        This is an example paragraph in the blog article. Notice how it responds
        to the settings.
      </p>
      <p>
        The second paragraph here continues to explain the context and useContext
        hooks in React.
      </p>
    </article>
  );
}
