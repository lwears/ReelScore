import Tabs from '@web/app/ui/shared/tabs'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex w-full items-center flex-col">
      <Tabs />
      <div className="">{children}</div>
    </div>
  )
}
