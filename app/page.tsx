import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import AboutUsCards from './components/ui/AboutUsCards';
import Section  from './components/ui/Section';
import SocialLinks from './components/ui/SocialLinks';

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative h-screen w-full overflow-hidden">
            <video
              className="absolute inset-0 h-full w-full object-cover"
              src="/hero.mp4"
              autoPlay
              muted
              loop
              playsInline
            />

            <div className="absolute inset-0 bg-white dark:bg-zinc-950 md:[clip-path:polygon(0_0,60%_0,45%_100%,0_100%)]" />

            <svg className="pointer-events-none absolute inset-0 hidden h-full w-full md:block" preserveAspectRatio="none">
              {/*abracadabra! */}
              <line
                x1="60%" y1="0" x2="45%" y2="100%"
                className="stroke-red-500"
                strokeWidth="2"
                vectorEffect="non-scaling-stroke"
              />
            </svg>

            <div className="relative z-10 flex flex-col items-start justify-start gap-4 p-8 pt-32 md:max-w-[40%] md:p-16 md:pt-48">
              <h1 className="text-5xl font-bold text-zinc-900 dark:text-white">Team <span className='stroke-red-500 text-red-500'>ALAZ</span></h1>
              <p className="text-md text-zinc-600 dark:text-zinc-200">
                FRC(First Robotics Competition) Team at Sezai Karakoç anadolu lisesi
              </p>
            </div>
          </section>

          <Section
            id="aboutus"
            title="About us"
            description="Who are we and our team"
          >
            <AboutUsCards />
          </Section>

          <footer className='border-t border-zinc-200 py-8 dark:border-zinc-800'>
            <div className='mx-auto flex max-w-7xl items-center justify-between px-6'>
              <p className="text-sm text-zinc-500">Team ALAZ</p>
              <SocialLinks />
            </div>
          </footer>
      </div>
  );
}
