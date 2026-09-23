import type {Metadata} from "next"; import Image from "next/image"; import Link from "next/link"; import {notFound} from "next/navigation"; import {Navbar} from "@/components/navbar"; import {Reveal} from "@/components/reveal"; import {portfolio} from "@/data/portfolio";
export function generateStaticParams(){return portfolio.map(p=>({slug:p.slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const p=portfolio.find(x=>x.slug===slug);if(!p)return{title:"Project not found — ShamzPhoto"};return{title:`${p.title} — ShamzPhoto`,description:`${p.category} photography by ShamzPhoto — ${p.location}, ${p.year}.`,openGraph:{images:[p.images[0]]}}}
export default async function Project({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;
  const i=portfolio.findIndex(x=>x.slug===slug);
  if(i===-1)notFound();
  const p=portfolio[i];
  const prev=portfolio[(i-1+portfolio.length)%portfolio.length];
  const next=portfolio[(i+1)%portfolio.length];
  return <main><Navbar/>
    <div className="px-6 pt-28 pb-6 lg:px-10"><Link href="/portfolio" className="text-xs uppercase tracking-[.2em]">← Portfolio</Link></div>
    <div className="mx-auto max-w-[1400px] px-6 pb-24 lg:px-10">
      <div className="relative aspect-[16/9] overflow-hidden"><Image src={p.images[0]} alt={p.title} fill priority sizes="100vw" className="object-cover"/></div>
      <div className="grid gap-10 py-16 md:grid-cols-[1fr_2fr]">
        <p className="text-xs uppercase tracking-[.2em] text-white/40">{p.category} · {p.location} · {p.year}</p>
        <div><h1 className="display text-6xl sm:text-8xl">{p.title}</h1><p className="mt-8 max-w-2xl leading-8 text-white/55">{p.description}</p></div>
      </div>
      {p.images.length>1&&(
        <div className="grid gap-5 sm:grid-cols-2">
          {p.images.slice(1).map((src,j)=>(
            <Reveal key={src} delay={j%2===1?120:0}>
              <div className="relative aspect-[4/5] overflow-hidden bg-white/5">
                <Image src={src} alt={`${p.title} — frame ${j+2}`} fill sizes="(max-width:640px) 100vw,50vw" className="object-cover"/>
              </div>
            </Reveal>
          ))}
        </div>
      )}
      <nav className="mt-24 flex items-center justify-between border-t border-white/10 pt-8 text-xs uppercase tracking-[.2em]" aria-label="More projects">
        <Link href={`/portfolio/${prev.slug}`} className="text-white/60 transition-colors hover:text-white">← {prev.title}</Link>
        <Link href={`/portfolio/${next.slug}`} className="text-white/60 transition-colors hover:text-white">{next.title} →</Link>
      </nav>
    </div>
  </main>
}
