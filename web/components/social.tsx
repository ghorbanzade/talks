// Copyright 2023 Pejman Ghorbanzade

import type { IconType } from 'react-icons';
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiTwitter,
  FiVideo
} from 'react-icons/fi';

type SocialLinkType = {
  icon: IconType;
  title: string;
  link: string;
};

function SocialLink({ item }: { item: SocialLinkType }) {
  const Icon = item.icon;
  return (
    <li title={item.title}>
      <a href={item.link} target="_blank">
        <Icon className="text-gray-300 hover:text-gray-500" size="1.5em" />
      </a>
    </li>
  );
}

export default function SocialLinks() {
  const links: SocialLinkType[] = [
    {
      icon: FiTwitter,
      title: 'Find me on Twitter',
      link: 'https://twitter.com/heypejman'
    },
    {
      icon: FiGithub,
      title: 'Find me on GitHub',
      link: 'https://github.com/ghorbanzade'
    },
    {
      icon: FiLinkedin,
      title: 'Find me on LinkedIn',
      link: 'https://linkedin.com/in/ghorbanzade'
    },
    {
      icon: FiMail,
      title: 'Send me an email',
      link: 'mailto:pejman@ghorbanzade.io'
    },
    {
      icon: FiVideo,
      title: 'Schedule a Meeting',
      link: 'https://calendly.com/ghorbanzade/30min'
    }
  ];
  return (
    <ul className="mx-auto flex w-1/2 justify-around py-3 md:w-full">
      {links.map((item, index) => (
        <SocialLink key={index} item={item} />
      ))}
    </ul>
  );
}
