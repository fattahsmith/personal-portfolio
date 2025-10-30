"use client";

import * as React from "react";

type SplitTextProps = {
    text: string;
    delayPerChar?: number;   // ms delay tiap karakter
    className?: string;
};

export default function SplitText({
    text,
    delayPerChar = 50,
    className,
}: SplitTextProps) {
    const chars = Array.from(text);

    return (
        <span className={ className ?? "" }>
            { chars.map((char, i) => (
                <span
                    key={ i }
                    style={ {
                        display: "inline-block",
                        opacity: 0,
                        transform: "translateY(0.5em)",
                        transition: `opacity 0.3s ease, transform 0.3s ease`,
                        transitionDelay: `${i * delayPerChar}ms`,
                    } }
                    className="will-change-transform will-change-opacity"
                >
                    { char === " " ? "\u00A0" : char }
                </span>
            )) }
        </span>
    );
}
