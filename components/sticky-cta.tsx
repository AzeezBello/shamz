"use client";
import {useEffect,useState} from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";

export function StickyCta(){
  const [visible,setVisible]=useState(false);
  const pathname=usePathname();
  useEffect(()=>{
    const onScroll=()=>setVisible(window.scrollY>640);
    onScroll();
    window.addEventListener("scroll",onScroll,{passive:true});
    return ()=>window.removeEventListener("scroll",onScroll);
  },[]);
  if(pathname==="/contact")return null;
  return (
    <div className={`fixed bottom-6 right-6 z-40 transition-all duration-500 ${visible?"translate-y-0 opacity-100":"pointer-events-none translate-y-4 opacity-0"}`}>
      <Link href="/contact" className="flex h-12 items-center rounded-full bg-[#f3f0e9] px-6 text-sm font-medium text-black shadow-[0_8px_30px_rgba(0,0,0,.45)] transition-colors hover:bg-white">
        Book a shoot
      </Link>
    </div>
  );
}
