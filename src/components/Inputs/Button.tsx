import type { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./Input.module.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
  children: ReactNode;
}

function Button({ variant = "primary", children, className, ...rest }: ButtonProps) {
  const variantClass =
    variant === "primary" ? styles.primary : variant === "outline" ? styles.outline : styles.ghost;

  return (
    <button className={`${styles.button} ${variantClass} ${className ?? ""}`} {...rest}>
      {children}
    </button>
  );
}

export default Button;
