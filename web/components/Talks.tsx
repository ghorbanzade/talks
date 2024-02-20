// Copyright 2024 Pejman Ghorbanzade
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { format } from 'date-fns';
import Markdown from 'markdown-to-jsx';
import ViewToggleButton from '@/components/ViewToggleButton';
import type { Talk, View } from '@/components/types';

export default function Talks({ talks }: { talks: Talk[] }) {
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
    <div className="rounded-lg border-slate-300 bg-white px-6 dark:border-slate-700 dark:bg-gradient-to-br dark:from-black dark:to-slate-900 border divide-y divide-slate-300 dark:divide-slate-800">
      {talks.map((talk, index) => (
        <ListEntry key={index} talk={talk} />
      ))}
    </div>
  );
}

function ListEntry({ talk }: { talk: Talk }) {
  const [isAbstractVisible, setAbstractVisible] = useState(false);
  return (
    <div className="min-h-24 prose prose-base prose-slate min-w-full dark:prose-invert py-6">
      <div className="flex justify-between">
        <div>
          <Link className="cursor-pointer" href={`/${talk.slug}`}>
            <span className="font-semibold">{talk.conference}</span>
            {talk.location && (
              <span className="font-light">, {talk.location}</span>
            )}
          </Link>
          <div className="text-xl">{talk.title}</div>
          <div className="flex space-x-6">
            {talk.abstract && !talk.tags.includes('hide-abstract') && (
              <a onClick={() => setAbstractVisible(!isAbstractVisible)}>
                Abstract
              </a>
            )}
            {talk.links.registration && (
              <a href={talk.links.registration} target="_blank">
                Registration
              </a>
            )}
            {talk.links.youtube && (
              <a href={talk.links.youtube} target="_blank">
                Recording
              </a>
            )}
            <SlidesLink links={talk.links} />
            {talk.links.repository && (
              <a href={talk.links.repository} target="_blank">
                Repository
              </a>
            )}
          </div>
        </div>
        <div className="flex items-center">
          <time dateTime={talk.date}>
            {format(new Date(talk.date!), 'LLL yyyy')}
          </time>
        </div>
      </div>
      {talk.abstract && isAbstractVisible && (
        <div className="py-4">
          <Markdown className="wsl-mark prose prose-base prose-slate min-w-full dark:prose-invert">
            {talk.abstract}
          </Markdown>
        </div>
      )}
    </div>
  );
}

function SlidesLink({ links }: { links: Talk['links'] }) {
  return (
    (links.pdf || links.html) && (
      <div>
        <span>Slides (</span>
        {links.html && (
          <a href={links.html} target="_blank">
            HTML
          </a>
        )}
        {links.html && links.pdf && <span>, </span>}
        {links.pdf && (
          <a href={links.pdf} target="_blank">
            PDF
          </a>
        )}
        <span>)</span>
      </div>
    )
  );
}
