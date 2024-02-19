// Copyright 2024 Pejman Ghorbanzade
'use client';

import { Dispatch } from 'react';
import { FiGrid, FiList } from 'react-icons/fi';
import { type View } from '@/components/types';

export default function ViewToggleButton({
  view,
  setView
}: {
  view: View;
  setView: Dispatch<View>;
}) {
  return (
    <div className="flex dark:bg-slate-800 dark:border-slate-800 bg-slate-200 border-slate-200 border-2 rounded-lg">
      <div
        className={`p-2 rounded-lg transition ease-in-out cursor-pointer ${view === 'grid' ? 'text-slate-300 hover:text-slate-400 dark:text-slate-500 dark:hover:text-slate-400' : 'text-slate-600 bg-slate-100 dark:text-slate-300 dark:bg-slate-900'}`}
        onClick={() => setView('list')}
      >
        <FiList />
      </div>
      <div
        className={`p-2 rounded-lg transition ease-in-out cursor-pointer ${view === 'list' ? 'text-slate-300 hover:text-slate-400 dark:text-slate-500 dark:hover:text-slate-400' : 'text-slate-600 bg-slate-100 dark:text-slate-300 dark:bg-slate-900'}`}
        onClick={() => setView('grid')}
      >
        <FiGrid />
      </div>
    </div>
  );
}
