import type {Metadata} from "next"; import Link from "next/link"; import {Navbar} from "@/components/navbar"; import {Button} from "@/components/ui/button"; import {Reveal} from "@/components/reveal";
const services=[{name:"Wedding Photography",desc:"Full-day coverage of your ceremony and reception, from getting-ready moments to the last dance."},{name:"Portrait Photography",desc:"Studio or on-location portraits for individuals, couples and families."},{name:"Fashion & Editorial",desc:"Concept-driven shoots for lookbooks, campaigns and personal style stories."},{name:"Event Photography",desc:"Candid and posed coverage for parties, launches and celebrations."},{name:"Brand Photography",desc:"Product and lifestyle imagery built around your brand's visual identity."}];
const packages=[
{name:"Essential",tagline:"For focused sessions",items:["Up to half a day of coverage","One location","A curated set of fully edited images","Private online gallery","Personal-use licence"]},
{name:"Signature",tagline:"The most booked",featured:true,items:["Full-day coverage","Multiple locations or looks","Extended set of fully edited images","Highlight selects for social, sized to post","Private online gallery","Print-ready files"]},
{name:"Bespoke",tagline:"For productions",items:["Multi-day or editorial productions","Creative direction & moodboards","Team and location coordination","Commercial licensing on request","Custom deliverables"]}];
export const metadata:Metadata={title:"Services — ShamzPhoto",description:"Wedding, portrait, fashion, event and brand photography services and packages from ShamzPhoto."};
export default function Services(){return <main className="min-h-screen px-6 lg:px-10"><Navbar/><div className="mx-auto max-w-[1100px] py-32"><p className="text-xs uppercase tracking-[.3em] text-white/40">Services</p><h1 className="display mt-5 text-6xl sm:text-8xl">What we <i>create.</i></h1>
<div className="mt-16 divide-y divide-white/10 border-y border-white/10">{services.map((s,i)=><Link key={s.name} href="/contact" className="flex items-center justify-between gap-6 py-8 transition-colors hover:bg-white/5"><div className="flex items-baseline gap-6"><span className="text-xs text-white/30">0{i+1}</span><div><h2 className="display text-3xl sm:text-5xl">{s.name}</h2><p className="mt-2 max-w-md text-sm leading-6 text-white/50">{s.desc}</p></div></div><span className="shrink-0">↗</span></Link>)}</div>
<section className="mt-28">
  <Reveal><p className="text-xs uppercase tracking-[.3em] text-white/40">Packages</p><h2 className="display mt-4 text-5xl sm:text-7xl">Ways to <i>work together.</i></h2><p className="mt-6 max-w-xl text-sm leading-7 text-white/50">Every project is quoted individually — these are the shapes most shoots take. Tell us about yours and we'll send a tailored quote within 24 hours.</p></Reveal>
  <div className="mt-14 grid gap-5 md:grid-cols-3">
    {packages.map((p,i)=>(
      <Reveal key={p.name} delay={i*120} className="h-full">
        <div className={`flex h-full flex-col border p-8 ${p.featured?"border-[#f3f0e9]/60 bg-white/5":"border-white/15"}`}>
          <p className="text-[10px] uppercase tracking-[.3em] text-white/40">{p.tagline}</p>
          <h3 className="display mt-3 text-4xl">{p.name}</h3>
          <ul className="mt-8 flex-1 space-y-3 border-t border-white/10 pt-8">
            {p.items.map(it=><li key={it} className="flex gap-3 text-sm leading-6 text-white/60"><span className="text-white/30">—</span>{it}</li>)}
          </ul>
          <Button asChild variant={p.featured?"default":"outline"} className="mt-10 w-full"><Link href="/contact">Request a quote</Link></Button>
        </div>
      </Reveal>
    ))}
  </div>
</section>
<Button asChild className="mt-16"><Link href="/contact">Book a shoot</Link></Button></div></main>}
