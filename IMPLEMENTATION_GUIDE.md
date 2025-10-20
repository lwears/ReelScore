# Color System Implementation Guide

## Option 1: Simplified High-Contrast Implementation

### Step 1: Update Tailwind Config
**File:** `apps/web/tailwind.config.ts`

```typescript
import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'
import defaultTheme from 'tailwindcss/defaultTheme'

const fromVariable = (name: string) => `hsl(var(--${name}) / <alpha-value>)`

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      gridTemplateRows: {
        'auto-fill-100': 'repeat(auto-fill, minmax(200px, 1fr))',
        'auto-fit-100': 'repeat(auto-fit, minmax(200px, 1fr))',
      },
      gridTemplateColumns: {
        'auto-fill-100': 'repeat(auto-fill, minmax(180px, 1fr))',
        'auto-fit-100': 'repeat(auto-fit, minmax(180px, 1fr))',
      },
      transitionProperty: {
        'max-height': 'max-height',
      },
      boxShadow: {
        'material-1': '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);',
        'material-2': '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);',
        'material-3': '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);',
        'material-4': '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);',
        'material-5': '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);',
      },
      colors: {
        border: colors.gray[200],
        input: colors.gray[300],
        ring: colors.blue[200],
        background: colors.white,
        foreground: colors.black,
        primary: {
          DEFAULT: colors.blue[600],
          foreground: colors.white,
          hover: colors.blue[700],
        },
        secondary: {
          DEFAULT: colors.slate[500],
          foreground: colors.white,
          hover: colors.slate[600],
        },
        destructive: {
          DEFAULT: fromVariable('destructive'),
          foreground: fromVariable('destructive-foreground'),
        },
        accent: {
          DEFAULT: colors.amber[500],
          foreground: colors.white,
        },
        card: {
          DEFAULT: colors.gray[50],
          foreground: colors.gray[900],
        },
      },
    },
    screens: {
      xs: '475px',
      ...defaultTheme.screens,
    },
    fontFamily: {
      roboto: ['Roboto', ...defaultTheme.fontFamily.sans],
    },
    keyframes: {
      shimmer: {
        '100%': {
          transform: 'translateX(100%)',
        },
      },
    },
  },
  plugins: [],
}
export default config
```

### Step 2: Update Global CSS
**File:** `apps/web/src/styles/globals.css`

```css
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap");
@import "tailwindcss";

@theme {
  /* Simplified Palette */
  --color-white: #ffffff;
  --color-black: #1a1a1a;

  /* Grays */
  --color-gray-50: #f9fafb;
  --color-gray-100: #f3f4f6;
  --color-gray-200: #e5e7eb;
  --color-gray-300: #d1d5db;
  --color-gray-600: #4b5563;
  --color-gray-900: #111827;

  /* Blues */
  --color-blue-600: #2563eb;
  --color-blue-700: #1d4ed8;

  /* Slate */
  --color-slate-500: #64748b;
  --color-slate-600: #475569;

  /* Accent */
  --color-amber-500: #f59e0b;

  /* Destructive */
  --color-red-700: #b91c1c;

  /* Semantic Colors */
  --color-border: var(--color-gray-200);
  --color-input: var(--color-gray-300);
  --color-ring: var(--color-blue-600);
  --color-background: var(--color-white);
  --color-foreground: var(--color-black);
  --color-primary: var(--color-blue-600);
  --color-primary-foreground: var(--color-white);
  --color-primary-hover: var(--color-blue-700);
  --color-secondary: var(--color-slate-500);
  --color-secondary-foreground: var(--color-white);
  --color-secondary-hover: var(--color-slate-600);
  --color-card: var(--color-gray-50);
  --color-card-foreground: var(--color-gray-900);
  --color-accent: var(--color-amber-500);
  --color-accent-foreground: var(--color-white);

  /* Breakpoints */
  --breakpoint-xs: 475px;

  /* Font families */
  --font-family-roboto: "Roboto", ui-sans-serif, system-ui, sans-serif;
}

:root {
  --background: 0 0% 100%;
  --foreground: 0 0% 10%;
  --card: 0 0% 98%;
  --card-foreground: 0 0% 7%;
  --popover: 0 0% 100%;
  --popover-foreground: 0 0% 10%;
  --primary: 217 91% 60%;
  --primary-foreground: 0 0% 100%;
  --secondary: 215 20% 55%;
  --secondary-foreground: 0 0% 100%;
  --muted: 0 0% 96%;
  --muted-foreground: 0 0% 45%;
  --accent: 38 92% 50%;
  --accent-foreground: 0 0% 100%;
  --destructive: 0 72% 38%;
  --destructive-foreground: 0 0% 98%;
  --radius: 0.5rem;
}

.dark {
  --background: 0 0% 4%;
  --foreground: 0 0% 98%;
  --card: 0 0% 10%;
  --card-foreground: 0 0% 98%;
  --popover: 0 0% 4%;
  --popover-foreground: 0 0% 98%;
  --primary: 217 91% 65%;
  --primary-foreground: 0 0% 100%;
  --secondary: 0 0% 44%;
  --secondary-foreground: 0 0% 100%;
  --muted: 0 0% 15%;
  --muted-foreground: 0 0% 60%;
  --accent: 38 92% 55%;
  --accent-foreground: 0 0% 100%;
  --destructive: 0 72% 38%;
  --destructive-foreground: 0 0% 98%;
}

@layer components {
  .nav-list-ul {
    @apply text-primary-foreground flex flex-col items-center md:h-full md:flex-row md:gap-2;
  }

  .nav-list-dropdown {
    @apply md:absolute md:top-[55px] md:-left-0 md:shadow-md rounded md:bg-primary md:w-32 md:flex md:flex-col gap-2 transition-all duration-200 ease-in-out px-3 md:p-1;
  }

  .nav-list-dropdown-item {
    @apply md:list-none transition-colors duration-200 ease-in-out;
  }

  .nav-list-item {
    @apply relative size-full px-2 py-3 last:border-0 md:flex md:items-center md:border-0 border-b-[1px] border-border md:p-0 text-base font-normal;
  }

  .nav {
    @apply size-full z-20 fixed bg-primary overflow-hidden top-[50px] left-0 flex flex-col max-h-0 transition-[max-height] duration-500 ease-out md:max-h-none md:top-0 md:static md:bg-transparent md:overflow-visible md:flex-row-reverse md:justify-between [&_search]:border-b-[1px] [&_search]:border-border md:[&_search]:border-none;
  }
}

@layer utilities {
  .shimmer {
    @apply before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent;
  }
}

/* Hamburger menu styles remain the same */
.hamb {
  cursor: pointer;
  float: right;
  padding: 20px;
}

.hamb-line {
  background: white;
  display: block;
  height: 2px;
  position: relative;
  width: 24px;
}

.hamb-line::before,
.hamb-line::after {
  background: white;
  content: "";
  display: block;
  height: 100%;
  position: absolute;
  transition: all 0.2s ease-out;
  width: 100%;
}

.hamb-line::before {
  top: 5px;
}

.hamb-line::after {
  top: -5px;
}

.side-menu {
  display: none;
}

.side-menu:checked ~ nav {
  max-height: 350px;
}

.side-menu:checked ~ .hamb .hamb-line {
  background: transparent;
}

.side-menu:checked ~ .hamb .hamb-line::before {
  transform: rotate(-45deg);
  top: 0;
}

.side-menu:checked ~ .hamb .hamb-line::after {
  transform: rotate(45deg);
  top: 0;
}

@media (min-width: 768px) {
  .hamb {
    display: none;
  }
}
```

### Step 3: Update Button Component
**File:** `apps/web/src/ui/components/button.tsx`

```typescript
import { Slot, Slottable } from '@radix-ui/react-slot'
import { cn } from '@web/lib/utils/cn'
import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'
import type { ReactElement } from 'react'
import React from 'react'

const buttonVariants = cva(
  'flex items-center gap-1 rounded-md font-semibold transition-colors active:opacity-80',
  {
    variants: {
      variant: {
        primary: 'bg-primary text-primary-foreground hover:bg-primary-hover',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary-hover',
        tertiary: 'bg-white text-primary border-2 border-gray-300 hover:bg-gray-50 active:bg-gray-100',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        ghost: 'hover:bg-gray-100 text-foreground',
      },
      size: {
        sm: 'px-3 py-1.5 text-xs [&_svg]:w-4',
        md: 'px-4 py-2 text-sm [&_svg]:w-6',
        lg: 'text-md px-6 py-2 [&_svg]:w-8',
        icon: 'rounded-full p-1 [&_svg]:w-6',
        card: 'w-1/2 px-1 py-1.5 text-xs font-normal [&_svg]:w-4',
      },
      defaultVariants: {
        variant: 'primary',
        size: 'md',
      },
    },
  }
)

export type SVGComponent = React.ComponentType<React.SVGAttributes<SVGSVGElement>>

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
```

### Step 4: Update Card Component
**File:** `apps/web/src/ui/components/card.tsx`

```typescript
import { StarIcon } from '@heroicons/react/20/solid'
import { buildImgSrc } from '@web/lib/utils/helpers'
import clsx from 'clsx'
import Image from 'next/image'

export interface CardProps {
  posterPath: string | null
  title: string
  date: Date | null
  score?: number
  tmdbScore: number
  children?: React.ReactNode
}

export default function Card(data: CardProps) {
  const { posterPath, date, title, children, tmdbScore } = data
  return (
    <div className="shadow-material-2 group relative aspect-[2/3] w-full overflow-hidden rounded-md text-sm font-extralight text-white hover:cursor-pointer">
      <div className="absolute left-0 top-0 z-0 size-full overflow-hidden rounded-md bg-white group-hover:blur-sm">
        {posterPath ? (
          <Image
            src={buildImgSrc(posterPath)}
            alt={title || 'No Title'}
            width={300}
            height={320}
            className="size-full object-cover"
          />
        ) : (
          <p className="flex size-full items-center justify-center p-2 text-center text-xl font-semibold text-gray-600">
            {title}
          </p>
        )}
      </div>
      <div className="flex h-full flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity">
        <div
          className={clsx(
            'z-10 flex flex-1 flex-col justify-between p-2',
            posterPath
              ? 'bg-gradient-to-t from-black/90 via-transparent to-black/70'
              : 'bg-black/70'
          )}
        >
          <div className="flex justify-between gap-1">
            <p className="overflow-hidden text-ellipsis">
              {title}
              {date && ` (${date.getFullYear()})`}
            </p>
            {tmdbScore > 0 && (
              <span className="flex gap-2">
                <p>{tmdbScore}</p>
                <StarIcon className="size-4 text-amber-500" />
              </span>
            )}
          </div>
          <div className="flex w-full">{children && children}</div>
        </div>
      </div>
    </div>
  )
}
```

### Step 5: Update Ratings Component (Star Color)
**File:** `apps/web/src/ui/components/ratings.tsx`

Find and replace star colors:
```typescript
// Change from:
className="text-yellow-400"

// To:
className="text-amber-500"
```

---

## Option 2: Enhanced Blue Theme Implementation

### Step 1: Update Tailwind Config
**File:** `apps/web/tailwind.config.ts`

```typescript
import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'
import defaultTheme from 'tailwindcss/defaultTheme'

const fromVariable = (name: string) => `hsl(var(--${name}) / <alpha-value>)`

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      gridTemplateRows: {
        'auto-fill-100': 'repeat(auto-fill, minmax(200px, 1fr))',
        'auto-fit-100': 'repeat(auto-fit, minmax(200px, 1fr))',
      },
      gridTemplateColumns: {
        'auto-fill-100': 'repeat(auto-fill, minmax(180px, 1fr))',
        'auto-fit-100': 'repeat(auto-fit, minmax(180px, 1fr))',
      },
      transitionProperty: {
        'max-height': 'max-height',
      },
      boxShadow: {
        'material-1': '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);',
        'material-2': '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);',
        'material-3': '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);',
        'material-4': '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);',
        'material-5': '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);',
      },
      colors: {
        border: colors.slate[300],
        input: colors.slate[300],
        ring: colors.blue[200],
        background: colors.white,
        foreground: colors.slate[900],
        primary: {
          DEFAULT: colors.blue[700],
          foreground: colors.white,
          hover: colors.blue[800],
        },
        secondary: {
          DEFAULT: colors.sky[600],
          foreground: colors.white,
          hover: colors.sky[700],
        },
        destructive: {
          DEFAULT: fromVariable('destructive'),
          foreground: fromVariable('destructive-foreground'),
        },
        accent: {
          DEFAULT: colors.amber[500],
          foreground: colors.white,
        },
        card: {
          DEFAULT: colors.slate[50],
          foreground: colors.slate[800],
        },
      },
    },
    screens: {
      xs: '475px',
      ...defaultTheme.screens,
    },
    fontFamily: {
      roboto: ['Roboto', ...defaultTheme.fontFamily.sans],
    },
    keyframes: {
      shimmer: {
        '100%': {
          transform: 'translateX(100%)',
        },
      },
    },
  },
  plugins: [],
}
export default config
```

### Step 2: Update Global CSS
**File:** `apps/web/src/styles/globals.css`

```css
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap");
@import "tailwindcss";

@theme {
  /* Enhanced Blue Palette */
  --color-slate-50: #f8fafc;
  --color-slate-100: #f1f5f9;
  --color-slate-200: #e2e8f0;
  --color-slate-300: #cbd5e1;
  --color-slate-600: #475569;
  --color-slate-800: #1e293b;
  --color-slate-900: #0f172a;

  --color-blue-700: #1d4ed8;
  --color-blue-800: #1e40af;
  --color-sky-600: #0284c7;
  --color-sky-700: #0369a1;
  --color-amber-500: #f59e0b;
  --color-red-700: #b91c1c;

  /* Semantic Colors */
  --color-border: var(--color-slate-300);
  --color-input: var(--color-slate-300);
  --color-ring: var(--color-blue-700);
  --color-background: #ffffff;
  --color-foreground: var(--color-slate-900);
  --color-primary: var(--color-blue-700);
  --color-primary-foreground: #ffffff;
  --color-primary-hover: var(--color-blue-800);
  --color-secondary: var(--color-sky-600);
  --color-secondary-foreground: #ffffff;
  --color-secondary-hover: var(--color-sky-700);
  --color-card: var(--color-slate-50);
  --color-card-foreground: var(--color-slate-800);
  --color-accent: var(--color-amber-500);
  --color-accent-foreground: #ffffff;

  /* Breakpoints */
  --breakpoint-xs: 475px;

  /* Font families */
  --font-family-roboto: "Roboto", ui-sans-serif, system-ui, sans-serif;
}

:root {
  --background: 0 0% 100%;
  --foreground: 222 47% 11%;
  --card: 210 40% 98%;
  --card-foreground: 222 47% 18%;
  --popover: 0 0% 100%;
  --popover-foreground: 222 47% 11%;
  --primary: 217 91% 48%;
  --primary-foreground: 0 0% 100%;
  --secondary: 199 89% 39%;
  --secondary-foreground: 0 0% 100%;
  --muted: 210 40% 96%;
  --muted-foreground: 215 16% 47%;
  --accent: 38 92% 50%;
  --accent-foreground: 0 0% 100%;
  --destructive: 0 72% 38%;
  --destructive-foreground: 0 0% 98%;
  --radius: 0.5rem;
}

.dark {
  --background: 222 84% 5%;
  --foreground: 210 40% 98%;
  --card: 222 47% 11%;
  --card-foreground: 210 40% 98%;
  --popover: 222 84% 3%;
  --popover-foreground: 210 40% 98%;
  --primary: 217 91% 60%;
  --primary-foreground: 0 0% 100%;
  --secondary: 199 95% 57%;
  --secondary-foreground: 0 0% 100%;
  --muted: 222 47% 15%;
  --muted-foreground: 215 20% 65%;
  --accent: 38 92% 55%;
  --accent-foreground: 0 0% 100%;
  --destructive: 0 72% 38%;
  --destructive-foreground: 0 0% 98%;
}

/* Component and utility layers remain the same as Option 1 */
@layer components {
  .nav-list-ul {
    @apply text-primary-foreground flex flex-col items-center md:h-full md:flex-row md:gap-2;
  }

  .nav-list-dropdown {
    @apply md:absolute md:top-[55px] md:-left-0 md:shadow-md rounded md:bg-primary md:w-32 md:flex md:flex-col gap-2 transition-all duration-200 ease-in-out px-3 md:p-1;
  }

  .nav-list-dropdown-item {
    @apply md:list-none transition-colors duration-200 ease-in-out;
  }

  .nav-list-item {
    @apply relative size-full px-2 py-3 last:border-0 md:flex md:items-center md:border-0 border-b-[1px] border-border md:p-0 text-base font-normal;
  }

  .nav {
    @apply size-full z-20 fixed bg-primary overflow-hidden top-[50px] left-0 flex flex-col max-h-0 transition-[max-height] duration-500 ease-out md:max-h-none md:top-0 md:static md:bg-transparent md:overflow-visible md:flex-row-reverse md:justify-between [&_search]:border-b-[1px] [&_search]:border-border md:[&_search]:border-none;
  }
}

@layer utilities {
  .shimmer {
    @apply before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent;
  }
}

/* Hamburger menu styles remain the same */
.hamb {
  cursor: pointer;
  float: right;
  padding: 20px;
}

.hamb-line {
  background: white;
  display: block;
  height: 2px;
  position: relative;
  width: 24px;
}

.hamb-line::before,
.hamb-line::after {
  background: white;
  content: "";
  display: block;
  height: 100%;
  position: absolute;
  transition: all 0.2s ease-out;
  width: 100%;
}

.hamb-line::before {
  top: 5px;
}

.hamb-line::after {
  top: -5px;
}

.side-menu {
  display: none;
}

.side-menu:checked ~ nav {
  max-height: 350px;
}

.side-menu:checked ~ .hamb .hamb-line {
  background: transparent;
}

.side-menu:checked ~ .hamb .hamb-line::before {
  transform: rotate(-45deg);
  top: 0;
}

.side-menu:checked ~ .hamb .hamb-line::after {
  transform: rotate(45deg);
  top: 0;
}

@media (min-width: 768px) {
  .hamb {
    display: none;
  }
}
```

### Steps 3-5: Component Updates
Button and Card components use the same code as Option 1, since they reference semantic color names (`primary`, `secondary`, etc.) which are defined differently in each theme.

---

## Migration Checklist

### Before You Start
- [ ] Backup current `tailwind.config.ts` and `globals.css`
- [ ] Run `pnpm run build` to ensure current code compiles
- [ ] Create a new git branch: `git checkout -b feat/color-system-update`

### Implementation Steps
1. [ ] Choose Option 1 or Option 2
2. [ ] Update `apps/web/tailwind.config.ts`
3. [ ] Update `apps/web/src/styles/globals.css`
4. [ ] Update `apps/web/src/ui/components/button.tsx`
5. [ ] Update `apps/web/src/ui/components/card.tsx`
6. [ ] Search and replace any hardcoded `rhino-*` classes:
   ```bash
   # Find all rhino references
   grep -r "rhino-" apps/web/src --include="*.tsx" --include="*.ts"
   ```
7. [ ] Update star rating colors from `yellow-*` to `amber-500`
8. [ ] Test the application: `pnpm run dev`
9. [ ] Check contrast with browser DevTools (Lighthouse accessibility audit)
10. [ ] Run linting: `pnpm run lint`
11. [ ] Build for production: `pnpm run build`
12. [ ] Commit changes with conventional commit message

### Post-Implementation
- [ ] Test dark mode toggle (if implemented)
- [ ] Verify all button variants render correctly
- [ ] Check card hover states
- [ ] Validate navigation colors
- [ ] Run full accessibility audit

---

## Quick Find & Replace

### Removing Rhino References
```bash
# Find all files with rhino classes
grep -rl "rhino-" apps/web/src

# Common replacements:
# rhino-50 → gray-50 (Option 1) or slate-50 (Option 2)
# rhino-100 → white (both options)
# rhino-700 → primary-hover
# rhino-800 → primary
# rhino-950 → foreground
```

### Testing Commands
```bash
# Development
pnpm run dev

# Type checking
pnpm run typecheck:web

# Linting
pnpm run lint

# Build
pnpm run build:web
```
