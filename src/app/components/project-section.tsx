"use client";

import { useState } from "react";
import { motion } from "motion/react";
import ProjectCard from "../components/ProjectCard";
import SplitLetters from "../components/Split-text";

const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.06 } },
};

const PROJECTS = [
   
    {
        title: "Redesign Jago App",
        image: "/img/jago.png",
        description:
            "Redesign situs web Bank Jago berfokus pada peningkatan pengalaman pengguna (UX) dengan menyederhanakan navigasi dan informasi, terutama untuk fitur-fitur tertentu",
        tools: ["Figma"],
        href: "https://www.figma.com/design/G67cgm0S1OVpFIDw2d1V4T/Redesign-Jago-Web?node-id=0-1&t=r26y3MCBKZDNh2Id-1",
    },
    {
        title: "Desain Ticketing App",
        image: "/img/web4.png",
        description:
            "Ticketing App adalah platform pemesanan perjalanan yang memudahkan pengguna untuk mencari dan memesan tiket pesawat, hotel, serta paket liburan dalam satu tempat dengan tampilan modern.",
        tools: ["Figma",],
        href: "https://www.figma.com/design/cpj2a5va7okR04rGBp5gPW/Ticketing-App?node-id=0-1&t=r26y3MCBKZDNh2Id-1",
    },
    {
        title: "Desain Found That",
        image: "/img/web5.png",
        description:
            "Desain Aplikasi mobile untuk pemesanan tiket MRT dan LRT dengan fitur live tracking yang memudahkan pengguna memantau posisi kereta secara real-time.",
        tools: ["Figma"],
        href: "https://www.figma.com/design/CCoPS4YucgwEdEIBHy2aoR/Untitled?t=r26y3MCBKZDNh2Id-1",
    },

     {
        title: "Desain Coffe Shop",
        image: "/img/coffeweb.png",
        description:
            "platform digital yang berfungsi sebagai etalase virtual kafe . Website ini menampilkan segala hal tentang coffe shop , mulai dari cerita di balik brand, menu yang ditawarkan (termasuk varian kopi dan makanan pendamping), hingga informasi promosi",
        tools: ["Figma"],
        href: "https://www.figma.com/design/0bEQ6955xTd1xkvTSg607r/Untitled?node-id=0-1&t=uZ2kuTT55TqoQumG-1",
    },

    {
        title: "Qr Code Generator",
        image: "/img/qr.png",
        description:
            "ubah informasi tautan menjadi gambar QR code yang dapat dipindai.",
        tools: ["Next.js", "TypeScript", "shadcn/ui"],
        href: "https://qrcode-generator-lemon-gamma.vercel.app/",
    },

    {
        title: "Recomendation Movie Web",
        image: "/img/movie.png",
        description:
            "Landing page bertema travel dengan hero yang interaktif, section destinasi, dan CTA yang jelas.",
        tools: ["Laravel", "TailwindCSS", "Vite", "Api"],
        href: "#"
    },
    {
        title: "Website English Course",
        image: "/img/web2.png",
        description:
            "Website kursus bahasa Inggris dengan tampilan modern dan responsif. Menyediakan informasi program belajar, profil tutor, serta kontak informasi untuk mempermudah calon siswa bergabung.",
        tools: ["Html", "CSS", "JavaScript"],
        href: "agnes-course.vercel.app",
    },
   
    
];

export default function ProjectsPage() {
    const [count, setCount] = useState(3); // tampilkan 3 dulu

    const shown = PROJECTS.slice(0, count);
    const hasMore = count < PROJECTS.length;

    return (
        <section id="projects" className="min-h-dvh bg-black text-white">
            <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
                {/* Heading */ }
                <div className="mb-8 text-center md:mb-10">
                    <h1 className="mb-2 text-3xl font-semibold md:text-4xl">
                        <SplitLetters text="Selected Projects" />
                    </h1>
                    <p className="text-zinc-400 md:text-lg">
                        A few recent works—more coming soon.
                    </p>
                </div>

                {/* Grid */ }
                <motion.div
                    variants={ container }
                    initial="hidden"
                    whileInView="show"
                    viewport={ { once: true, amount: 0.25 } }
                    className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
                >
                    { shown.map((p, i) => (
                        <ProjectCard key={ p.title } index={ i } { ...p } />
                    )) }
                </motion.div>

                {/* Load more / show less */ }
                <div className="mt-10 flex justify-center">
                    { hasMore ? (
                        <button
                            onClick={ () => setCount((c) => c + 3) }
                            className="inline-flex items-center rounded-full border border-white/10 bg-white/10 px-5 py-2.5 text-sm font-medium transition-all hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
                        >
                            Show more projects
                        </button>
                    ) : (
                        <button
                            onClick={ () => setCount(3) }
                            className="inline-flex items-center rounded-full border border-white/10 bg-white/10 px-5 py-2.5 text-sm font-medium transition-all hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
                        >
                            Show less
                        </button>
                    ) }
                </div>
            </section>
        </section>
    );
}
