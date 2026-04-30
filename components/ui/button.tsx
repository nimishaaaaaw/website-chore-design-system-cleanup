import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  // Base MediKloud button styles (.btn)
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2 active:scale-[.98] select-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        // MediKloud .btn-primary
        default: "bg-gradient-action text-white shadow-btn hover:opacity-90",
        // MediKloud .btn-secondary
        secondary: "bg-white text-slate-600 border border-slate-200 hover:border-indigo-200 hover:text-indigo-600",
        // MediKloud .btn-ghost
        ghost: "text-indigo-600 border-[1.5px] border-indigo-200 bg-transparent hover:bg-indigo-50",
        // Semantic Danger
        destructive: "bg-danger text-white hover:opacity-90",
        // Alternative outline using slate
        outline: "border border-slate-200 bg-transparent hover:bg-slate-50 text-slate-700",
        // Brand link
        link: "text-brand-600 underline-offset-4 hover:underline",
        // MediKloud .btn-dark-cta (Specific to your dark sections)
        darkCta: "bg-gradient-accent text-white shadow-glow hover:opacity-90 font-bold",
      },
      size: {
        // MediKloud .btn-md
        default: "px-6 py-2.5 text-sm rounded-xl",
        // MediKloud .btn-sm
        sm: "px-4 py-2 text-xs rounded-xl",
        // MediKloud .btn-lg
        lg: "px-8 py-3.5 text-base rounded-xl",
        icon: "h-10 w-10 rounded-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }