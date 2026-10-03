import { Cpu,  LucideIcon, Megaphone, Wrench } from "lucide-react";


export default function AboutUsCards() {
  type Card = {
    title: string;
    description: string,
    icon: LucideIcon,
  };

  const cards: Card[] = [
    { title: "Software Team", description: "Robotic coding", icon: Cpu },
    { title: "Mechanics Team", description: "Building the robot", icon: Wrench},
    { title: "PR and Marketing team", description: "??", icon: Megaphone}
  ]

  return (
    <>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map(({ title, description, icon: Icon }) => (
          <div
            key={title}
            className="rounded-2xl border border-zinc-700 p-6 transition-colors hover:border-red-500 dark:border-amber-300 dark:hover:border-red-600"
          >
            <div className="mb-4 inline-flex rounded-lg bg-zinc-800 p-3 dark:bg-amber-300">
              <Icon className="h-6 w-6 text-amber-200 dark:text-zinc-900" />
            </div>
            <h3 className="text-xl font-semibold text-amber-200 dark:text-zinc-900">{title}</h3>
            <p className="mt-2 text-sm text-zinc-400 dark:text-zinc-700">{description}</p>
          </div>
        ))}
      </div>
    </>
  )
}
