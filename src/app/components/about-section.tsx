"use client";
import Image from 'next/image';
import * as React from "react";
import { motion, type Variants, useScroll, useTransform } from "framer-motion";
import GlassCard from "./glass-card";
import RollingGallery from "../components/RollingGallery";
import { MdVerified } from "react-icons/md";
import GlassIcons, { type TechItem } from "./GlassIcons";


const fadeUp: Variants = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};
const stagger: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };

const verif: TechItem[] = [
    {
        icon: <MdVerified />, color: "blue", label: "verified"
    },


];


function SplitLetters({ text, className }: { text: string; className?: string }) {
    return (
        <motion.h2
            variants={ stagger }
            initial="hidden"
            whileInView="show"
            viewport={ { once: true, amount: 0.5 } }
            className={ className }
        >
            { Array.from(text).map((ch, i) => (
                <motion.span
                    key={ i }
                    variants={ {
                        hidden: { opacity: 0, y: 16, filter: "blur(4px)" },
                        show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.35 } },
                    } }
                    className="inline-block"
                >
                    { ch === " " ? "\u00A0" : ch }
                </motion.span>
            )) }
        </motion.h2>
    );
}


export default function AboutSection() {
    const ref = React.useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
    
    const bottomY = useTransform(scrollYProgress, [0, 1], [0, -40]);

    return (
        <section id="about" ref={ ref } className="mx-auto max-w-6xl px-6 py-12 md:py-16">
            {/* Grid atas: kiri profile – kanan about */ }
            <div className="grid grid-cols-1 gap-5 md:grid-cols-[340px_1fr] md:items-stretch ">
                {/* LEFT – Profile card */ }
                <motion.div
                    variants={ fadeUp }
                    initial="hidden"
                    whileInView="show"
                    viewport={ { once: true, amount: 0.4 } }
                >
                    <GlassCard className="p-6 md:p-8 h-full">
                        <div className="flex flex-col items-center text-center">
                            {/* Avatar */ }
                            <div className="relative mb-4">
                                <img
                                    src="/img/me/photo.jpg"
                                    alt="avatar"
                                    className="size-28 rounded-full object-cover ring-2 ring-white/10"
                                />
                           
                            </div>

                            
                            <div className="flex items-center gap-1 text-lg font-medium">
                                <span>fathr_smith</span>
                              
                                <MdVerified className="text-blue-500 text-base" />
                            </div>

                         
                            <div className="text-sm text-zinc-400">M.fattah rifqy smith</div>

                          
                            <div className="mt-4 flex items-center gap-3">
                                { [
                                    {
                                        name: "instagram",
                                        url: "https://www.instagram.com/fathr_smith/",
                                        icon: "https://cdn-icons-png.flaticon.com/512/3955/3955024.png",
                                    },
                                    {
                                        name: "linkedin",
                                        url: "https://www.linkedin.com/in/m-fattah-rifqy-smith-397576371/?originalSubdomain=id",
                                        icon: "https://cdn-icons-png.flaticon.com/512/3536/3536505.png",
                                    },
                                    {
                                        name: "whatsapp",
                                        url: "https://wa.me/62895385294235", 
                                        icon: "https://cdn-icons-png.flaticon.com/512/733/733585.png",
                                    },
                                    {
                                        name: "whatsapp",
                                        url: "https://github.com/fattahsmith", 
                                        icon: "https://img.icons8.com/?size=100&id=akG4VRhAoSii&format=png&color=000000",
                                    },
                                ].map((item, i) => (
                                    <a
                                        key={ i }
                                        href={ item.url }
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={ item.name }
                                        className="grid size-8 place-items-center rounded-full bg-white/10 hover:bg-white/20 transition duration-300 hover:scale-110 hover:shadow-[0_0_10px_#60a5fa]"
                                    >
                                        <img
                                            src={ item.icon }
                                            alt={ `${item.name} icon` }
                                            className="w-4 h-4 object-contain"
                                        />
                                    </a>
                                )) }
                            </div>

                            {/* Rolling Gallery */ }
                            <RollingGallery autoplay pauseOnHover className="mt-6" height={ 160 } />
                        </div>

                    </GlassCard>
                </motion.div>

                {/* RIGHT – About text */ }
                <motion.div
                    variants={ stagger }
                    initial="hidden"
                    whileInView="show"
                    viewport={ { once: true, amount: 0.3 } }
                    className="h-full"
                >
                    <GlassCard className="p-6 md:p-8 h-full">
                        <SplitLetters text="About Me" className="mb-5 text-2xl font-semibold" />

                        <motion.p variants={ fadeUp } className="text-zinc-300 leading-relaxed">
                            Halo! 👋 Saya adalah seorang pelajar SMK jurusan Rekayasa Perangkat Lunak (RPL) yang
                            memiliki minat besar di dunia teknologi dan desain digital. Saat ini saya menguasai
                            UI/UX Design dan Web Development, serta terus mengembangkan kemampuan dalam Graphic
                            Design untuk memperluas kreativitas saya.
                        </motion.p>

                        <motion.p variants={ fadeUp } className="mt-4 text-zinc-300 leading-relaxed">
                            Bagi saya, teknologi bukan hanya soal kode, tetapi juga tentang bagaimana membuat
                            pengalaman pengguna lebih nyaman dan menyenangkan. Melalui keterampilan di bidang
                            desain antarmuka dan pengembangan web, saya ingin menciptakan produk digital yang
                            bermanfaat, modern, dan ramah pengguna.
                        </motion.p>

                        {/* stats */ }
                        <motion.div variants={ fadeUp } className="mt-6 flex gap-10 mb-10">
                            <div>
                                <div className="flex items-center gap-2">
                                    <span className="size-2 rounded-full bg-sky-400" />
                                    <span className="text-xl font-semibold">20+</span>
                                </div>
                                <div className="mt-1 text-[11px] uppercase tracking-wide text-zinc-400">Projects</div>
                            </div>
                            <div>
                                <div className="flex items-center gap-2">
                                    <span className="size-2 rounded-full bg-sky-400" />
                                    <span className="text-xl font-semibold">2 Years</span>
                                </div>
                                <div className="mt-1 text-[11px] uppercase tracking-wide text-zinc-400">Experience</div>
                            </div>
                        </motion.div>
                    </GlassCard>
                </motion.div>
            </div>

            {/* Bottom wide card */ }

        </section>
    );
}
