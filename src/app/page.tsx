"use client";
import { motion, useScroll, useTransform, Variants } from "framer-motion"; // ⬅️ tambahkan Variants
import { useRef } from "react";
import RotatingText from "./components/rotating-text";
import TiltedCard from "./components/TiltedCard";
import TargetCursor from './components/TargetCursor';
import SplitText from "./components/Split-text";
import AboutSection from "./components/about-section";
import SkillsSection from "./components/skills";
import ProjectsPage from "./components/project-section";
import AchievementsPage from "./components/Certificate";



const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const fade: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.6 } },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};



export default function Home() {
  return (
    <main className="min-h-dvh bg-black text-white">
      

      <div>
        <TargetCursor
          spinDuration={ 2 }
          hideDefaultCursor={ true }
        />
      </div>
      <section className="mx-auto max-w-screen px-4 sm:px-6 md:px-8 pt-16 md:pt-28">
        {/* GRID TOP */ }
        <div className="grid items-start gap-8 sm:gap-10 md:gap-12 md:grid-cols-2">
          {/* LEFT – copywriting */ }
          <motion.div
            variants={ stagger }
            initial="hidden"
            whileInView="show"
            viewport={ { once: true, amount: 0.4 } }
            className="space-y-8"
          >
            <motion.h1
              variants={ fadeUp }
              className="font-medium tracking-tight leading-[1.05] text-3xl sm:text-5xl md:text-[64px]"
            >
              <SplitText
                text="Hello word, I'm Smith!"
                className="bg-clip-text text-white bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400"
                mode="chars"     // "words" untuk per kata
                stagger={ 0.03 }
                duration={ 1 }
              />
            </motion.h1>

            <motion.p
              variants={ fadeUp }
              className="text-base sm:text-xl md:text-[28px] text-white pt-4 "
            >
              Experience in{ " " }
              <span
                className="inline-block align-baseline font-semibold
               text-white
              
               leading-none"
              >
                <RotatingText
                  items={ ["UI/UX Designer", "Web Developer", "Graphic Designer"] }
                  // pastikan komponen tidak menambah padding sendiri
                  className="!leading-none text-white"
                  interval={ 2000 }
                />
              </span>
            </motion.p>

            <motion.p
              variants={ fadeUp }
              className="max-w-[60ch] text-zinc-200 text-base sm:text-lg md:text-[40px] pt-4"
            >
              Iam a Web Developer and Ui/Ux Designer, Specializing in Front-End and Design for developing website and web applications.
            </motion.p>

            <motion.div variants={ fadeUp } className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-10 md:pt-20">
             
              <a
                href="fatttahsmith@gmail.com"
                className="inline-flex items-center justify-center w-full sm:w-auto gap-2 rounded-full bg-white px-8 py-5 text-sm font-medium text-black shadow-sm ring-1 ring-white/10 hover:bg-white"
              >
                ✉️ The Email
              </a>
            </motion.div>
          </motion.div>

          {/* RIGHT – card + dekorasi */ }
          <motion.div
            initial={ { opacity: 0, scale: 0.96, y: 16 } }
            whileInView={ { opacity: 1, scale: 1, y: 0 } }
            transition={ { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
            viewport={ { once: true, amount: 0.3 } }
            className="relative mx-auto w-[260px] sm:w-[320px] md:w-[360px]"
          >
            {/* gradient dots */ }
            <motion.span
              variants={ fade }
              initial="hidden"
              whileInView="show"
              viewport={ { once: true } }
              className="absolute -top-2 right-2 size-5 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-fuchsia-500"
            />
            <motion.span
              variants={ fade }
              initial="hidden"
              whileInView="show"
              viewport={ { once: true } }
              className="absolute -bottom-3 left-8 size-4 rounded-full bg-cyan-400"
            />
            {/* rings */ }
            <motion.span
              initial={ { opacity: 0 } }
              whileInView={ { opacity: 1 } }
              transition={ { delay: 0.2 } }
              viewport={ { once: true } }
              className="pointer-events-none absolute left-[-18px] top-1/2 size-12 -translate-y-1/2 rounded-full border border-white/15"
            />
            <motion.span
              initial={ { opacity: 0 } }
              whileInView={ { opacity: 1 } }
              transition={ { delay: 0.3 } }
              viewport={ { once: true } }
              className="pointer-events-none absolute right-[-18px] top-1/2 size-9 -translate-y-1/2 rounded-full border border-white/15"
            />

            <TiltedCard
              imageSrc={ "/img/me/me4.jpg" }
              altText="Ui/Ux Design"
              captionText="Fattah Smith"
              containerHeight="300px"
              containerWidth="300px"
              imageHeight="400px"
              imageWidth="400px"
              rotateAmplitude={ 12 }
              scaleOnHover={ 1.2 }
              showMobileWarning={ false }
               showTooltip={ true }
               displayOverlayContent={ false }
            />

          </motion.div>
        </div>

        {/* BOTTOM BAR */ }
        <motion.div
          variants={ stagger }
          initial="hidden"
          whileInView="show"
          viewport={ { once: true, amount: 0.3 } }
          className="mt-12 flex flex-col justify-between gap-8 border-t border-white/5 pt-8 md:flex-row"
        >
          {/* badges */ }
          <motion.div variants={ fadeUp } className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-zinc-400 mb-10 ">
            <span className="inline-flex items-center gap-2 text-[15px]">
              <span className="size-2 rounded-full bg-white" />
              Based in Surabaya
            </span>
            <span className="inline-flex items-center gap-2 text-[15px]">
              <span className="size-2 rounded-full bg-white " />
              Full time Available
            </span>
            <span className="inline-flex items-center gap-2 text-[15px]">
              <span className="size-2 rounded-full bg-white" />
              Graphic & UI/UX Designer
            </span>
          </motion.div>

          {/* stats */ }
          <div className="flex items-end gap-8 sm:gap-10 md:gap-16 md:pt-10 mr-0 md:mr-20 mb-10">
            {/* Projects */ }
            <motion.div
              variants={ fadeUp }
              whileHover={ { scale: 1.05, y: -2 } }
              transition={ { type: "spring", stiffness: 150, damping: 10 } }
              className="text-right group"
            >
              <div className="flex items-center justify-end gap-2">
                <span className="size-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 shadow-[0_0_10px_rgba(56,189,248,0.7)]" />
                <span
                  className="text-4xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent 
                   drop-shadow-[0_0_10px_rgba(56,189,248,0.3)] transition-all duration-500 group-hover:from-cyan-300 group-hover:to-indigo-400"
                >
                  10+
                </span>
              </div>
              <div className="mt-1 text-[11px] uppercase tracking-[0.15em] text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300">
                Projects
              </div>
            </motion.div>

            {/* Experience */ }
            <motion.div
              variants={ fadeUp }
              whileHover={ { scale: 1.05, y: -2 } }
              transition={ { type: "spring", stiffness: 150, damping: 10 } }
              className="text-right group"
            >
              <div className="flex items-center justify-end gap-2">
                <span className="size-2 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 shadow-[0_0_10px_rgba(99,102,241,0.6)]" />
                <span
                  className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-violet-500 to-purple-500 bg-clip-text text-transparent 
                   drop-shadow-[0_0_10px_rgba(139,92,246,0.3)] transition-all duration-500 group-hover:from-blue-300 group-hover:to-purple-400"
                >
                  2 Years
                </span>
              </div>
              <div className="mt-1 text-[11px] uppercase tracking-[0.15em] text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300">
                Experience
              </div>
            </motion.div>
          </div>

        </motion.div>
      </section>

      <main className="min-h-dvh bg-black text-white">
        {/* ...hero kamu di sini... */ }
        <AboutSection />
      </main>

      <main className="min-h-dvh bg-black text-white">
        {/* ...hero kamu di sini... */ }

        <SkillsSection />
      </main>

      <main className="min-h-dvh bg-black text-white">
        {/* ...hero kamu di sini... */ }

        < ProjectsPage />
      </main>


      <main className="min-h-dvh bg-black text-white">
        {/* ...hero kamu di sini... */ }

        <  AchievementsPage />
     </main>

   
   

    </main>
  );

}
