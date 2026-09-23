import Image from "next/image";
import Link from "next/link";
import {Navbar} from "@/components/navbar";
import {PortfolioGrid} from "@/components/portfolio-grid";
import {Button} from "@/components/ui/button";
import {Reveal} from "@/components/reveal";
import {Testimonials} from "@/components/testimonials";
import {categories} from "@/data/portfolio";

const featured=["boardroom","quiet-portraits","the-details","celebration"];

export default function Home(){
  return <main><Navbar/>

    <section className="relative min-h-screen overflow-hidden">
      <Image src="/812400306_18571328170078862_8165856032320857477_n.jpg" alt="Bride and groom in traditional Yoruba wedding attire, photographed by ShamzPhoto" fill priority sizes="100vw" className="object-cover object-top"/>
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-black/30"/>
      <div className="relative mx-auto flex min-h-screen max-w-[1400px] flex-col justify-end px-6 pb-12 lg:px-10">
        <p className="hero-rise mb-5 text-xs uppercase tracking-[.3em] text-white/70">Photography · Lagos · Worldwide</p>
        <h1 className="display hero-rise text-6xl leading-[.9] sm:text-8xl lg:text-[9rem]" style={{animationDelay:".12s"}}>Stories that<br/><i>stay.</i></h1>
        <div className="hero-rise mt-8 flex max-w-3xl flex-col gap-5 sm:flex-row sm:justify-between" style={{animationDelay:".24s"}}>
          <p className="max-w-md text-sm leading-6 text-white/70">Editorial photography for weddings, portraits, fashion, events and brands — crafted with intention and feeling.</p>
          <Link href="/portfolio" className="text-xs uppercase tracking-[.2em] transition-colors hover:text-white">Explore the work ↗</Link>
        </div>
        <p className="hero-rise absolute bottom-12 right-6 hidden text-[10px] uppercase tracking-[.3em] text-white/40 lg:right-10 lg:block" style={{animationDelay:".4s"}}>Scroll ↓</p>
      </div>
    </section>

    <div className="marquee-mask border-y border-white/10 py-5" aria-hidden>
      <div className="marquee">
        {[0,1].map(n=>(
          <div key={n} className="flex shrink-0 items-center">
            {categories.map(c=><span key={c} className="display mx-8 text-3xl text-white/50 sm:text-4xl">{c}<span className="ml-16 text-white/20">·</span></span>)}
          </div>
        ))}
      </div>
    </div>

    <section className="mx-auto max-w-[1400px] px-6 py-28 lg:px-10 lg:py-40">
      <Reveal>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-[10px] uppercase tracking-[.3em] text-white/40">Selected work</p>
            <h2 className="display mt-4 text-5xl sm:text-7xl">A collection<br/><i>of moments.</i></h2>
          </div>
          <Link href="/portfolio" className="mb-2 text-xs uppercase tracking-[.2em] text-white/60 transition-colors hover:text-white">All projects ↗</Link>
        </div>
      </Reveal>
      <div className="mt-16"><PortfolioGrid slugs={featured}/></div>
      <Reveal className="mt-16 text-center"><Button asChild variant="outline"><Link href="/portfolio">View the full portfolio</Link></Button></Reveal>
    </section>

    <section className="border-y border-white/10 bg-[#11110f]">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-6 py-28 lg:grid-cols-[1fr_1.2fr] lg:px-10">
        <Reveal>
          <p className="mb-6 text-[10px] uppercase tracking-[.3em] text-white/40">About ShamzPhoto</p>
          <div className="relative aspect-[4/5] overflow-hidden"><Image src="/654358784_18086345602971269_4782885110522234594_n.webp" alt="Editorial fashion portrait by ShamzPhoto" fill sizes="(max-width:1024px) 100vw,33vw" className="object-cover"/></div>
        </Reveal>
        <Reveal delay={150}>
          <h2 className="display text-5xl sm:text-6xl">Photography with <i>presence.</i></h2>
          <p className="mt-8 max-w-2xl leading-8 text-white/60">Images that hold onto atmosphere, movement, texture and the moments that make your story yours.</p>
          <Button asChild variant="outline" className="mt-8"><Link href="/about">Meet the photographer</Link></Button>
        </Reveal>
      </div>
    </section>

    <section className="mx-auto max-w-[1400px] px-6 py-28 lg:px-10">
      <Reveal><p className="text-[10px] uppercase tracking-[.3em] text-white/40">Services</p></Reveal>
      <div className="mt-10 divide-y divide-white/10 border-y border-white/10">
        {["Weddings & Intimate Celebrations","Portraits & Personal Branding","Fashion & Editorial","Events & Corporate Stories"].map((s,i)=>(
          <Reveal key={s} delay={i*80}>
            <Link href="/services" className="group flex items-center justify-between py-7 transition-colors hover:bg-white/5">
              <div className="flex gap-6"><span className="text-xs text-white/30">0{i+1}</span><h3 className="display text-2xl sm:text-4xl">{s}</h3></div>
              <span className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">↗</span>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>

    <Testimonials/>

    <section className="bg-[#f3f0e9] px-6 py-28 text-black lg:px-10 lg:py-40">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <p className="text-[10px] uppercase tracking-[.3em] text-black/40">Let's create something</p>
          <h2 className="display mt-5 text-6xl leading-[.9] sm:text-8xl">Your story<br/><i>starts here.</i></h2>
          <Button asChild className="mt-12"><Link href="/contact">Start a project</Link></Button>
        </Reveal>
      </div>
    </section>
  </main>
}
