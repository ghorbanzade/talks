// Copyright 2024 Pejman Ghorbanzade

import { format } from 'date-fns';

import DarkModeButton from '@/components/darkMode';

type Talk = Partial<{
  date: string;
  location: string;
  conference: string;
  duration: number;
  tags: string[];
  title: string;
  links: Partial<
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
}>;

async function getTalks(): Promise<Talk[]> {
  const content = await fetch(
    'https://raw.githubusercontent.com/ghorbanzade/talks/main/web/talks.json'
  );
  const raw = JSON.parse(await content.text()) as Talk[];
  const highlighted = raw.filter((v) => v.tags?.includes('highlighted'));
  return highlighted;
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
              <div className="">
                {talk.conference}, {talk.location}
              </div>
              <div className="text-xl">{talk.title}</div>
            </div>
            <div className="flex items-center">
              <time dateTime={talk.date}>
                {format(new Date(talk.date!), 'LLL yyyy')}
              </time>
            </div>
          </div>
          <div className="flex space-x-6">
            {talk.links?.registration && (
              <a href={talk.links.registration}>Registration</a>
            )}
            {talk.links?.youtube && <a href={talk.links.youtube}>Recording</a>}
            {talk.links?.pdf && talk.links?.html && (
              <div>
                Slides (<a href={talk.links.html}>HTML</a>,{' '}
                <a href={talk.links.pdf}>PDF</a>)
              </div>
            )}
            {talk.links?.repository && (
              <a href={talk.links.repository}>Repository</a>
            )}
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
          <div className="absolute right-8 top-8">
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
