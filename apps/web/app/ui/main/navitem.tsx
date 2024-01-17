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
        className=" gap-2 rounded-md dark:hover:bg-white/10 md:px-6 md:py-4 flex w-full items-center text-start leading-tight outline-none transition-all"
      >
        <div className="">
          <Icon className="md:h-5 md:w-5 w-8 h-8 text-slate-200" />
        </div>
        <p className="hidden md:block">{text}</p>
      </div>
    </Link>
  )
}
