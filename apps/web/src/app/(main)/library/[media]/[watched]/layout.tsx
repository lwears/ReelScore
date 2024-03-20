import Tabs from '@web/ui/library/tabs'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex w-full flex-col items-center py-2">
      <Tabs />
      {children}
    </div>
  )
}
