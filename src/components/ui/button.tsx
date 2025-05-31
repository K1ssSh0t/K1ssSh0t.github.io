import type * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-red-500 nier-text relative overflow-hidden group",
  {
    variants: {
      variant: {
        default:
          "bg-transparent border-2 border-white text-white hover:bg-white hover:text-black hover:border-red-500 transition-all duration-300",
        destructive:
          "bg-transparent border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-all duration-300",
        outline:
          "border-2 border-muted-foreground bg-transparent hover:bg-muted-foreground hover:text-background transition-all duration-300",
        secondary:
          "bg-secondary border-2 border-secondary text-secondary-foreground hover:bg-secondary/80 hover:border-white transition-all duration-300",
        ghost: "border-2 border-transparent hover:border-white hover:bg-white/10 transition-all duration-300",
        link: "text-primary underline-offset-4 hover:underline border-none",
        outline_v2:
          "bg-muted border-2 border-muted-foreground hover:border-red-500 hover:bg-red-500/10 transition-all duration-300",
      },
      size: {
        default: "h-10 px-6 py-2",
        sm: "h-8 px-4 text-xs",
        lg: "h-12 px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(
        buttonVariants({ variant, size }),
        "before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-red-500/20 before:to-transparent",
        "before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-500",
        className,
      )}
      {...props}
    />
  )
}

export { Button, buttonVariants }
