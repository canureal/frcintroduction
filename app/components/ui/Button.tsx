'use client'
import React, { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import Link from "next/link";
import { Target } from "lucide-react";

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  className?: string;
} & (
  | ButtonHTMLAttributes<HTMLButtonElement>
  | AnchorHTMLAttributes<HTMLAnchorElement>
);

export default function Button({
  href,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const baseClass = `rounded-full bg-zinc-900 px-4 py-2 text-xs font-semibold text-white transition-all hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200 ${className}`;
    
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
