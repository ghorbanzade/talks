// Copyright 2024 Pejman Ghorbanzade

import DarkModeButton from '@/components/DarkModeButton';
import NavBar from '@/components/NavBar';
import TalkPageContent from '@/components/TalkPageContent';
import { getTalks } from '@/components/utils';

export async function generateStaticParams() {
  return (await getTalks()).map((talk) => ({ slug: talk.slug }));
}

export default async function Home({ params }: { params: { slug: string } }) {
  const talk = (await getTalks()).filter((v) => v.slug === params.slug)[0];
  return (
    <main>
      <div className="mx-auto max-w-screen-lg space-y-4 py-4">
        <NavBar />
        <div className="relative min-h-24 rounded-lg border-slate-300 bg-white p-6 dark:border-slate-700 dark:bg-gradient-to-br dark:from-black dark:to-slate-900 border">
          <div className="prose dark:prose-invert">
            <div className="text-2xl">Public Talks</div>
            <div>Pejman Ghorbanzade</div>
          </div>
          <div className="absolute right-6 top-10">
            <DarkModeButton />
          </div>
        </div>
        <TalkPageContent talk={talk} />
      </div>
    </main>
  );
}
