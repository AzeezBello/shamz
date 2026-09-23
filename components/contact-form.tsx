"use client";
import {useState} from "react";

const fieldClass="h-14 w-full border-b border-white/20 bg-transparent outline-none transition-colors focus:border-white";
const labelClass="mb-2 block text-[10px] uppercase tracking-[.2em] text-white/40";

export function ContactForm(){
  const [status,setStatus]=useState<"idle"|"sending"|"sent"|"error">("idle");
  const [error,setError]=useState("");

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
      onSubmit={async(e)=>{
        e.preventDefault();
        const form=e.currentTarget;
        const data=Object.fromEntries(new FormData(form)) as Record<string,string>;
        setStatus("sending");
        setError("");
        try{
          const res=await fetch("/api/contact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(data)});
          if(!res.ok){
            const j=await res.json().catch(()=>null);
            setError(j?.error??"Something went wrong. Please try again.");
            setStatus("error");
            return;
          }
          setStatus("sent");
        }catch{
          setError("Something went wrong. Please check your connection and try again.");
          setStatus("error");
        }
      }}
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
      {status==="error"&&<p role="alert" className="text-sm text-red-300">{error}</p>}
      <button type="submit" disabled={status==="sending"} className="mt-5 h-12 w-fit rounded-full bg-[#f3f0e9] px-7 text-sm text-black transition-colors hover:bg-white disabled:opacity-60">
        {status==="sending"?"Sending…":"Send enquiry"}
      </button>
    </form>
  );
}
