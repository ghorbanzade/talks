// Copyright 2024 Pejman Ghorbanzade

import { Talk } from '@/components/types';

export async function getTalks(): Promise<Talk[]> {
  const content: Talk[] = await fetch(
    'https://raw.githubusercontent.com/ghorbanzade/talks/main/web/talks.json'
  ).then((res) => res.json());
  return content
    .filter((v) => !v.tags.includes('hide'))
    .sort((a, b) => {
      const sa = a.tags.includes('highlight');
      const sb = b.tags.includes('highlight');
      return sa !== sb
        ? Number(sb) - Number(sa)
        : +new Date(b.date!) - +new Date(a.date!);
    });
}
