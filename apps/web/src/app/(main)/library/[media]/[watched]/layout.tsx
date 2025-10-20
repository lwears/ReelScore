import Tabs from '@web/ui/library/tabs'

export default function Layout({
  children,
  modal,
}: {
  children: React.ReactNode
  modal: React.ReactNode
}) {
  return (
    <div className="flex w-full flex-col items-center py-2">
      <Tabs />
      {children}
      {modal}
    </div>
  )
}
