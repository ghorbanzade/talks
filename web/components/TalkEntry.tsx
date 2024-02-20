// Copyright 2024 Pejman Ghorbanzade

import { Talk } from '@/components/types';
import { format } from 'date-fns';
import Markdown from 'markdown-to-jsx';

export default function TalkEntry({ talk }: { talk: Talk }) {
  return (
    <div className="min-h-24 prose prose-base prose-slate min-w-full dark:prose-invert py-6 space-y-4">
      <div className="flex justify-between rounded-lg border-slate-300 bg-white p-6 dark:border-slate-700 dark:bg-gradient-to-br dark:from-black dark:to-slate-900 border">
        <div>
          <div>
            <span className="font-semibold">{talk.conference}</span>
            {talk.location && (
              <span className="font-light">, {talk.location}</span>
            )}
          </div>
          <div className="text-xl">{talk.title}</div>
        </div>
        <div className="flex items-center">
          <time dateTime={talk.date}>
            {format(new Date(talk.date!), 'LLL yyyy')}
          </time>
        </div>
      </div>
      <div className="rounded-lg border-slate-300 bg-white p-6 dark:border-slate-700 dark:bg-gradient-to-br dark:from-black dark:to-slate-900 border">
        <Links links={talk.links} />
      </div>
      {talk.links.youtube && (
        <div className="rounded-lg border-slate-300 bg-white p-6 dark:border-slate-700 dark:bg-gradient-to-br dark:from-black dark:to-slate-900 border">
          <YouTube link={talk.links.youtube} />
        </div>
      )}
      {talk.abstract && !talk.tags.includes('hide-abstract') && (
        <div className="rounded-lg border-slate-300 bg-white p-6 dark:border-slate-700 dark:bg-gradient-to-br dark:from-black dark:to-slate-900 border">
          <div className="text-xl">Abstract</div>
          <Markdown className="wsl-mark prose prose-base prose-slate min-w-full dark:prose-invert">
            {talk.abstract}
          </Markdown>
        </div>
      )}
    </div>
  );
}

function YouTube({ link }: { link: string }) {
  return (
    <iframe
      width="100%"
      height="auto"
      style={{ aspectRatio: 16 / 9 }}
      src={`https://youtube.com/embed/${link.slice('https://youtu.be/'.length)}`}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    />
  );
}

function Links({ links }: { links: Talk['links'] }) {
  return (
    <div className="flex space-x-6">
      {links.registration && (
        <a href={links.registration} target="_blank">
          Registration
        </a>
      )}
      {(links.pdf || links.html) && (
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
      )}
      {links.repository && (
        <a href={links.repository} target="_blank">
          Repository
        </a>
      )}
    </div>
  );
}
