import React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export default function Button({ children, className = '', ...props }: ButtonProps) {
    return (
        <button
           className={`rounded-full bg-zinc-900 px-4 py-2 text-xs font-semibold text-white transition-all hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200 ${className}`}
            {...props} 
        >
            {children} 
        </button>
    )
}
