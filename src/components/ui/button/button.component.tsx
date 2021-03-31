import { ReactNode } from "react";

import "./button.styles.scss";

type ButtonVariants = "primary" | "outline";

type Props = {
  variant?: ButtonVariants;
  children: ReactNode;
};

export function Button({ variant = "primary", children }: Props) {
  switch (variant) {
    case "primary":
      return <button className="button button--primary">{children}</button>;
    case "outline":
      return <button className="button button--outline">{children}</button>;
  }
}
