export default function Footer(){
  return (<footer className="border-t border-stone-900 mt-20">
    <div className="container-outer py-8 flex items-center justify-between flex-wrap gap-4">
      <p className="text-sm text-stone-400">© 2025 Your Name. All rights reserved.</p>
      <nav className="flex gap-4 text-sm">
        <a href="https://github.com/username" className="text-stone-400 hover:text-stone-200">GitHub</a>
        <a href="https://linkedin.com/in/username" className="text-stone-400 hover:text-stone-200">LinkedIn</a>
        <a href="mailto:you@example.com" className="text-stone-400 hover:text-stone-200">Email</a>
      </nav>
    </div>
  </footer>);
}