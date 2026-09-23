import type {MetadataRoute} from "next";
import {portfolio} from "@/data/portfolio";
import {siteUrl} from "@/lib/site";

export default function sitemap():MetadataRoute.Sitemap{
  const staticRoutes=["","/portfolio","/about","/services","/contact"].map(p=>({
    url:`${siteUrl}${p}`,
    lastModified:new Date(),
    changeFrequency:"monthly" as const,
    priority:p===""?1:.7,
  }));
  const projects=portfolio.map(p=>({
    url:`${siteUrl}/portfolio/${p.slug}`,
    lastModified:new Date(),
    changeFrequency:"monthly" as const,
    priority:.6,
  }));
  return [...staticRoutes,...projects];
}
