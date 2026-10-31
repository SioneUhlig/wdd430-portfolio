import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-slate-900 text-slate-100 border-b border-slate-800 py-4 shadow-md">
      <div className="max-w-4xl mx-auto px-4 flex flex-col items-center gap-2 sm:flex-row sm:justify-between">
        <div id="header-title" className="text-2xl font-bold text-sky-400">Sione Uhlig</div>
        <nav>
          <ul className="flex gap-6">
            <li><Link href="/" className="hover:text-sky-300">Home</Link></li>
            <li><Link href="/about" className="hover:text-sky-300">About</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}