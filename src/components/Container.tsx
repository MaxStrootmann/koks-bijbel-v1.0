import Link from 'next/link'

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="container">
      <header className="header flex justify-between">
        <Link className="font-serif py-4 px-1 font-bold text-xl" href="/">
          📖 BIJBEL 📖
        </Link>
        <Link className="font-serif py-4 px-1 font-bold text-lg" href="/studio">
          🖋️ STUDIO 🖋️
        </Link>
      </header>
      <div className="p-4"></div>
      <main>{children}</main>
    </div>
  )
}
