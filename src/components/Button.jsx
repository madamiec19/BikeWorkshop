const baseStyles =
  "py-2 px-5 hover:opacity-90 py-2 px-3 ml-2 rounded-md transition active:scale-95 min-w-[140px] flex items-center justify-center";

const variants = {
  primary: `bg-accent text-white`,
  secondary: `border bg-card text-foreground`,
};

export const Button = ({
  href,
  children,
  variant = "primary",
  className = "",
  ...props
}) => {
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

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
