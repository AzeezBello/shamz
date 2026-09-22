import type {Metadata,Viewport} from "next"; import "./globals.css";
export const metadata:Metadata={title:{default:"ShamzPhoto — Photography",template:"%s"},description:"Editorial photography for weddings, portraits, fashion, events and brands."};
export const viewport:Viewport={themeColor:"#0b0b0a"};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
