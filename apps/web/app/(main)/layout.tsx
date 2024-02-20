import Navbar from '@web/app/ui/main/Navbar'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-rows-[50px_1fr] w-screen h-screen overflow-hidden">
      <Navbar />
      <main className="bg-base-primary-bg overflow-y-scroll">{children}</main>
    </div>
  )
}
