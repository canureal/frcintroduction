import { siInstagram } from 'simple-icons'
import Button from '../components/ui/Button'
import VideoCarousel from '../components/ui/VideoCarousel'

export default function SponsorPage() {
    const buttons = [
        { title: "Contact through Instagram", href: "https://www.instagram.com/teamalazfrc/" },
    ]

    return (
        <div className="flex flex-col flex-1 items-center gap-8 md:gap-14 justify-start w-full max-w-5xl mx-auto overflow-x-clip p-4 sm:p-8 md:p-16 min-h-screen">
            <section className="flex items-center justify-center flex-col gap-2 md:gap-4 text-center">
                <h1 className="text-4xl sm:text-5xl font-bold text-balance text-yellow-400 dark:text-yellow-200">Be a sponsor!</h1>
                <p className="text-base sm:text-md text-zinc-300 dark:text-zinc-200">We really need sponsors</p>
            </section>
            <section className="flex items-center justify-start flex-col sm:flex-row gap-4 md:gap-8 w-full sm:w-auto">
                {buttons.map((but) => {
                    return (
                        <Button key={but.title} href={but.href}>
                            {but.title}
                        </Button>
                    )
                })}
            </section>
            <h1 className='text-gray-500 text-center text-sm sm:text-base'>Scroll to see the other videos</h1>
            <div className="w-full max-w-3xl min-w-0">
            <VideoCarousel />
            </div>
        </div>
    )
}
