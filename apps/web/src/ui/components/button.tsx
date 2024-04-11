import { Slot, Slottable } from '@radix-ui/react-slot'
import { cva } from 'class-variance-authority'
import type { ReactElement } from 'react'
import React from 'react'

import { cn } from '@web/lib/utils/cn'

import type { VariantProps } from 'class-variance-authority'

//https://medium.com/@wdswy/how-to-build-highly-reusable-react-components-in-next-js-13-tailwindcss-and-radix-ui-a17cf5fbed99

const buttonVariants = cva(
  'flex items-center gap-1 rounded-md font-semibold text-white active:opacity-80',
  {
    variants: {
      variant: {
        primary: 'bg-primary hover:bg-primary-hover',
        secondary:
          'border-primary-bg text-primary-bg hover:bg-primary-muted border-2',
        tiertary:
          'bg-rhino-50 text-rhino-700 hover:bg-rhino-100 active:bg-rhino-200',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        ghost: 'hover:bg-accent/40',
      },
      size: {
        sm: 'px-3 py-1.5 text-xs [&_svg]:w-4',
        md: 'px-4 py-2 text-sm [&_svg]:w-6',
        lg: 'text-md px-6 py-2 [&_svg]:w-8',
        icon: 'rounded-full p-1 [&_svg]:w-6',
        card: 'w-1/2 px-1 py-1.5 text-xs font-normal [&_svg]:w-4 ',
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
