// Copyright 2024 Pejman Ghorbanzade

import DarkModeButton from '@/components/darkMode';
import ListView from '@/components/ListView';
import type { Talk } from '@/components/types';

async function getTalks(): Promise<Talk[]> {
  const content = await fetch(
    'https://raw.githubusercontent.com/ghorbanzade/talks/main/web/talks.json'
  );
  const raw = JSON.parse(await content.text()) as Talk[];
  return raw
    .filter((v) => !v.tags.includes('hide'))
    .sort((a, b) => {
      const aScore = a.tags.includes('highlight');
      const bScore = b.tags.includes('highlight');
      return aScore !== bScore
        ? Number(bScore) - Number(aScore)
        : +new Date(b.date!) - +new Date(a.date!);
    });
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
