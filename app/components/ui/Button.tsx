'use client'
import React, { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import Link from "next/link";
import { Target } from "lucide-react";

type ButtonProps = {
  href?: string;
  variant?: "solid" | "outline";
  children: React.ReactNode;
  className?: string;
} & (
  | ButtonHTMLAttributes<HTMLButtonElement>
  | AnchorHTMLAttributes<HTMLAnchorElement>
);

export default function Button({
  href,
  variant = "solid",
  children,
  className = "",
  ...props
}: ButtonProps) {
  const solidClass = `inline-flex items-center justify-center whitespace-nowrap max-w-full rounded-full bg-zinc-900 px-4 py-3 md:py-2 text-sm md:text-xs font-semibold text-white transition-all hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200 min-h-[44px] md:min-h-0 ${className}`;
  const outlineClass = `inline-flex items-center justify-center whitespace-nowrap max-w-full rounded-full border border-zinc-300 bg-white/60 px-4 py-3 md:py-2 text-sm md:text-xs font-semibold text-zinc-900 backdrop-blur transition-all hover:border-zinc-900 dark:border-zinc-700 dark:bg-white/10 dark:text-white dark:hover:border-white min-h-[44px] md:min-h-0 ${className}`;
  const baseClass = variant === "outline" ? outlineClass : solidClass;
    
  const external = href?.startsWith("http");

  if (href) {
      if (external) {
          return (
              <a
                href={href}
                target="_blank"
                rel="noopener norefferer"
                className={baseClass}
                {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
              >
              {children}
              </a>
          )
      }
      
      return (
          <Link
            href={href}
            className={baseClass}
            {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
          >
            {children}
          </Link>
      )
  }
  
  return (
    <button
      className={baseClass}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}
