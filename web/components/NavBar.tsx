// Copyright 2024 Pejman Ghorbanzade

export default function NavBar() {
  return (
    <nav className="space-x-2">
      <a
        className="rounded-lg p-2 text-slate-600 dark:text-slate-400 dark:hover:bg-slate-800 font-medium hover:bg-slate-200"
        href="https://pejman.dev"
      >
        Home
      </a>
      <a
        className="rounded-lg p-2 text-slate-600 dark:text-slate-400 dark:bg-slate-800 font-medium bg-slate-200"
        href="https://pejman.dev/talks"
      >
        Talks
      </a>
    </nav>
  );
}
