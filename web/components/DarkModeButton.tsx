// Copyright 2023 Pejman Ghorbanzade
'use client'

import { useEffect, useState } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';

export default function DarkModeButton() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleClass = (darkMode: boolean) => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    setDarkMode(darkMode);
  };

  useEffect(() => {
    const theme = findInitialTheme();
    toggleClass(theme === 'dark');
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', (e) => toggleClass(e.matches));
    return () =>
      window
        .matchMedia('(prefers-color-scheme: dark)')
        .removeEventListener('change', () => {});
  }, []);

  const toggleDarkMode = () => {
    localStorage.setItem(
      'theme',
      JSON.stringify({
        mode: darkMode ? 'light' : 'dark',
        time: new Date()
      })
    );
    toggleClass(!darkMode);
  };

  const Icon = darkMode ? FiSun : FiMoon;
  return (
    <Icon
      size="1.5em"
      className="cursor-pointer text-slate-200 transition ease-in-out hover:text-slate-300 dark:text-slate-700 dark:hover:text-slate-500"
      title={`Switch to ${darkMode ? 'light mode' : 'dark mode'}`}
      onClick={toggleDarkMode}
    />
  );
}

function findInitialTheme() {
  const store = localStorage.getItem('theme');
  if (store) {
    const { mode, time }: { mode: 'light' | 'dark'; time: Date } =
      JSON.parse(store);
    const expirationTime = new Date(time);
    expirationTime.setMinutes(expirationTime.getMinutes() + 30);
    if (new Date() < expirationTime) {
      return mode;
    }
    localStorage.removeItem('theme');
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
}
