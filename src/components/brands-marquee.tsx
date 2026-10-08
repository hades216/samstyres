import { useEffect, useMemo, useRef, useState } from "react";
import { assetUrl } from "@/components/site";

export type BrandEntry = { name: string; logo: string; fallback?: string };

const BRANDS_CACHE_KEY = "smt.brands.v2";
const LOGO_CACHE_KEY = "smt.logo-ok.v2";

async function fetchBrandsWithRetry(attempts = 3): Promise<BrandEntry[]> {
  for (let i = 0; i < attempts; i++) {
    try {
      const r = await fetch("/brands.json", { cache: "default" });
      if (!r.ok) throw new Error(String(r.status));
      const d = await r.json();
      return (d.brands ?? []) as BrandEntry[];
    } catch {
      if (i === attempts - 1) throw new Error("brands fetch failed");
      await new Promise((res) => setTimeout(res, 400 * Math.pow(2, i)));
    }
  }
  return [];
}

function LogoImg({ brand, eager }: { brand: BrandEntry; eager?: boolean }) {
  const primaryUrl = assetUrl(brand.logo);
  const fallbackUrl = brand.fallback ? assetUrl(brand.fallback) : "";
  const okCache = useMemo<Record<string, string>>(() => {
    try { return JSON.parse(sessionStorage.getItem(LOGO_CACHE_KEY) || "{}"); }
    catch { return {}; }
  }, []);
  const cached = okCache[brand.name];
  const initial = cached && cached.startsWith("http") ? cached : primaryUrl;
  const [src, setSrc] = useState(initial);
  const [failed, setFailed] = useState(false);
  const attemptRef = useRef(0);
  const stageRef = useRef<"primary" | "fallback">(
    initial === fallbackUrl ? "fallback" : "primary"
  );

  const handleError = () => {
    const stage = stageRef.current;
    const url = stage === "primary" ? primaryUrl : fallbackUrl;
    if (attemptRef.current < 2 && url) {
      attemptRef.current += 1;
      const delay = 500 * Math.pow(2, attemptRef.current - 1);
      setTimeout(() => setSrc(`${url}${url.includes("?") ? "&" : "?"}r=${attemptRef.current}`), delay);
      return;
    }
    if (stage === "primary" && fallbackUrl) {
      stageRef.current = "fallback";
      attemptRef.current = 0;
      setSrc(fallbackUrl);
      return;
    }
    setFailed(true);
  };

  const handleLoad = () => {
    try {
      const clean = src.split(/[?&]r=/)[0];
      const next = { ...okCache, [brand.name]: clean };
      sessionStorage.setItem(LOGO_CACHE_KEY, JSON.stringify(next));
    } catch { /* ignore quota */ }
  };

  if (failed) {
    return (
      <span className="flex items-center justify-center font-display text-lg md:text-xl font-semibold text-ink/60 whitespace-nowrap">
        {brand.name}
      </span>
    );
  }

  return (
    <img
      src={src}
      alt={`${brand.name} logo`}
      width={160}
      height={80}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      // @ts-expect-error — fetchpriority is a valid HTML attribute
      fetchpriority={eager ? "high" : "low"}
      onError={handleError}
      onLoad={handleLoad}
      className="max-h-full max-w-full object-contain opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-500 ease-out"
    />
  );
}

export function BrandsMarquee({
  eyebrow = "Trusted Manufacturers",
  title,
  copy = "Genuine tyres from the world's most trusted manufacturers for all vehicle types.",
  filter,
}: {
  eyebrow?: string;
  title?: React.ReactNode;
  copy?: string;
  filter?: string[];
}) {
  const [brands, setBrands] = useState<BrandEntry[]>(() => {
    try {
      const cached = localStorage.getItem(BRANDS_CACHE_KEY);
      return cached ? (JSON.parse(cached) as BrandEntry[]) : [];
    } catch { return []; }
  });
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    let alive = true;
    fetchBrandsWithRetry()
      .then((list) => {
        if (!alive || !list.length) return;
        setBrands(list);
        try { localStorage.setItem(BRANDS_CACHE_KEY, JSON.stringify(list)); }
        catch { /* ignore quota */ }
      })
      .catch(() => { /* keep cached */ });
    return () => { alive = false; };
  }, []);

  const list = useMemo(() => {
    if (!filter?.length) return brands;
    const set = new Set(filter.map((s) => s.toLowerCase()));
    const matched = brands.filter((b) => set.has(b.name.toLowerCase()));
    return matched.length ? matched : brands;
  }, [brands, filter]);

  const track = list.length ? [...list, ...list] : [];

  return (
    <section className="py-14 md:py-16 lg:py-20 bg-white border-y border-border">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-[10px] md:text-xs font-semibold tracking-[0.25em] uppercase text-royal">
            {eyebrow}
          </div>
          <h2 className="mt-3 h2-display text-navy">
            {title ?? (
              <>Leading Tyre Brands <span className="italic text-royal">We Supply</span></>
            )}
          </h2>
          <p className="mt-3 text-sm md:text-base text-muted-foreground leading-relaxed">
            {copy}
          </p>
        </div>
      </div>

      <div
        className="mt-8 md:mt-10 relative overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-28 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-28 bg-gradient-to-l from-white to-transparent z-10" />

        <div
          className="flex gap-6 md:gap-10 w-max animate-brand-scroll"
          style={{ animationPlayState: paused ? "paused" : "running" }}
        >
          {track.map((b, i) => (
            <div
              key={`${b.name}-${i}`}
              className="shrink-0 h-12 md:h-16 w-28 md:w-36 flex items-center justify-center px-2"
            >
              <LogoImg brand={b} eager={i < list.length} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
