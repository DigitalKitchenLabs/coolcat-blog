import Container from 'components/Container';
import Socials from 'components/Socials';
import ThemeToggler from 'components/ThemeToggle';
import siteData from 'data/siteData';
import Link from 'next/link';

export default function Header() {
  return (
    <div className="fixed z-10 w-full bg-[rgba(2,65,114,.75)] backdrop-blur-sm border-b">
      <Container>
        <div className="flex justify-between w-full py-4 ">
          <Link href="/" passHref>
            <div className="text-xl font-heading text-catred-500 font-bold cursor-pointer">{siteData.author} <span className="text-offwhite-1 text-lg font-body"> | Blog</span></div>
          </Link>
          <Socials />
        </div>
      </Container>
    </div>
  );
}
