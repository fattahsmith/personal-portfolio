"use client";

import { section } from "framer-motion/client";
import { motion } from "motion/react";

export type Certificate = {
    title: string;
    image: string;
    issuer: string;
    date: string;
    tags?: string[];
    href?: string;
};

const item = {
    hidden: { opacity: 0, y: 24 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
    },
};

export default function CertificateCard({
    title,
    image,
    issuer,
    date,
    tags = [],
    href = "#",
    index = 0,
}: Certificate & { index?: number }) {
    return (
    <section id="certif" >
        <motion.article
            variants={ item }
            className="
        group relative rounded-2xl border border-white/10 bg-white/[0.06]
        p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]
        transition-transform duration-300 hover:-translate-y-1
        hover:bg-white/[0.08]
      "
        >
            {/* gambar */ }
            <div className="overflow-hidden rounded-xl">
                <img
                    src={ image }
                    alt={ title }
                    className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
            </div>

            {/* konten */ }
            <div className="space-y-2 px-1 pt-3">
                <h3 className="text-lg font-semibold leading-tight">{ title }</h3>
                <p className="text-sm text-zinc-400">
                    { issuer } • <span className="text-zinc-300">{ date }</span>
                </p>

                { tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-1">
                        { tags.map((t) => (
                            <span
                                key={ t }
                                className="
                  rounded-full border border-white/10 bg-white/5 px-2.5 py-1
                  text-xs text-zinc-300
                "
                            >
                                { t }
                            </span>
                        )) }
                    </div>
                ) }
            </div>

            {/* CTA */ }
            <div className="mt-4 flex justify-end px-1">
                <a
                    href={ href }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
            inline-flex items-center gap-2 rounded-full border border-white/10
            bg-white/10 px-3.5 py-1.5 text-xs font-medium text-white
            transition-all hover:bg-white/20 focus-visible:outline-none
            focus-visible:ring-2 focus-visible:ring-white/30
          "
                >
                    View certificate
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10" />
                    </svg>
                </a>
            </div>

            {/* glow halus saat hover */ }
            <div
                className="
          pointer-events-none absolute inset-0 -z-10 rounded-2xl opacity-0
          transition-opacity duration-300
          group-hover:opacity-100
          bg-[radial-gradient(600px_circle_at_var(--x)_var(--y),rgba(56,189,248,.12),transparent_40%)]
        "
                /* efek follow-mouse sederhana via CSS var */
                onMouseMove={ (e) => {
                    const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
                    (e.currentTarget as HTMLDivElement).style.setProperty(
                        "--x",
                        `${e.clientX - rect.left}px`
                    );
                    (e.currentTarget as HTMLDivElement).style.setProperty(
                        "--y",
                        `${e.clientY - rect.top}px`
                    );
                } }
            />
        </motion.article>
        </section>
    );
}
