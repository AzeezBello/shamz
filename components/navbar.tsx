"use client";
import {useState} from "react";
import Link from "next/link";
import {Button} from "@/components/ui/button";

const links=[{href:"/portfolio",label:"Work"},{href:"/about",label:"About"},{href:"/services",label:"Services"},{href:"/contact",label:"Contact"}];

export function Navbar(){
  const [open,setOpen]=useState(false);
  return (
    <header className="absolute top-0 z-50 w-full">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-6 lg:px-10">
        <Link href="/" className="text-xl font-semibold" onClick={()=>setOpen(false)}>
          SHAMZ<span className="text-white/40">PHOTO</span>
        </Link>
        <nav className="hidden gap-8 text-xs uppercase tracking-[.2em] text-white/70 md:flex">
          {links.map(l=><Link key={l.href} href={l.href}>{l.label}</Link>)}
        </nav>
        <div className="flex items-center gap-3">
          <Button asChild size="sm" className="hidden md:inline-flex">
            <Link href="/contact">Book a shoot</Link>
          </Button>
          <button
            type="button"
            aria-label={open?"Close menu":"Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={()=>setOpen(v=>!v)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 text-white md:hidden"
          >
            <span className="sr-only">{open?"Close menu":"Open menu"}</span>
            {open?(
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M1 1L15 15M15 1L1 15" stroke="currentColor" strokeWidth="1.5"/></svg>
            ):(
              <svg width="16" height="12" viewBox="0 0 16 12" fill="none" aria-hidden="true"><path d="M0 1H16M0 6H16M0 11H16" stroke="currentColor" strokeWidth="1.5"/></svg>
            )}
          </button>
        </div>
      </div>
      {open&&(
        <nav id="mobile-nav" className="border-t border-white/10 bg-[#0b0b0a] px-6 py-6 md:hidden">
          <ul className="flex flex-col gap-5 text-sm uppercase tracking-[.2em] text-white/80">
            {links.map(l=>(
              <li key={l.href}>
                <Link href={l.href} onClick={()=>setOpen(false)} className="block">{l.label}</Link>
              </li>
            ))}
            <li className="pt-2">
              <Button asChild size="sm" className="w-full" onClick={()=>setOpen(false)}>
                <Link href="/contact">Book a shoot</Link>
              </Button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
