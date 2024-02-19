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
    <div className="flex space-x-2">
      <FiList
        className={view === 'grid' ? 'opacity-10' : ''}
        onClick={() => setView('list')}
      />
      {/* <FiGrid
        className={view === 'list' ? 'opacity-10' : ''}
        onClick={() => setView('grid')}
      /> */}
    </div>
  );
}
