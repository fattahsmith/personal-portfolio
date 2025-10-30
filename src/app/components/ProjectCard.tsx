"use client";

import { motion } from "motion/react";

type ProjectCardProps = {
    title: string;
    image: string;          
    description: string;
    tools: string[];         
    href?: string;           
    index?: number;          
};

const fadeUp = {
    hidden: { opacity: 0, y: 18 },
    show: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { delay: 0.06 * i, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    }),
};

export default function ProjectCard({
    title,
    image,
    description,
    tools,
    href,
    index = 0,
}: ProjectCardProps) {
    return (
        <motion.article
            custom={ index }
            variants={ fadeUp }
            initial="hidden"
            whileInView="show"
            viewport={ { once: true, amount: 0.35 } }
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md transition-all duration-300 hover:shadow-[0_0_0_1px_rgba(255,255,255,.12),0_15px_60px_rgba(0,0,0,.35)]"
        >
            {/* Image */ }
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl">
                <img
                    src={ image }
                    alt={ title }
                    className="h-full w-full scale-[1.01] object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* gradient gloss */ }
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>

            {/* Content */ }
            <div className="mt-4 space-y-3">
                <h3 className="text-lg font-semibold tracking-tight">{ title }</h3>
                <p className="text-sm leading-relaxed text-zinc-300">{ description }</p>

                {/* Tools */ }
                <ul className="mt-1 flex flex-wrap gap-2">
                    { tools.map((t) => (
                        <li
                            key={ t }
                            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200"
                        >
                            { t }
                        </li>
                    )) }
                </ul>
            </div>

            {/* CTA */ }
            { href && (
                <a
                    href={ href }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex w-full items-center justify-center rounded-xl border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/20"
                >
                    View Project ↗
                </a>
            ) }

            {/* subtle hover lift */ }
            <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/5 transition-[transform,opacity] duration-300 group-hover:-translate-y-1 group-hover:opacity-100" />
        </motion.article>
    );
}
