"use client";
import * as React from "react";
import { cn } from "../lib/cn"; 

type Props = React.PropsWithChildren<{
    className?: string;
}>;

/** Glass surface dengan border glow lembut */
export default function GlassCard({ className, children }: Props) {
    return (
        <div
            className={ cn?.(
                "relative rounded-3xl border border-white/10 bg-gradient-to-b from-zinc-800/40 to-zinc-900/50",
                "shadow-[0_0_0_1px_rgba(255,255,255,0.06)] backdrop-blur-md",
                "before:pointer-events-none before:absolute before:inset-0 before:rounded-3xl",
                "before:shadow-[inset_0_1px_0_rgba(255,255,255,0.15),0_0_40px_rgba(59,130,246,0.12)]",
                className
            ) ?? [
                "relative rounded-3xl border border-white/10 bg-gradient-to-b from-zinc-800/40 to-zinc-900/50",
                "shadow-[0_0_0_1px_rgba(255,255,255,0.06)] backdrop-blur-md",
                "before:pointer-events-none before:absolute before:inset-0 before:rounded-3xl",
                "before:shadow-[inset_0_1px_0_rgba(255,255,255,0.15),0_0_40px_rgba(59,130,246,0.12)]",
                className,
            ].join(" ") }
        >
            { children }
        </div>
    );
}
