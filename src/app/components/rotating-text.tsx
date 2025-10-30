"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";

type RotatingTextProps = {
    items: string[];
    interval?: number;      // ms antar rotasi
    className?: string;
    prefix?: React.ReactNode;
    suffix?: React.ReactNode;
};

export default function RotatingText({
    items,
    interval = 2200,
    className,
    prefix,
    suffix,
}: RotatingTextProps) {
    const [index, setIndex] = React.useState(0);

    React.useEffect(() => {
        const id = setTimeout(
            () => setIndex((i) => (i + 1) % items.length),
            interval
        );
        return () => clearTimeout(id);
    }, [index, interval, items.length]);

    return (
        <span className={ `inline-flex items-baseline ${className ?? ""}` }>
            { prefix ? <span className="mr-1">{ prefix }</span> : null }

            <span className="relative inline-block h-[1em] overflow-hidden align-baseline">
                <AnimatePresence mode="wait" initial={ false }>
                    <motion.span
                        key={ index }
                        aria-live="polite"
                        initial={ { y: "100%", opacity: 0, filter: "blur(4px)" } }
                        animate={ { y: "0%", opacity: 1, filter: "blur(0px)" } }
                        exit={ { y: "-80%", opacity: 0, filter: "blur(4px)" } }
                        transition={ {
                            type: "spring",
                            stiffness: 550,
                            damping: 32,
                            mass: 0.7,
                        } }
                        className="block will-change-transform"
                    >
                        { items[index] }
                    </motion.span>
                </AnimatePresence>
            </span>

            { suffix ? <span className="ml-1">{ suffix }</span> : null }
        </span>
    );
}
