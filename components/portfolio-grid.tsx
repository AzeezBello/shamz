"use client";
import {useState} from "react";
import Image from "next/image";
import Link from "next/link";
import {portfolio,categories} from "@/data/portfolio";
import {Reveal} from "@/components/reveal";

export function PortfolioGrid({filterable=false,slugs}:{filterable?:boolean;slugs?:string[]}){
  const [active,setActive]=useState("All");
  const pool=slugs?slugs.flatMap(s=>portfolio.find(p=>p.slug===s)??[]):portfolio;
  const projects=active==="All"?pool:pool.filter(p=>p.category===active);
  return (
    <div>
      {filterable&&(
        <div className="mb-14 flex flex-wrap gap-2" role="tablist" aria-label="Filter portfolio by category">
          {["All",...categories].map(c=>(
            <button
              key={c}
              type="button"
              role="tab"
              aria-selected={active===c}
              onClick={()=>setActive(c)}
              className={`rounded-full border px-4 py-2 text-[10px] uppercase tracking-[.2em] transition-colors ${active===c?"border-[#f3f0e9] bg-[#f3f0e9] text-black":"border-white/20 text-white/60 hover:border-white/50 hover:text-white"}`}
            >
              {c}
            </button>
          ))}
        </div>
      )}
      <div className="grid gap-x-5 gap-y-12 sm:grid-cols-2">
        {projects.map((p,i)=>(
          <Reveal key={p.slug} delay={i%2===1?120:0} className={i%3===0?"sm:pt-16":""}>
            <Link href={`/portfolio/${p.slug}`} className="group block">
              <div className="relative aspect-[4/5] overflow-hidden bg-white/5">
                <Image src={p.images[0]} alt={p.title} fill sizes="(max-width:640px) 100vw,50vw" className="object-cover transition duration-700 group-hover:scale-[1.035]"/>
              </div>
              <div className="mt-4 flex items-baseline justify-between border-b border-white/10 pb-4">
                <h3 className="display text-2xl">{p.title}</h3>
                <span className="text-[10px] uppercase tracking-[.2em] text-white/40">
                  {p.category}{p.images.length>1&&<span className="ml-2 text-white/25">+{p.images.length-1}</span>}
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
