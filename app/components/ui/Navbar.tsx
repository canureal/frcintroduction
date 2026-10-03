'use client'

import Link from "next/link";

export default function Navbar() {
    const nav_links = [
        { label: 'Main page', href: '/#' },
        { label: 'About us', href: '#aboutus'},
        { label: 'Our robot', href: '#robot'},
        { label: 'Us', href: '#us'},
    ] as const;

    return (
        <>
            <nav className="
            sticky
            top-0
            z-50
            w-full
            border-b
            border-zinc-200
            bg-white/75
            dark:border-zinc-800
            dark:bg-black/75
            "
            >
                <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                    <Link
                        href={"/"}
                        className=""
                    >
                        <span className="text-red-500 dark:text-red-700">TeamALAZ</span>
                    </Link>

                    <div className="flex items-center gap-6 text-sm font-medium text-zinc-600 dark:text-zinc-400">
                        {nav_links.map((link) => (
                            <Link
                                className="hover:text-zinc-900 dark:hover:text-white transition-colors"
                                key={link.href}
                                href={link.href}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    <div>
                        <Link
                            href="/sponsor"
                            className="rounded-full bg-zinc px-4 py-2 text-xs font-semibold text-white bg-zinc-900 transition-all hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
                        >
                            Be a sponsor !
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    )
}
