import { Slot, Slottable } from '@radix-ui/react-slot'
import { cn } from '@web/lib/utils/cn'
import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'
import type { ReactElement } from 'react'
import React from 'react'

//https://medium.com/@wdswy/how-to-build-highly-reusable-react-components-in-next-js-13-tailwindcss-and-radix-ui-a17cf5fbed99

const buttonVariants = cva(
  'flex items-center gap-2 rounded-lg font-semibold transition-all duration-200 active:scale-95 shadow-sm hover:shadow-md',
  {
    variants: {
      variant: {
        primary:
          'bg-primary text-primary-foreground hover:bg-primary-hover hover:-translate-y-0.5',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary-hover hover:-translate-y-0.5',
        tertiary:
          'bg-white text-primary border-2 border-border hover:bg-muted hover:border-primary/30 hover:-translate-y-0.5',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90 hover:-translate-y-0.5',
        ghost:
          'text-white hover:bg-white hover:text-black shadow-none hover:shadow-sm',
      },
      size: {
        sm: 'px-3 py-1.5 text-xs [&_svg]:w-4',
        md: 'px-4 py-2.5 text-sm [&_svg]:w-5',
        lg: 'text-base px-6 py-3 [&_svg]:w-6',
        icon: 'rounded-full p-2 [&_svg]:w-5',
        card: 'w-1/2 px-2 py-2 text-xs font-medium [&_svg]:w-4',
      },
      defaultVariants: {
        variant: 'primary',
        size: 'md',
      },
    },
  }
)

export type SVGComponent = React.ComponentType<
  React.SVGAttributes<SVGSVGElement>
>

// Partial because there is a defaultVariant
export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  Partial<VariantProps<typeof buttonVariants>> & {
    asChild?: boolean
    loading?: boolean
  } & (
    | { IconBefore?: ReactElement; IconAfter?: never }
    | { IconBefore?: never; IconAfter?: ReactElement }
  )

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      IconBefore,
      IconAfter,
      children,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {IconBefore ?? null}
        <Slottable>{children && children}</Slottable>
        {IconAfter ?? null}
      </Comp>
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
