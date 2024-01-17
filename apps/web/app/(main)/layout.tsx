import SideNav from '../ui/main/sidenav'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen w-screen flex-col md:grow md:flex-row">
      <SideNav />
      <div className="flex grow justify-center p-2 dark:bg-zinc-700">
        {children}
      </div>
    </div>
  )
}
