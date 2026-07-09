import styles from "./Text.module.css";

interface SectionHeadingProps {
  children: string;
}

export function SectionHeading({ children }: SectionHeadingProps) {
  return <h2 className={styles.sectionHeading}>{children}</h2>;
}
