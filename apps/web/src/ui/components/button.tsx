import { Slot } from '@radix-ui/react-slot'
import { cva } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@web/lib/utils/cn'

import type { VariantProps } from 'class-variance-authority'

//https://medium.com/@wdswy/how-to-build-highly-reusable-react-components-in-next-js-13-tailwindcss-and-radix-ui-a17cf5fbed99

const buttonVariants = cva(
  'flex items-center gap-1 rounded-md px-3 py-1 font-semibold text-white active:opacity-80',
  {
    variants: {
      variant: {
        primary: 'bg-primary hover:bg-primary-hover',
        secondary:
          'border-primary-bg text-primary-bg hover:bg-primary-muted border-2',
        card: 'hover:bg-white/20',
      },
      size: {
        sm: 'px-3 py-1 text-xs [&_svg]:w-4',
        md: 'px-4 py-1.5 text-sm [&_svg]:w-6',
        lg: 'text-md px-6 py-2 [&_svg]:w-8',
        card: 'w-full p-1.5 font-normal [&_svg]:w-6',
      },
      defaultVariants: {
        variant: 'primary',
        size: 'md',
      },
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  loading?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
