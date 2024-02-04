import Navbar from '@web/app/ui/main/Navbar'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-rows-[50px_1fr] w-screen h-screen">
      <Navbar />
      <main className="dark:bg-zinc-700">{children}</main>
    </div>
  )
}
