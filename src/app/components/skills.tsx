"use client";

import { motion, type Variants } from "motion/react";
import GlassCard from "./glass-card";
import SplitLetters from "./Split-text";
import GlassIcons, { type TechItem } from "./GlassIcons";

import { FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaFigma, FaPython, FaPhp, FaLaravel } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiTypescript } from "react-icons/si";
import { DiPhotoshop } from "react-icons/di";
import { TbBrandAdobeXd } from "react-icons/tb";
import { FiFramer } from "react-icons/fi";
import { RiNextjsFill } from "react-icons/ri";

/* motion variants */
const fadeUp: Variants = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};
const floatLoop: Variants = {
    animate: { y: [0, -4, 0], transition: { duration: 6, repeat: Infinity, ease: "easeInOut" } },
};

export default function SkillsSection() {
    const Front: TechItem[] = [
        { icon: <FaHtml5 />, color: "orange", label: "HTML" },
        { icon: <FaCss3Alt />, color: "blue", label: "CSS" },
        { icon: <FaBootstrap />, color: "purple", label: "Bootstrap" },
        { icon: <SiTailwindcss />, color: "indigo", label: "TailwindCSS" },
        { icon: <SiJavascript />, color: "yellow", label: "JavaScript" },
    ];

    const Back: TechItem[] = [

        { icon: <SiTypescript />, color: "blue", label: "TypeScript" },
        { icon: <FaReact />, color: "blue", label: "React" },
        { icon: <RiNextjsFill />, color: "black", label: "Next Js" },
        { icon: <FaPython />, color: "yellow", label: "Python" },
        { icon: <FaPhp />, color: "purple", label: "PHP" },
        { icon: <FaLaravel />, color: "red", label: "Laravel" },

    ];





    const design: TechItem[] = [
        { icon: <FaFigma />, color: "red", label: "Figma" },
        { icon: <DiPhotoshop />, color: "blue", label: "Photoshop" },
        { icon: <FiFramer />, color: "black", label: "Framer" },
        { icon: < TbBrandAdobeXd />, color: "brown", label: "XD" },

     
    ];


    return (
        <section id="skills" className="py-16 md:py-20">
            <div className="mx-auto w-full max-w-6xl px-5 md:px-8  ">
                {/* Headings */ }
                <motion.h2
                    variants={ fadeUp }
                    initial="hidden"
                    whileInView="show"
                    viewport={ { once: true, amount: 0.35 } }
                    className="mb-2 text-center text-3xl font-semibold md:text-4xl"
                >
                    <SplitLetters text="The Tech Stack" />
                </motion.h2>

                <motion.p
                    variants={ fadeUp }
                    initial="hidden"
                    whileInView="show"
                    viewport={ { once: true, amount: 0.35 } }
                    className="mb-10 text-center text-zinc-400 md:text-lg"
                >
                    These are the tools I use most often to design & build delightful experiences.
                </motion.p>

                {/* Card */ }
                <GlassCard className="p-5 sm:p-6 md:p-8 mb-10">
                    <div className="mb-5 flex items-center justify-between gap-2">
                        <h3 className="text-xl font-medium md:text-2xl">Front-End</h3>
                        <span className="text-xs uppercase tracking-wide text-zinc-400">Core tools</span>
                    </div>

                    {/* wrapper agar ikon selalu di dalam kartu */ }
                    <motion.div variants={ floatLoop } animate="animate" className="relative w-full overflow-hidden">
                        <div className="relative mx-auto h-24 sm:h-28 md:h-32">
                            <GlassIcons
                                items={ Front }
                                className="absolute inset-0"  // isi seluruh area
                                size={ 1.35 }                  // kecil & rapi
                                gap="0.65em"                 // jarak antar ikon
                                cols={ 6 }                     // mobile
                                colsMd={ 10 }                  // md+
                                noLabel                      // gunakan tooltip saja
                            />
                        </div>
                    </motion.div>

                    <div className="mt-6 text-center text-xs text-zinc-500">
                        Hover an icon to see its name • Keyboard friendly:{ " " }
                        <kbd className="rounded bg-zinc-800 px-1 py-[2px]">Tab</kbd> to focus
                    </div>
                </GlassCard>

                {/* Card  Back-end*/ }
                <GlassCard className="p-5 sm:p-6 md:p-8 mb-10">
                    <div className="mb-5 flex items-center justify-between gap-2 ">
                        <h3 className="text-xl font-medium md:text-2xl">Back-end-End</h3>
                        <span className="text-xs uppercase tracking-wide text-zinc-400">Core tools</span>
                    </div>

                    {/* wrapper agar ikon selalu di dalam kartu */ }
                    <motion.div variants={ floatLoop } animate="animate" className="relative w-full overflow-hidden">
                        <div className="relative mx-auto h-24 sm:h-28 md:h-32">
                            <GlassIcons
                                items={ Back }
                                className="absolute inset-0"  // isi seluruh area
                                size={ 1.35 }                  // kecil & rapi
                                gap="0.65em"                 // jarak antar ikon
                                cols={ 6 }                     // mobile
                                colsMd={ 10 }                  // md+
                                noLabel                      // gunakan tooltip saja
                            />
                        </div>
                    </motion.div>

                    <div className="mt-6 text-center text-xs text-zinc-500">
                        Hover an icon to see its name • Keyboard friendly:{ " " }
                        <kbd className="rounded bg-zinc-800 px-1 py-[2px]">Tab</kbd> to focus
                    </div>
                </GlassCard>

                <GlassCard className="p-5 sm:p-6 md:p-8 pt-10">
                    <div className="mb-5 flex items-center justify-between gap-2">
                        <h3 className="text-xl font-medium md:text-2xl">Ui/Ux & Graphic Tools</h3>
                        <span className="text-xs uppercase tracking-wide text-zinc-400">Core tools</span>
                    </div>

                    {/* wrapper agar ikon selalu di dalam kartu */ }
                    <motion.div variants={ floatLoop } animate="animate" className="relative w-full overflow-hidden">
                        <div className="relative mx-auto h-24 sm:h-28 md:h-32">
                            <GlassIcons
                                items={ design }
                                className="absolute inset-0"  // isi seluruh area
                                size={ 1.35 }                  // kecil & rapi
                                gap="0.65em"                 // jarak antar ikon
                                cols={ 6 }                     // mobile
                                colsMd={ 10 }                  // md+
                                noLabel                      // gunakan tooltip saja
                            />
                        </div>
                    </motion.div>

                    <div className="mt-6 text-center text-xs text-zinc-500">
                        Hover an icon to see its name • Keyboard friendly:{ " " }
                        <kbd className="rounded bg-zinc-800 px-1 py-[2px]">Tab</kbd> to focus
                    </div>
                </GlassCard>
            </div>
        </section>
    );
}
