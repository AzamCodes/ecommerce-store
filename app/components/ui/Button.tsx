import { forwardRef } from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, disabled, type = "button", ...props }, ref) => {
    return (
      <button
        type={type}
        className={`btn-default ${className}`}
        ref={ref}
        disabled={disabled}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
