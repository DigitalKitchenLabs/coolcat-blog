import siteData from 'data/siteData';
import Image from 'next/image';
import { FaGithub, FaTwitter } from 'react-icons/fa';
import ThemeToggler from './ThemeToggle';

const socials = [
  {
    name: 'Twitter',
    href: siteData.twitter,
    icon: FaTwitter
  },
  {
    name: 'GitHub',
    href: siteData.github,
    icon: FaGithub
  }
];

export default function Socials() {
  return (
    <div className="flex justify-center space-x-4 md:order-2">
      {socials.map(item => (
        <a
          key={item.name}
          href={item.href}
          className="w-8 h-8 bg-blue-800 rounded-xl flex items-center justify-center hover:ring-2 ring-catred-500 transition-all duration-300 focus:outline-none"
          target="_blank"
          rel="noreferrer"
        >
          <span className="sr-only">{item.name}</span>
          <item.icon className="text-offwhite-1 w-5 h-5" />
        </a>
      ))}
      <ThemeToggler />
    </div>
  );
}
