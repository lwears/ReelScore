export default function Layout({
  children,
  modal,
}: {
  children: React.ReactNode
  modal: React.ReactNode
}) {
  return (
    <div className="flex w-full flex-col items-center p-4">
      {children}
      {modal}
    </div>
  )
}
