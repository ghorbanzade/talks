// Copyright 2024 Pejman Ghorbanzade
'use client';

import { useState } from 'react';
import { format } from 'date-fns';
import { FiStar } from 'react-icons/fi';
import Markdown from 'markdown-to-jsx';
import type { Talk } from '@/components/types';

export default function ListView({ talks }: { talks: Talk[] }) {
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
          <div className="flex items-center space-x-2">
            <div>
              <span className="font-semibold">{talk.conference}</span>
              {talk.location && (
                <span className="font-light">, {talk.location}</span>
              )}
            </div>
            {talk.tags.includes('highlight') && (
              <FiStar className="text-slate-300" />
            )}
          </div>
          <div className="text-xl">{talk.title}</div>
          <div className="flex space-x-6">
            {talk.abstract && (
              <a onClick={() => setAbstractVisible(!isAbstractVisible)}>
                Abstract
              </a>
            )}
            {talk.links?.registration && (
              <a href={talk.links.registration} target="_blank">
                Registration
              </a>
            )}
            {talk.links?.youtube && (
              <a href={talk.links.youtube} target="_blank">
                Recording
              </a>
            )}
            <SlidesLink links={talk.links} />
            {talk.links?.repository && (
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
          <div className="font-semibold">Abstract</div>
          <Markdown className="wsl-mark prose prose-base prose-slate min-w-full dark:prose-invert">
            {talk.abstract}
          </Markdown>
        </div>
      )}
    </div>
  );
}

function SlidesLink({ links }: { links: Talk['links'] }) {
  return links.pdf || links.html ? (
    <div>
      <span>Slides (</span>
      {links.html && <a href={links.html}>HTML</a>}
      {links.html && links.pdf && <span>, </span>}
      {links.pdf && <a href={links.pdf}>PDF</a>}
      <span>)</span>
    </div>
  ) : (
    <></>
  );
}
