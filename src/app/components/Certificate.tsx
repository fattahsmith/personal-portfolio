"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { useRouter } from "next/navigation"; // ✅ Tambahkan ini
import AchievementCard from "../components/AchievementCard";
import SplitLetters from "../components/Split-text";
import Link from "next/link";


const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.06 } },
};

const ACHIEVEMENTS = [
    {
        title: "UI/UX Certificate",
        image: "/img/ui.png",
        issuer: "Myskills",
        date: "August 2025",
        skills: ["Design Ui/Ux", "Wireframing", "Prototyping"],
        href: "#",
    },
    {
        title: "Intro to Software Engineering",
        image: "/img/sofwareen.png",
        issuer: "Revou",
        date: "July 2025",
        skills: ["HTML", "CSS", "JavaScript"],
        href: "#",
    },
    {
        title: "Dasar Ai",
        image: "/img/ai.png",
        issuer: "Dicoding",
        date: "Oktober 2025",
        skills: ["Basic Ai", "Deep learning", "Machine Learning", "Reinforcement learning"],
        href: "#",
    },
    {
        title: "Participant of Accountanting Competition",
        image: "/img/dina.jpg",
        issuer: "Djota",
        date: "Jan 2025",
        skills: ["Microsoft Access", "MySQL"],
        href: "#",
    },
    {
        title: "Microsoft Certificate",
        image: "/img/microsoft.png",
        issuer: "Microsoft",
        date: "August 2024",
        skills: ["Office Suite", "Excel", "Word"],
        href: "#",
    },
    {
        title: "Design Systems & Tokens",
        image: "/img/psg.jpg",
        issuer: "Figma",
        date: "Aug 2024",
        skills: ["Design Tokens", "Components", "Variants"],
        href: "#",
    },
];

export default function AchievementsPage() {
    const [count] = useState(3);
    const router = useRouter(); // ✅ Router untuk pindah halaman

    const shown = ACHIEVEMENTS.slice(0, count);

    return (
        <main className="min-h-dvh bg-black text-white">
            <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
                {/* Heading */ }
                <div className="mb-8 text-center md:mb-10">
                    <h1 className="mb-2 text-3xl font-semibold md:text-4xl">
                        <SplitLetters text="Achievements & Certificates" />
                    </h1>
                    <p className="text-zinc-400 md:text-lg">
                        A selection of certifications and milestones that shaped my craft.
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
                    { shown.map((a, i) => (
                        <AchievementCard key={ a.title } index={ i } { ...a } />
                    )) }
                </motion.div>

                {/* See All Button */ }
                <div className="mt-10 flex justify-center">
                    <Link
                        href="/certificate"
                        className="inline-flex items-center rounded-full border border-white/10 bg-white/10 px-5 py-2.5 text-sm font-medium transition-all hover:bg-white/20"
                    >
                        See all certificates
                    </Link>
                </div>
            </section>

          
        </main>
    );
}
