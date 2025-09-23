import React from "react";

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?:
    | "default"
    | "secondary"
    | "tech"
    | "accent"
    | "destructive"
    | "outline"
    | "muted";
  size?: "sm" | "default" | "lg";
  children: React.ReactNode;
}

export const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  (
    {
      className = "",
      variant = "default",
      size = "default",
      children,
      ...props
    },
    ref
  ) => {
    const baseClasses =
      "inline-flex items-center rounded-full font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2";

    const variantClasses = {
      default: "bg-primary text-primary-foreground hover:bg-primary/90",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
      tech: "bg-tech-badge text-tech-badge-foreground hover:bg-primary hover:text-primary-foreground",
      accent: "bg-accent text-accent-foreground hover:bg-accent/90",
      destructive:
        "bg-destructive text-destructive-foreground hover:bg-destructive/90",
      outline:
        "border border-input bg-transparent text-foreground hover:bg-accent hover:text-accent-foreground",
      muted: "bg-muted text-muted-foreground hover:bg-muted/80",
    };

    const sizeClasses = {
      sm: "px-2 py-0.5 text-xs",
      default: "px-3 py-1 text-xs",
      lg: "px-4 py-1.5 text-sm",
    };

    const finalClasses =
      `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`.trim();

    return (
      <div ref={ref} className={finalClasses} {...props}>
        {children}
      </div>
    );
  }
);

Badge.displayName = "Badge";
