import React from "react";
import { useBlogSettings } from "../../context/blogSettingsContext";
import styles from "./styles.module.css";

const FONT_SIZES = [14, 16, 18, 20, 22, 24];
const LINE_HEIGHTS = [1.2, 1.35, 1.5, 1.65, 1.8, 2];

export default function SettingsPanel() {
  const { fontSize, lineHeight, setFontSize, setLineHeight } = useBlogSettings();

  return (
    <section className={styles.panel}>
      <div className={styles.title}>Settings</div>

      <label className={styles.control}>
        <span className={styles.label}>Font Size:</span>
        <select
          className={styles.select}
          value={fontSize}
          onChange={(e) => setFontSize(Number(e.target.value))}
        >
          {FONT_SIZES.map((s) => (
            <option key={s} value={s}>
              {s}px
            </option>
          ))}
        </select>
      </label>

      <label className={styles.control}>
        <span className={styles.label}>Line Height:</span>
        <select
          className={styles.select}
          value={lineHeight}
          onChange={(e) => setLineHeight(Number(e.target.value))}
        >
          {LINE_HEIGHTS.map((lh) => (
            <option key={lh} value={lh}>
              {lh}
            </option>
          ))}
        </select>
      </label>
    </section>
  );
}
