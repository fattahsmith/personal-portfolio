"use client";

import * as React from "react";

/** Item untuk satu ikon tech stack */
export type TechItem = {
  icon: React.ReactNode;
  color: string;            // contoh: 'blue'|'purple'|'red'|'orange'|'indigo'|'green'|'cyan'|'yellow'|hex
  label?: string;
  customClass?: string;
};

/** Props komponen GlassIcons */
type Props = {
  items: TechItem[];
  /** skala ikon (1.2–1.5 pas untuk stack kecil); default 1.3 */
  size?: number;
  /** jarak antar ikon; default "0.8em" */
  gap?: string;
  /** jumlah kolom di mobile; default 6 */
  cols?: 3 | 4 | 5 | 6;
  /** jumlah kolom di md+; default 10 */
  colsMd?: 8 | 9 | 10 | 12;
  /** sembunyikan label di bawah ikon; default true (tooltip saja) */
  noLabel?: boolean;
  /** class tambahan untuk container */
  className?: string;
};

const GRADIENTS: Record<string, string> = {
  blue: "linear-gradient(hsl(223 90% 50%), hsl(208 90% 50%))",
  purple: "linear-gradient(hsl(283 90% 50%), hsl(268 90% 50%))",
  red: "linear-gradient(hsl(3   90% 50%), hsl(348 90% 50%))",
  indigo: "linear-gradient(hsl(253 90% 50%), hsl(238 90% 50%))",
  orange: "linear-gradient(hsl(43  90% 50%), hsl(28  90% 50%))",
  green: "linear-gradient(hsl(123 90% 40%), hsl(108 90% 40%))",
  cyan: "linear-gradient(hsl(188 95% 45%), hsl(198 95% 45%))",
  yellow: "linear-gradient(hsl(48  95% 55%), hsl(38  95% 55%))",
};

function bgFor(color: string) {
  return GRADIENTS[color] ? { background: GRADIENTS[color] } : { background: color };
}

function mobileCols(c: Props["cols"]) {
  switch (c) {
    case 3: return "grid-cols-3";
    case 4: return "grid-cols-4";
    case 5: return "grid-cols-5";
    case 6:
    default: return "grid-cols-6";
  }
}
function mdCols(c: Props["colsMd"]) {
  switch (c) {
    case 8: return "md:grid-cols-8";
    case 9: return "md:grid-cols-9";
    case 12: return "md:grid-cols-12";
    case 10:
    default: return "md:grid-cols-10";
  }
}

/** Ikon-ikon kaca bulat (glass) untuk tech stack. */
export default function GlassIcons({
  items,
  size = 1.3,
  gap = "0.8em",
  cols = 6,
  colsMd = 10,
  noLabel = true,
  className = "",
}: Props) {
  const diameter = `${size * 2.0}em`;     // total diameter bulat
  const radius = "9999px";
  const iconWH = `${size * 0.9}em`;

  // hover lembut (tidak keluar card)
  const hoverXY = `${Math.max(2, Math.round(size * 1.5))}px`;
  const hoverZ = `${Math.max(4, Math.round(size * 2.5))}px`;

  return (
    <div
      className={ [
        "grid w-full h-full place-items-center overflow-hidden",
        mobileCols(cols),
        mdCols(colsMd),
        className,
      ].join(" ") }
      style={ { gap } }
    >
      { items.map((item, idx) => (
        <button
          key={ idx }
          type="button"
          aria-label={ item.label || "tech" }
          className={ [
            "group relative outline-none select-none transition-transform",
            "[-webkit-tap-highlight-color:transparent]",
            "[perspective:24em] [transform-style:preserve-3d]",
            item.customClass || "",
          ].join(" ") }
          style={ { width: diameter, height: diameter } }
        >
          {/* layer gradient belakang */ }
          <span
            className="absolute inset-0 block origin-[100%_100%] transition duration-300 ease-[cubic-bezier(0.83,0,0.17,1)]"
            style={ {
              ...bgFor(item.color),
              borderRadius: radius,
              transform: "rotate(10deg)",
              boxShadow: "0.35em -0.35em 0.55em hsla(223, 10%, 10%, 0.15)",
            } }
          />

          {/* layer kaca */ }
          <span
            className="absolute inset-0 flex origin-[80%_50%] transition duration-300 ease-[cubic-bezier(0.83,0,0.17,1)] backdrop-blur-[0.75em] [-webkit-backdrop-filter:blur(0.75em)]"
            style={ {
              borderRadius: radius,
              background: "hsla(0,0%,100%,0.12)",
              boxShadow: "0 0 0 0.08em hsla(0,0%,100%,0.28) inset",
            } }
          >
            <span
              className="m-auto flex items-center justify-center"
              style={ { width: iconWH, height: iconWH } }
              aria-hidden="true"
            >
              { item.icon }
            </span>
          </span>

          {/* Tooltip kecil di atas ikon */ }
          { item.label && (
            <span
              className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 rounded-md bg-zinc-800/90 text-white text-xs font-medium opacity-0 pointer-events-none transition-all duration-300 group-hover:opacity-100 group-hover:-translate-y-[0.2rem]"
            >
              { item.label }
            </span>
          ) }

          {/* Label statis (jika noLabel=false) */ }
          { !noLabel && (
            <span className="absolute top-full left-0 right-0 text-center whitespace-nowrap leading-[1.6] text-[0.85rem] text-white/90">
              { item.label }
            </span>
          ) }

          {/* CSS in JS untuk hover transform */ }
          <style jsx>{ `
            button.group:hover span:first-child {
              transform: rotate(16deg) translate3d(-${hoverXY}, -${hoverXY}, ${hoverZ});
            }
            button.group:hover span:nth-child(2) {
              transform: translateZ(${hoverZ});
            }
          `}</style>
        </button>
      )) }
    </div>
  );
}
