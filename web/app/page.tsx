// Copyright 2024 Pejman Ghorbanzade

import DarkModeButton from '@/components/DarkModeButton';
import NavBar from '@/components/NavBar';
import TalksPageContent from '@/components/TalksPageContent';
import { getTalks } from '@/components/utils';

export default async function Home() {
  const talks = await getTalks();
  return (
    <main>
      <div className="mx-auto max-w-screen-lg space-y-4">
        <NavBar />
        <div className="relative min-h-24 rounded-lg border-slate-300 bg-white p-6 dark:border-slate-700 dark:bg-gradient-to-br dark:from-black dark:to-slate-900 border">
          <div className="prose dark:prose-invert">
            <div className="text-xl">Talks</div>
            <div>Pejman Ghorbanzade</div>
          </div>
          <div className="absolute right-6 top-10">
            <DarkModeButton />
          </div>
        </div>
        <TalksPageContent talks={talks} />
      </div>
    </main>
  );
}
