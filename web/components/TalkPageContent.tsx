// Copyright 2024 Pejman Ghorbanzade

import Image from 'next/image';
import Markdown from 'markdown-to-jsx';
import { ListEntry } from '@/components/ListEntry';
import { Talk } from '@/components/types';

export default function TalkPageContent({ talk }: { talk: Talk }) {
  return (
    <div className="space-y-4">
      <ListEntry
        talk={talk}
        className="rounded-lg border-slate-300 bg-white dark:border-slate-700 dark:bg-gradient-to-br dark:from-black dark:to-slate-900 border"
      />
      <div className="rounded-lg border-slate-300 bg-white p-6 dark:border-slate-700 dark:bg-gradient-to-br dark:from-black dark:to-slate-900 border">
        <Links talk={talk} />
      </div>
      {!talk.links.youtube && talk.links.cover && (
        <div className="rounded-lg border-slate-300 bg-white p-6 dark:border-slate-700 dark:bg-gradient-to-br dark:from-black dark:to-slate-900 border">
          <Cover link={talk.links.cover} />
        </div>
      )}
      {talk.links.youtube && (
        <div className="rounded-lg border-slate-300 bg-white p-6 dark:border-slate-700 dark:bg-gradient-to-br dark:from-black dark:to-slate-900 border">
          <YouTube link={talk.links.youtube} />
        </div>
      )}
      {talk.abstract && !talk.tags.includes('hide-abstract') && (
        <div className="rounded-lg border-slate-300 bg-white p-6 dark:border-slate-700 dark:bg-gradient-to-br dark:from-black dark:to-slate-900 border">
          <div className="text-xl text-slate-700 dark:text-slate-300">
            Abstract
          </div>
          <Markdown className="wsl-mark prose prose-base prose-slate min-w-full dark:prose-invert">
            {talk.abstract}
          </Markdown>
        </div>
      )}
    </div>
  );
}

function Cover({ link }: { link: string }) {
  return <Image src={link} width="1200" height="675" alt="Image" />;
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

function Links({ talk }: { talk: Talk }) {
  return (
    <div className="flex space-x-6 prose prose-base prose-slate dark:prose-invert">
      {/* {talk.abstract && !talk.tags.includes('hide-abstract') && <a>Abstract</a>}
      {talk.links.youtube && (
        <a href={talk.links.youtube} target="_blank">
          Recording
        </a>
      )} */}
      {talk.links.registration && (
        <a href={talk.links.registration} target="_blank">
          Registration
        </a>
      )}
      {(talk.links.pdf || talk.links.html) && (
        <div>
          <span>Slides (</span>
          {talk.links.html && (
            <a href={talk.links.html} target="_blank">
              HTML
            </a>
          )}
          {talk.links.html && talk.links.pdf && <span>, </span>}
          {talk.links.pdf && (
            <a href={talk.links.pdf} target="_blank">
              PDF
            </a>
          )}
          <span>)</span>
        </div>
      )}
      {talk.links.repository && (
        <a href={talk.links.repository} target="_blank">
          Repository
        </a>
      )}
    </div>
  );
}
