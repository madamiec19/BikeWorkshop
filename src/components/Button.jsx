import React from "react";
// Definiujemy bazowe style, które są wspólne dla wszystkich przycisków
const baseStyles =
  "py-2 px-5 r hover:opacity-90 py-2 px-3 ml-2 rounded-md transition  active:scale-95";

// Definiujemy style dla różnych wariantów przycisków
const variants = {
  // Przycisk główny, z tłem w kolorze akcentu
  primary: `bg-accent text-white`,
  // Przycisk dodatkowy, z ramką
  secondary: `border bg-card text-foreground`,
};

export const Button = ({
  href,
  children,
  variant = "primary",
  className = "",
  ...props
}) => {
  // Jeśli przekażemy 'href', komponent będzie linkiem <a>
  if (href) {
    return (
      <a
        href={href}
        className={`${baseStyles} ${variants[variant]} ${className}`}
        {...props}
      >
        {children}
      </a>
    );
  }

  // W przeciwnym wypadku będzie standardowym przyciskiem <button>
  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
