import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ChevronDown } from 'lucide-react';
import AboutUsCards from './components/ui/AboutUsCards';
import Section  from './components/ui/Section';
import SocialLinks from './components/ui/SocialLinks';
import Button from './components/ui/Button';

export default function Home() {
  return (
    <div className="flex flex-col min-w-0 overflow-x-clip">
      <section className="relative min-h-svh w-full overflow-hidden">
            <video
              className="absolute inset-0 h-full w-full object-cover"
              src="/hero.mp4"
              autoPlay
              muted
              loop
              playsInline
            />

            <div className="absolute inset-0 bg-white/95 dark:bg-zinc-950/95 md:bg-white md:dark:bg-zinc-950 md:[clip-path:polygon(0_0,60%_0,45%_100%,0_100%)]" />

            <svg className="pointer-events-none absolute inset-0 hidden h-full w-full md:block" preserveAspectRatio="none">
              {/*abracadabra! */}
              <line
                x1="60%" y1="0" x2="45%" y2="100%"
                className="stroke-red-500"
                strokeWidth="2"
                vectorEffect="non-scaling-stroke"
              />
            </svg>

            <div className="relative z-10 flex flex-col items-start justify-start gap-4 p-6 pt-28 sm:p-8 sm:pt-32 md:max-w-[40%] md:p-16 md:pt-48">
              <h1 className="text-4xl sm:text-5xl font-bold text-balance text-zinc-900 dark:text-white">Team <span className='stroke-red-500 text-red-500'>ALAZ</span></h1>
              <p className="text-md text-zinc-600 dark:text-zinc-200 text-base sm:text-md max-w-prose break-words">
                FRC(First Robotics Competition) Team at Sezai Karakoç anadolu lisesi
              </p>
              <div className="mt-2 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                <Button href="/sponsor" className="w-full sm:w-auto">
                  Be a Sponsor
                </Button>
                <Button href="#aboutus" variant="outline" className="w-full sm:w-auto">
                  About Us
                </Button>
              </div>
            </div>

            <a
              href="#aboutus"
              aria-label="Scroll down"
              className="absolute bottom-6 left-1/2 z-10 inline-flex min-h-[44px] min-w-[44px] -translate-x-1/2 flex-col items-center justify-center gap-1 rounded-full bg-black/30 px-3 py-2 text-white backdrop-blur transition-colors hover:bg-black/50"
            >
              <span className="text-[11px] font-medium tracking-wide">Explore</span>
              <ChevronDown className="h-5 w-5 motion-safe:animate-bounce" />
            </a>
          </section>

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

            <div aria-hidden="true" className='mx-auto w-full max-w-7xl select-none overflow-hidden px-4 sm:px-6 leading-none'>
              <p className='translate-y-[12%] text-center text-[22vw] sm:text-[20vw] md:text-[18vw] font-bold tracking-tighter text-red-500'>
                  ALAZ
              </p>
            </div>
          </footer>
      </div>
  );
}
