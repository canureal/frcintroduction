'use client'

import { useTheme } from "next-themes";
import { useEffect, useState} from 'react';
import { Sun, Moon } from 'lucide-react';

export function ThemeToggle() {
    const {theme, setTheme} = useTheme();
    const [mounted, setMounted] = useState(false);
        
    useEffect(() => {
        setMounted(true);
    }, []);
    
    if (!mounted) {
        return <div className="w-9 h-9"></div>;
    }

    return (
        <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : "dark")}
            className="rounded-full p-2 text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800 transition-colors"
            aria-label="toggle theme"
        >
            {theme === 'dark' ? (
                <Sun className="h-5 w-5 text-amber-400"></Sun>
            ) : (
                <Moon className="h-5 w-5 text-zinc-700" />
            )}
        </button>
    );
}

