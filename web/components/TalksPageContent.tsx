// Copyright 2024 Pejman Ghorbanzade
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ListEntry } from '@/components/ListEntry';
import ViewToggleButton from '@/components/ViewToggleButton';
import type { Talk, View } from '@/components/types';

export default function TalksPageContent({ talks }: { talks: Talk[] }) {
  const [view, setView] = useState<View>('list');
  const ViewComponent = view === 'list' ? ListView : GridView;
  return (
    <>
      <div className="flex justify-end">
        <ViewToggleButton view={view} setView={setView} />
      </div>
      <div>
        <ViewComponent talks={talks} />
      </div>
    </>
  );
}

function GridView({ talks }: { talks: Talk[] }) {
  return <div>Hello</div>;
}

function ListView({ talks }: { talks: Talk[] }) {
  return (
    <div className="rounded-lg border-slate-300 bg-white dark:border-slate-700 dark:bg-gradient-to-br dark:from-black dark:to-slate-900 border divide-y divide-slate-300 dark:divide-slate-800">
      {talks.map((talk, index) => (
        <Link
          key={index}
          className="flex decoration-transparent cursor-pointer"
          href={`/${talk.slug}`}
        >
          <ListEntry
            talk={talk}
            className="hover:dark:bg-gradient-to-br hover:dark:from-black hover:dark:to-slate-900 hover:bg-slate-100"
          />
        </Link>
      ))}
    </div>
  );
}
