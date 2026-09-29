export const siteUrl=
  process.env.NEXT_PUBLIC_SITE_URL??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL?`https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`:"http://localhost:3000");

export const phone="+2349059049659";
export const phoneDisplay="+234 905 904 9659";
export const whatsappUrl=`https://wa.me/2349059049659?text=${encodeURIComponent("Hi Picxellence! I'd like to book a shoot.")}`;
export const instagramUrl="https://www.instagram.com/picxellence101";
