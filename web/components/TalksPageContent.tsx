// Copyright 2024 Pejman Ghorbanzade
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ListEntry } from '@/components/ListEntry';
import ViewToggleButton from '@/components/ViewToggleButton';
import type { Talk, View } from '@/components/types';
import { format } from 'date-fns';

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
  return (
    <div className="grid md:grid-cols-2 gap-4">
      {talks.map((talk) => (
        <Link
          key={talk.slug}
          className="decoration-transparent cursor-pointer rounded-lg border-slate-300 dark:border-slate-700 bg-white dark:bg-gradient-to-br dark:from-black dark:to-slate-900 border p-8 hover:dark:bg-gradient-to-br hover:dark:from-slate-900 hover:dark:to-black hover:bg-slate-100"
          href={`/${talk.slug}`}
        >
          <GridEntry talk={talk} />
        </Link>
      ))}
    </div>
  );
}

function GridEntry({ talk }: { talk: Talk }) {
  return (
    <div className="text-slate-800 dark:text-slate-200 space-y-2">
      <div>
        <span>{talk.conference}</span>
        {talk.location && <span>, {talk.location}</span>}
      </div>
      <div className="text-xl font-medium">{talk.title}</div>
      <div>
        <time dateTime={talk.date}>
          {format(new Date(talk.date!), 'LLL yyyy')}
        </time>
      </div>
    </div>
  );
}

function ListView({ talks }: { talks: Talk[] }) {
  return (
    <div className="rounded-lg border-slate-300 bg-white dark:border-slate-700 dark:bg-gradient-to-br dark:from-black dark:to-slate-900 border divide-y divide-slate-300 dark:divide-slate-800">
      {talks.map((talk) => (
        <Link
          key={talk.slug}
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
