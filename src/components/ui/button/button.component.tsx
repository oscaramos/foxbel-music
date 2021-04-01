import { ButtonHTMLAttributes, ReactNode } from "react";

import "./button.styles.scss";

type ButtonVariants = "primary" | "outline";

type Props = {
  variant?: ButtonVariants;
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ variant = "primary", children, ...props }: Props) {
  switch (variant) {
    case "primary":
      return (
        <button className="button button--primary" {...props}>
          {children}
        </button>
      );
    case "outline":
      return (
        <button className="button button--outline" {...props}>
          {children}
        </button>
      );
  }
}
