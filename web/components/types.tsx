// Copyright 2024 Pejman Ghorbanzade

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

export type Talk = {
  date: string;
  location?: string;
  conference: string;
  duration: number;
  tags: string[];
  title: string;
  abstract?: string;
  links: Links;
};
