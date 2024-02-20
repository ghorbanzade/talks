// Copyright 2024 Pejman Ghorbanzade

import { format } from 'date-fns';
import type { Talk } from '@/components/types';

export function ListEntry({
  talk,
  className
}: {
  talk: Talk;
  className?: string;
}) {
  return (
    <div
      className={`flex justify-between min-w-full p-6 text-slate-700 dark:text-slate-300 ${className}`}
    >
      <div className="flex-grow">
        <div>
          <span>{talk.conference}</span>
          {talk.location && <span>, {talk.location}</span>}
        </div>
        <div className="text-xl">{talk.title}</div>
      </div>
      <div className="flex items-center">
        <time dateTime={talk.date}>
          {format(new Date(talk.date!), 'LLL yyyy')}
        </time>
      </div>
    </div>
  );
}
