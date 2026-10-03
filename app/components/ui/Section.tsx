type SectionProps = {
  id: string,
  title: string,
  description?: string,
  children: React.ReactNode,
}

export default function Section({ id, title, description, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-16 bg-zinc-900 py-16 md:py-24 dark:bg-amber-200">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <header className="mb-8 md:mb-12 max-w-2xl">
              <h2 className="text-2xl sm:text-3xl font-bold text-amber-200 dark:text-zinc-900">
                {title}
              </h2>
              {description && (
                <p className="mt-3 text-zinc-400 dark:text-zinc-700">{description}</p>
              )}
            </header>
            {children}
          </div>
    </section>
  )
}
