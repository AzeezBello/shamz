import type {Metadata} from "next"; import {Navbar} from "@/components/navbar"; import {ContactForm} from "@/components/contact-form"; import {InstagramLink} from "@/components/socials"; import {phone,phoneDisplay,whatsappUrl} from "@/lib/site";
export const metadata:Metadata={title:"Contact — Picxellence",description:"Get in touch with Picxellence to book a wedding, portrait, fashion, event or brand shoot."};
export default function Contact(){return <main className="min-h-screen px-6 lg:px-10"><Navbar/><div className="mx-auto max-w-3xl py-32"><p className="text-xs uppercase tracking-[.3em] text-white/40">Contact</p><h1 className="display mt-5 text-6xl sm:text-8xl">Let's make<br/><i>something.</i></h1>
<div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 border-y border-white/10 py-5 text-[10px] uppercase tracking-[.2em] text-white/50">
  <a href={`tel:${phone}`} className="transition-colors hover:text-white">{phoneDisplay}</a>
  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white">WhatsApp us</a>
  <InstagramLink className="text-white/50"/>
</div>
<ContactForm/></div></main>}
