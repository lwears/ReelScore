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
        className="flex w-full items-center text-start leading-tight outline-none transition-all"
      >
        <div className="mr-4 grid place-items-center">
          <Icon className="h-5 w-5 text-slate-200" />
        </div>
        {text}
      </div>
    </Link>
  )
}
