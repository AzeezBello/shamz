import {testimonials} from "@/data/testimonials";
import {Reveal} from "@/components/reveal";

export function Testimonials(){
  if(testimonials.length===0)return null;
  return (
    <section className="mx-auto max-w-[1400px] px-6 py-28 lg:px-10">
      <Reveal>
        <p className="text-[10px] uppercase tracking-[.3em] text-white/40">Kind words</p>
        <h2 className="display mt-4 text-5xl sm:text-7xl">What clients <i>keep.</i></h2>
      </Reveal>
      <div className="mt-16 grid gap-10 md:grid-cols-3">
        {testimonials.map((t,i)=>(
          <Reveal key={t.name} delay={i*120}>
            <figure className="flex h-full flex-col justify-between border-t border-white/15 pt-8">
              <blockquote className="display text-xl leading-8 text-white/80">&ldquo;{t.quote}&rdquo;</blockquote>
              <figcaption className="mt-8">
                <p className="text-sm">{t.name}</p>
                <p className="mt-1 text-[10px] uppercase tracking-[.2em] text-white/40">{t.context}</p>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
