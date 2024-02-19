// Copyright 2024 Pejman Ghorbanzade

import { format } from 'date-fns';
import { FiStar } from 'react-icons/fi';
import DarkModeButton from '@/components/darkMode';

type Links = Partial<
  Record<
    | 'registration'
    | 'pdf'
    | 'html'
    | 'youtube'
    | 'cover'
    | 'coverImage'
    | 'repository',
    string
  >
>;

type Talk = {
  date: string;
  location?: string;
  conference: string;
  duration: number;
  tags: string[];
  title: string;
  links: Links;
};

async function getTalks(): Promise<Talk[]> {
  const content = await fetch(
    'https://raw.githubusercontent.com/ghorbanzade/talks/main/web/talks.json'
  );
  const raw = JSON.parse(await content.text()) as Talk[];
  return raw.sort((a, b) => {
    const aScore = a.tags.includes('highlighted');
    const bScore = b.tags.includes('highlighted');
    return aScore !== bScore
      ? Number(bScore) - Number(aScore)
      : +new Date(b.date!) - +new Date(a.date!);
  });
}

function SlidesLink({ links }: { links: Links }) {
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

function ListView({ talks }: { talks: Talk[] }) {
  return (
    <div className="rounded-lg border-slate-300 bg-white px-6 dark:border-slate-700 dark:bg-gradient-to-br dark:from-black dark:to-slate-900 border divide-y divide-slate-800">
      {talks.map((talk, index) => (
        <div
          key={index}
          className="min-h-24 prose prose-base prose-slate min-w-full dark:prose-invert py-6"
        >
          <div className="flex justify-between">
            <div>
              <div className="flex items-center space-x-2">
                <div>
                  <span className="font-semibold">{talk.conference}</span>
                  {talk.location && (
                    <span className="font-light">, {talk.location}</span>
                  )}
                </div>
                {talk.tags.includes('highlighted') ? (
                  <FiStar className="text-slate-300" />
                ) : (
                  <></>
                )}
              </div>
              <div className="text-xl">{talk.title}</div>
              <div className="flex space-x-6">
                {talk.links?.registration && (
                  <a href={talk.links.registration}>Registration</a>
                )}
                {talk.links?.youtube && (
                  <a href={talk.links.youtube}>Recording</a>
                )}
                <SlidesLink links={talk.links} />
                {talk.links?.repository && (
                  <a href={talk.links.repository}>Repository</a>
                )}
              </div>
            </div>
            <div className="flex items-center">
              <time dateTime={talk.date}>
                {format(new Date(talk.date!), 'LLL yyyy')}
              </time>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default async function Home() {
  const talks = await getTalks();
  return (
    <main>
      <div className="mx-auto max-w-screen-lg space-y-4 py-4">
        <div className="relative min-h-24 rounded-lg border-slate-300 bg-white p-6 dark:border-slate-700 dark:bg-gradient-to-br dark:from-black dark:to-slate-900 border">
          <div className="prose dark:prose-invert">
            <div className="text-2xl">Public Talks</div>
            <div>Pejman Ghorbanzade</div>
          </div>
          <div className="absolute right-6 top-10">
            <DarkModeButton />
          </div>
        </div>
        <div>
          <ListView talks={talks} />
        </div>
      </div>
    </main>
  );
}
