import Tabs from '@web/app/ui/shared/Tabs'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex w-full flex-col py-2 items-center">{children}</div>
  )
}
