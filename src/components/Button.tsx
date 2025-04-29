import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  text?: string;
}

const Button: React.FC<ButtonProps> = ({
  className,
  text,
  children,
  ...props
}) => {
  return (
    <button
      className={`bg-primary text-white rounded-lg font-medium transition-all hover:bg-primary/90 flex items-center justify-center gap-2 ${
        className || ""
      }`}
      {...props}
    >
      {text || children || "Get in Touch"}
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5"
      >
        <path
          d="M5 12H19M19 12L12 5M19 12L12 19"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

export default Button;
