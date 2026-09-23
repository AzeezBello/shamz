import type {Metadata,Viewport} from "next"; import "./globals.css";
import {GrainOverlay} from "@/components/grain-overlay";
import {StickyCta} from "@/components/sticky-cta";
import {SiteFooter} from "@/components/site-footer";
import {siteUrl} from "@/lib/site";
export const metadata:Metadata={metadataBase:new URL(siteUrl),title:{default:"ShamzPhoto — Photography",template:"%s"},description:"Editorial photography for weddings, portraits, fashion, events and brands."};
export const viewport:Viewport={themeColor:"#0b0b0a"};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}<SiteFooter/><StickyCta/><GrainOverlay/></body></html>}
