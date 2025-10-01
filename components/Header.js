import Link from "next/link";
export default function Header(){
  return (<header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-stone-950/70 border-b border-stone-900">
    <div className="container-outer flex items-center justify-between py-3">
      <Link href="/" className="flex items-center gap-2 font-bold"><span className="text-2xl">🧑‍💻</span><span>MyPortfolio</span></Link>
      <nav aria-label="Primary" className="hidden md:flex items-center gap-4">
        <Link className="btn-outline" href="/about">About</Link>
        <Link className="btn-outline" href="/portfolio">Portfolio</Link>
        <Link className="btn-outline" href="/services">Services</Link>
        <Link className="btn" href="/contact">Contact</Link>
      </nav>
    </div>
  </header>);
}