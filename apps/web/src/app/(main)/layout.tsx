import Navbar from '../../ui/components/Navbar'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid h-screen w-screen grid-rows-[50px_1fr] overflow-hidden">
      <Navbar />
      <main className="bg-background overflow-y-scroll">{children}</main>
    </div>
  )
}
