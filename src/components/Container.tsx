import Link from 'next/link'

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="container">
      <header className="header flex justify-between">
        <Link className="font-serif p-1 font-bold text-xl" href="/">
          📖 BIJBEL 📖
        </Link>
        <Link className="font-serif p-1 font-bold text-lg" href="/studio">
          🖋️ STUDIO 🖋️
        </Link>
      </header>
      <main>{children}</main>
    </div>
  )
}
