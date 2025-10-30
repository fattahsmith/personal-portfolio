"use client";

import * as React from "react";
import { motion, Variants } from "framer-motion";
import { MdVerified } from "react-icons/md";

type Mode = "chars" | "words";
type SplitTextProps = {
    text: string;
    mode?: Mode;                 // "chars" (default) atau "words"
    className?: string;          // styling wrapper
    stagger?: number;            // jarak delay antar potongan (detik)
    duration?: number;           // durasi tiap potongan (detik)
    once?: boolean;              // animasi sekali saat in-view
};

const child: Variants = {
    hidden: { y: "0.4em", opacity: 0, filter: "blur(4px)" },
    show: { y: "0em", opacity: 1, filter: "blur(0px)" },
};

export default function SplitText({
    text,
    mode = "chars",
    className,
    stagger = 0.04,
    duration = 0.35,
    once = true,
}: SplitTextProps) {
    const parts =
        mode === "words"
            ? text.split(/(\s+)/) // keep spaces as tokens
            : Array.from(text);   // unicode-safe chars

    const container: Variants = {
        hidden: {},
        show: {
            transition: { staggerChildren: stagger, when: "beforeChildren" },
        },
    };

    return (
        <motion.span
            className={ className }
            variants={ container }
            initial="hidden"
            whileInView="show"
            viewport={ { once, amount: 0.6 } }
            aria-label={ text }
        >
            { parts.map((p, i) => (
                <motion.span
                    key={ i }
                    variants={ child }
                    transition={ { duration, ease: [0.22, 1, 0.36, 1] } }
                    className="inline-block"
                    aria-hidden
                >
                    {/* preserve spaces */ }
                    { p === " " ? "\u00A0" : p }
                </motion.span>
            )) }
        </motion.span>
    );
}
