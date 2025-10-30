"use client";

import * as React from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

type MenuItem = {
    label: string;
    href?: string;
    onClick?: () => void;
    icon?: React.ReactNode;
};

type Props = {
    items: MenuItem[];
    className?: string;
    align?: "left" | "right"; // posisi dropdown relatif ke tombol
};

const backdrop: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
    exit: { opacity: 0 },
};

const list: Variants = {
    hidden: { opacity: 0, y: 6, pointerEvents: "none" as any },
    show: { opacity: 1, y: 0, transition: { when: "beforeChildren", staggerChildren: 0.06, duration: 0.18 } },
    exit: { opacity: 0, y: 6, transition: { when: "afterChildren", duration: 0.12 } },
};

const item: Variants = {
    hidden: { opacity: 0, y: 8, filter: "blur(4px)" },
    show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] } },
    exit: { opacity: 0, y: 8, filter: "blur(4px)", transition: { duration: 0.14 } },
};

export default function StaggeredMenu({ items, className, align = "right" }: Props) {
    const [open, setOpen] = React.useState(false);
    const btnRef = React.useRef<HTMLButtonElement>(null);
    const listRef = React.useRef<HTMLDivElement>(null);

    // close on click outside / Esc
    React.useEffect(() => {
        function onDocClick(e: MouseEvent) {
            if (!open) return;
            if (
                !listRef.current?.contains(e.target as Node) &&
                !btnRef.current?.contains(e.target as Node)
            ) setOpen(false);
        }
        function onKey(e: KeyboardEvent) {
            if (e.key === "Escape") setOpen(false);
        }
        document.addEventListener("mousedown", onDocClick);
        document.addEventListener("keydown", onKey);
        return () => {
            document.removeEventListener("mousedown", onDocClick);
            document.removeEventListener("keydown", onKey);
        };
    }, [open]);

    return (
        <div className={ `relative ${className ?? ""}` }>
            <button
                ref={ btnRef }
                onClick={ () => setOpen((v) => !v) }
                aria-haspopup="menu"
                aria-expanded={ open }
                className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-4 py-2 text-sm text-white hover:bg-zinc-800"
            >
                Menu
                <svg width="14" height="14" viewBox="0 0 20 20" className={ `transition-transform ${open ? "rotate-180" : ""}` }>
                    <path fill="currentColor" d="M5.5 7.5L10 12l4.5-4.5H5.5z" />
                </svg>
            </button>

            <AnimatePresence>
                { open && (
                    <>
                        {/* optional tiny backdrop to catch outside clicks (transparent) */ }
                        <motion.div
                            variants={ backdrop }
                            initial="hidden"
                            animate="show"
                            exit="exit"
                            className="fixed inset-0 z-10 bg-black/0"
                        />

                        <motion.div
                            ref={ listRef }
                            variants={ list }
                            initial="hidden"
                            animate="show"
                            exit="exit"
                            role="menu"
                            aria-label="Main menu"
                            className={ `absolute z-20 mt-2 min-w-[220px] rounded-xl border border-white/10 bg-zinc-900/90 p-1 backdrop-blur
                         ${align === "right" ? "right-0" : "left-0"}` }
                        >
                            { items.map((it, i) => {
                                const Cmp = it.href ? "a" : "button";
                                const common =
                                    "flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm text-zinc-200 hover:bg-white/10 focus:bg-white/10 outline-none";
                                return (
                                    <motion.div key={ i } variants={ item }>
                                        <Cmp
                                            { ...(it.href ? { href: it.href } : { onClick: it.onClick }) }
                                            role="menuitem"
                                            className={ common }
                                            onClick={ () => setOpen(false) }
                                        >
                                            { it.icon ? <span className="text-zinc-400">{ it.icon }</span> : null }
                                            <span>{ it.label }</span>
                                        </Cmp>
                                    </motion.div>
                                );
                            }) }
                        </motion.div>
                    </>
                ) }
            </AnimatePresence>
        </div>
    );
}
