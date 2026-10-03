'use client'

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const nav_links = [
        { label: 'Main page', href: '/#top' },
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
            backdrop-blur-md
            dark:border-zinc-800
            dark:bg-black/75
            "
            >
                <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 md:py-4">
                    <Link
                        href={"/"}
                        className="min-h-[44px] inline-flex items-center shrink-0"
                        onClick={() => setOpen(false)}
                    >
                        <span className="text-red-500 dark:text-red-700">TeamALAZ</span>
                    </Link>

                    <div className="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-600 dark:text-zinc-400">
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

                    <div className="flex items-center gap-1 sm:gap-2">
                        <ThemeToggle />
                        <Link
                            href="/sponsor"
                            className="inline-flex items-center justify-center whitespace-nowrap rounded-full px-4 min-h-[44px] py-2 md:py-2 md:min-h-0 text-xs font-semibold text-white bg-zinc-900 transition-all hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
                        >
                            Be a sponsor !
                        </Link>
                        <button
                            type="button"
                            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-zinc-700 transition-colors hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800 md:hidden"
                            aria-expanded={open}
                            aria-controls="mobile-menu"
                            aria-label={open ? "Close menu" : "Open menu"}
                            onClick={() => setOpen((v) => !v)}
                        >
                            <span className="relative block h-6 w-6">
                                <Menu className={`absolute inset-0 h-6 w-6 motion-safe:transition-all motion-safe:duration-300 ${open ? "rotate-90 opacity-0" : "rotate-0 opacity-100"}`} />
                                <X className={`absolute inset-0 h-6 w-6 motion-safe:transition-all motion-safe:duration-300 ${open ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"}`} />
                            </span>
                        </button>
                    </div>
                </div>
                <div
                    id="mobile-menu"
                    inert={!open}
                    className={`grid border-t border-zinc-200 bg-white/95 backdrop-blur-md md:hidden dark:border-zinc-800 dark:bg-black/95 motion-safe:transition-all motion-safe:duration-300 motion-safe:ease-out ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                >
                    <div className="min-h-0 overflow-hidden">
                        <div className="mx-auto flex max-w-7xl flex-col px-4 py-2 sm:px-6">
                            {nav_links.map((link, i) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setOpen(false)}
                                    style={{ transitionDelay: open ? `${i * 40}ms` : "0ms" }}
                                    className={`flex min-h-[44px] items-center py-3 text-base font-medium text-zinc-700 transition-colors hover:text-zinc-900 motion-safe:transition-all motion-safe:duration-300 dark:text-zinc-300 dark:hover:text-white ${open ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0"}`}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
