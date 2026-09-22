"use client";
import {useState} from "react";

const fieldClass="h-14 w-full border-b border-white/20 bg-transparent outline-none transition-colors focus:border-white";
const labelClass="mb-2 block text-[10px] uppercase tracking-[.2em] text-white/40";

export function ContactForm(){
  const [status,setStatus]=useState<"idle"|"sent">("idle");

  if(status==="sent"){
    return (
      <div className="mt-16 border-b border-white/20 py-10">
        <p className="display text-3xl">Thank you.</p>
        <p className="mt-3 max-w-md text-sm leading-6 text-white/60">Your enquiry has been received — we'll be in touch within 24 hours to talk through your project.</p>
      </div>
    );
  }

  return (
    <form
      className="mt-16 grid gap-8"
      onSubmit={(e)=>{e.preventDefault();setStatus("sent");}}
    >
      <div>
        <label htmlFor="name" className={labelClass}>Your name</label>
        <input id="name" name="name" type="text" required autoComplete="name" className={fieldClass}/>
      </div>
      <div>
        <label htmlFor="email" className={labelClass}>Email address</label>
        <input id="email" name="email" type="email" required autoComplete="email" className={fieldClass}/>
      </div>
      <div>
        <label htmlFor="service" className={labelClass}>Service</label>
        <input id="service" name="service" type="text" placeholder="e.g. Wedding, Portrait, Brand" className={fieldClass}/>
      </div>
      <div>
        <label htmlFor="message" className={labelClass}>Your project</label>
        <textarea id="message" name="message" required className={`${fieldClass} min-h-36 pt-4`}/>
      </div>
      <button type="submit" className="mt-5 h-12 w-fit rounded-full bg-[#f3f0e9] px-7 text-sm text-black transition-colors hover:bg-white">Send enquiry</button>
    </form>
  );
}
