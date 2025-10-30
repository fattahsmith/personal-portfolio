"use client";

import { motion } from "motion/react";
import Link from "next/link";
import CertificateCard from "../components/AchievementCard";
import SplitLetters from "../components/Split-text";

// animasi container
const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08 } },
};

// data sertifikat
const CERTIFICATES = [
    {
        title: "UI/UX Certificate",
        image: "/img/ui.png",
        issuer: "Myskills",
        date: "August 2025",
        tags: ["UI Design", "Wireframing", "Prototyping"],
        href: "#",
    },
    {
        title: "Intro to Software Engineering",
        image: "/img/sofwareen.png",
        issuer: "RevoU",
        date: "July 2025",
        tags: ["HTML", "CSS", "JavaScript"],
        href: "#",
    },
    {
        title: "AI Fundamentals",
        image: "/img/ai.png",
        issuer: "Dicoding",
        date: "October 2025",
        tags: ["AI Basics"],
        href: "#",
    },
    {
        title: "Microsoft Certificate",
        image: "/img/microsoft.png",
        issuer: "Microsoft",
        date: "August 2024",
        tags: ["Security", "Compliance", "Identity (SCI) Fundamentals"],
        href: "https://drive.google.com/file/d/17COKhCkxpMGM8EA3J6w0nI6IGq4_QZyi/view?usp=sharing",
    },
    {
        title: "Internship Certificate",
        image: "/img/psg.jpg",
        issuer: "Lab Akselerasi",
        date: "September 2024",
        tags: ["Web Development"],
        href: "#",
    },

    {
        title: "Participant of Accountanting Competition",
        image: "/img/dina.jpg",
        issuer: "Djota",
        date: "Jan 2025",
        tags: ["Microsoft Access", "MySQL"],
        href: "#",
    },

    {
        title: "WorkShop Golang",
        image: "/img/golang.png",
        issuer: "WAOW",
        date: "Desember 2024",
        tags: ["Golang"],
        href: "https://drive.google.com/file/d/1YBhkI9k9eHbrT32Jm53PTItNu5nfrjAw/view?usp=sharing",
    },

    {
        title: "Workshop React JS ",
        image: "/img/react.png",
        issuer: "WAOW",
        date: "Jan 2025",
        tags: ["Microsoft Access", "MySQL"],
        href: "#",
    },

    {
        title: "Participation Certificate ",
        image: "/img/part.png",
        issuer: "InfraDigital",
        date: "August 2024",
        tags: ["Participant"],
        href: "https://drive.google.com/drive/folders/14leS15wWEhA-guAvhNHfOSRue8VEWHxN",
    },
];

export default function CertificatePage() {
    return (
        <main className="min-h-screen bg-black text-white relative overflow-hidden">
            {/* Tombol Back */ }
            <div className="absolute top-6 left-6">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium hover:bg-white/20 transition-all"
                >
                    ← Back to Home
                </Link>
            </div>

            <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
                {/* Judul Section */ }
                <div className="mb-8 text-center md:mb-10">
                    <h1 className="mb-2 text-3xl font-semibold md:text-4xl">
                        <SplitLetters text="Certificates" />
                    </h1>
                    <p className="text-zinc-400 md:text-lg">
                        A curated collection of achievements and credentials.
                    </p>
                    <p className="text-red-500 lg:text-sm md:text-lg">
                       ! Refresh this website if the certificate doesn't appear
                    </p>
                </div>

                {/* Grid Certificate */ }
                <motion.div
                    variants={ container }
                    initial="hidden"
                    whileInView="show"
                    viewport={ { once: true, amount: 0.25 } }
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 overflow-y-auto max-h-[70vh] p-2 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-md"
                >
                    { CERTIFICATES.map((c, i) => (
                        <CertificateCard key={ i } { ...c } />
                    )) }
                </motion.div>
            </section>
        </main>
    );
}
