import { siInstagram } from 'simple-icons'
import Button from '../components/ui/Button'

export default function SponsorPage() {
    const buttons = [
        { title: "Via Instagram", href: "https://instagram.com" },
        { title: "Via Linkedin", href: "https://linkedin.com" },
    ]

    return (
        <div className="flex flex-col flex-1 items-center gap-6 justify-start p-8 md:p-16 min-h-screen">
            <section className="flex  items-center justify-center flex-col gap-2 md:gap-4">
                <h1 className="text-5xl font-bold text-yellow-400 dark:text-yellow-200">Be a sponsor!</h1> 
                <p className="text-md text-zinc-300 dark:text-zinc-200">We really need sponsors</p>
            </section>
            <section className="flex items-center justify-start flex-row gap-4 md:gap-8">
                {buttons.map((but) => {
                    return (
                        <Button key={but.title} href={but.href}>
                            {but.title}
                        </Button>
                    )
                })}
            </section>
            {/*
                TODO: MAKE A BIG AS SHIT VIDEO PLAYER CAROUSEL RIGHT HERE
            */}
        </div>
    )
}
