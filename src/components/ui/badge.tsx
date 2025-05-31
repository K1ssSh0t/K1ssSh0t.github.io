import type * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center justify-center border px-3 py-1 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:ring-2 focus-visible:ring-red-500 transition-all nier-text relative overflow-hidden group",
  {
    variants: {
      variant: {
        default: "border-white bg-transparent text-white hover:bg-white hover:text-black",
        secondary: "border-muted-foreground bg-transparent text-muted-foreground hover:border-white hover:text-white",
        destructive: "border-red-500 bg-transparent text-red-500 hover:bg-red-500 hover:text-white",
        outline: "border-muted-foreground text-foreground hover:border-red-500 hover:text-red-500",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
)

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> & VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span"

  return (
    <Comp
      data-slot="badge"
      className={cn(
        badgeVariants({ variant }),
        "before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-red-500/30 before:to-transparent",
        "before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700",
        className,
      )}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
