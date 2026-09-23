import Link from "next/link";
import {InstagramLink} from "@/components/socials";

const links=[{href:"/portfolio",label:"Work"},{href:"/about",label:"About"},{href:"/services",label:"Services"},{href:"/contact",label:"Contact"}];

export function SiteFooter(){
  return (
    <footer className="border-t border-white/10 bg-[#0b0b0a] px-6 py-10 lg:px-10">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <Link href="/" className="text-lg font-semibold">SHAMZ<span className="text-white/40">PHOTO</span></Link>
          <p className="mt-3 text-[10px] uppercase tracking-[.2em] text-white/40">Lagos · Nigeria · Worldwide</p>
        </div>
        <nav className="flex flex-wrap items-center gap-6 text-[10px] uppercase tracking-[.2em] text-white/50">
          {links.map(l=><Link key={l.href} href={l.href} className="transition-colors hover:text-white">{l.label}</Link>)}
          <InstagramLink className="text-white/50"/>
        </nav>
        <p className="text-[10px] uppercase tracking-[.2em] text-white/30">© {new Date().getFullYear()} ShamzPhoto</p>
      </div>
    </footer>
  );
}
