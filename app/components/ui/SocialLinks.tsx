import type { IconType } from "react-icons";
import { SiX, SiYoutube, SiTiktok, SiInstagram } from "react-icons/si";

type Social = { label: string; href: string; icon: IconType };

const socials: Social[] = [
  { label: "X", href: "https://x.com/frcTeamAlaz", icon: SiX },
  { label: "YouTube", href: "https://www.youtube.com/@TeamALAZFRC", icon: SiYoutube },
  { label: "TikTok", href: "https://www.tiktok.com/@teamalazfrc2?_r=1", icon: SiTiktok },
  { label: "Instagram", href: "https://www.instagram.com/teamalazfrc/", icon: SiInstagram },
];

export default function SocialLinks() {
  return (
    <ul className="flex items-center gap-4">
      {socials.map(({ label, href, icon: Icon }) => (
        <li key={label}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="text-zinc-500 transition-colors hover:text-red-500 dark:text-zinc-400 dark:hover:text-red-500"
          >
            <Icon className="h-5 w-5" />
          </a>
        </li>
      ))}
    </ul>
  );
}
