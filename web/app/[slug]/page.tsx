// Copyright 2024 Pejman Ghorbanzade

import { format } from 'date-fns';
import Image from 'next/image';
import Markdown from 'markdown-to-jsx';

import DarkModeButton from '@/components/DarkModeButton';
import NavBar from '@/components/NavBar';
import { Talk } from '@/components/types';
import { getTalks } from '@/components/utils';

export async function generateStaticParams() {
  return (await getTalks()).map((talk) => ({ slug: talk.slug }));
}

export default async function Home({ params }: { params: { slug: string } }) {
  const talk = (await getTalks()).filter((v) => v.slug === params.slug)[0];
  return (
    <main>
      <div className="mx-auto max-w-screen-lg space-y-4">
        <NavBar />
        <div className="items-center flex justify-between min-h-24 rounded-lg border-slate-300 bg-white p-6 dark:border-slate-700 dark:bg-gradient-to-br dark:from-black dark:to-slate-900 border">
          <div className="text-slate-800 dark:text-slate-200 space-y-2">
            <div>
              <span>{talk.conference}</span>
              {talk.location && <span>, {talk.location}</span>}
            </div>
            <h2 className="text-2xl font-medium">{talk.title}</h2>
            <div>
              <time dateTime={talk.date}>
                {format(new Date(talk.date!), 'LLL yyyy')}
              </time>
            </div>
          </div>
          <div>
            <DarkModeButton />
          </div>
        </div>
        <div className="space-y-4">
          <div className="rounded-lg border-slate-300 bg-white p-6 dark:border-slate-700 dark:bg-gradient-to-br dark:from-black dark:to-slate-900 border">
            <Links talk={talk} />
          </div>
          {!talk.links.youtube && talk.links.cover && (
            <div className="rounded-lg border-slate-300 bg-white p-6 dark:border-slate-700 dark:bg-gradient-to-br dark:from-black dark:to-slate-900 border">
              <Cover link={talk.links.cover} />
            </div>
          )}
          {talk.links.youtube && (
            <div
              id="recording"
              className="space-y-4 rounded-lg border-slate-300 bg-white p-6 dark:border-slate-700 dark:bg-gradient-to-br dark:from-black dark:to-slate-900 border"
            >
              <h4 className="text-xl text-slate-700 dark:text-slate-300">
                Recording
              </h4>
              <YouTube link={talk.links.youtube} />
            </div>
          )}
          {talk.abstract && !talk.tags.includes('hide-abstract') && (
            <div
              id="abstract"
              className="space-y-4 rounded-lg border-slate-300 bg-white p-6 dark:border-slate-700 dark:bg-gradient-to-br dark:from-black dark:to-slate-900 border"
            >
              <h4 className="text-xl text-slate-700 dark:text-slate-300">
                Abstract
              </h4>
              <Markdown className="wsl-mark prose prose-base prose-slate min-w-full dark:prose-invert">
                {talk.abstract}
              </Markdown>
            </div>
          )}
        </div>
      </div>
    </main>
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
      {talk.links.youtube && <a href="#recording">Recording</a>}
      {talk.abstract && !talk.tags.includes('hide-abstract') && (
        <a href="#abstract">Abstract</a>
      )}
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
