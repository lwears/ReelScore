import type { LinkProps } from 'next/link'
import Link from 'next/link'
import * as React from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

const button = tv({
  base: 'flex items-center gap-1 rounded-md px-3 py-1 font-semibold text-white active:opacity-80',
  variants: {
    variant: {
      primary: 'bg-primary-bg hover:bg-primary-bg-hover',
      secondary: 'bg-purple-500 hover:bg-purple-700',
      success: 'bg-green-500 hover:bg-green-700',
      card: 'hover:bg-white/20',
    },
    size: {
      sm: 'px-3 py-1 text-xs [&_svg]:w-4',
      md: 'px-4 py-1.5 text-sm [&_svg]:w-6',
      lg: 'text-md px-6 py-2 [&_svg]:w-8',
      card: 'w-full p-1.5 font-normal [&_svg]:w-6',
    },
    defaultVariants: {
      color: 'primary',
      size: 'md',
    },
  },
})

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
}

const Button = ({
  className,
  variant,
  size,
  children,
  startIcon,
  endIcon,
  ...props
}: ButtonProps) => {
  return (
    <button className={button({ variant, size, className })} {...props}>
      {startIcon && startIcon}
      {children}
      {endIcon && endIcon}
    </button>
  )
}

interface LinkButtonProps extends LinkProps, VariantProps<typeof button> {
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
  children: React.ReactNode
}

const LinkButton = ({
  href,
  variant,
  size,
  children,
  ...props
}: LinkButtonProps) => {
  return (
    <Link href={href} className={button({ variant, size })} {...props}>
      {children}
    </Link>
  )
}

export { Button, LinkButton }
