const instagram="https://instagram.com/shamzphoto";

export function InstagramLink({className=""}:{className?:string}){
  return (
    <a href={instagram} target="_blank" rel="noopener noreferrer" aria-label="ShamzPhoto on Instagram" className={`inline-flex items-center gap-2 transition-colors hover:text-white ${className}`}>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="12" cy="12" r="4.25" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor"/>
      </svg>
      <span className="text-[10px] uppercase tracking-[.2em]">Instagram</span>
    </a>
  );
}
