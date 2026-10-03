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
                            aria-label={open ? "Close menu" : "Open menu"}
                            onClick={() => setOpen((v) => !v)}
                        >
                            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
                {open && (
                    <div className="border-t border-zinc-200 bg-white/95 backdrop-blur-md dark:border-zinc-800 dark:bg-black/95 md:hidden">
                        <div className="mx-auto flex max-w-7xl flex-col px-4 py-2 sm:px-6">
                            {nav_links.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setOpen(false)}
                                    className="flex min-h-[44px] items-center py-3 text-base font-medium text-zinc-700 transition-colors hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </nav>
        </>
    )
}
