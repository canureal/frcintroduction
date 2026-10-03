import AboutUsCards from './components/ui/AboutUsCards';
import Section  from './components/ui/Section';
import SocialLinks from './components/ui/SocialLinks';
import Hero from './components/ui/Hero';
import GiantAlaz from './components/ui/GiantAlaz';

export default function Home() {
  return (
    <div className="flex flex-col min-w-0 overflow-x-clip">
      <Hero />

          <Section
            id="aboutus"
            title="About us"
            description="Who are we and our team"
          >
            <AboutUsCards />
          </Section>

          <footer className='overflow-hidden border-t border-zinc-200 pt-8 dark:border-zinc-800'>
            <div className='mx-auto flex max-w-7xl flex-col gap-4 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 text-center sm:text-left'>
              <p className="text-sm text-zinc-500">Team ALAZ</p>
              <SocialLinks />
            </div>

            <GiantAlaz />
          </footer>
      </div>
  );
}
