import Link from 'next/link'

interface Props {
  Icon: React.ForwardRefExoticComponent<
    Omit<React.SVGProps<SVGSVGElement>, 'ref'> & {
      title?: string | undefined
      titleId?: string | undefined
    } & React.RefAttributes<SVGSVGElement>
  >
  text: string
  location: string
}

export default function NavItem({ Icon, text, location }: Props) {
  return (
    <Link href={location}>
      <div
        role="button"
        tabIndex={0}
        className="flex w-full items-center gap-2 rounded-md text-start leading-tight outline-none transition-all md:px-6 md:py-4 dark:hover:bg-white/10"
      >
        <div>
          <Icon className="size-8 md:size-5" />
        </div>
        <p className="hidden md:block">{text}</p>
      </div>
    </Link>
  )
}
