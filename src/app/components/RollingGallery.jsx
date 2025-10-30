"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useAnimation, useTransform } from "motion/react";

const IMGS = [
    "/img/me/me2.png",
  "/img/me/me1.jpg",
  "/img/me/me3.png",
  "/img/me/me4.jpg",

];

export default function RollingGallery({
  autoplay = true,
  pauseOnHover = true,
  images = [],
  className = "",
  height = 180, // tinggi gallery default
}) {
  images = images.length > 0 ? images : IMGS;

  const wrapRef = useRef(null);
  const [wrapW, setWrapW] = useState(900);

  useEffect(() => {
    const ro = new ResizeObserver(([entry]) => {
      setWrapW(entry.contentRect.width);
    });
    if (wrapRef.current) ro.observe(wrapRef.current);
    return () => ro.disconnect();
  }, []);

  // hitung ukuran cylinder dan rotasi
  const faceCount = images.length;
  const cylinderWidth = Math.min(Math.max(wrapW * 1.1, 600), 1400);
  const faceWidth = (cylinderWidth / faceCount) * 0.9;
  const radius = cylinderWidth / (2 * Math.PI);

  const rotation = useMotionValue(0);
  const controls = useAnimation();
  const transform = useTransform(rotation, (v) => `rotate3d(0,1,0,${v}deg)`);

  // animasi muter terus
  const startSpin = (a) => {
    controls.start({
      rotateY: [a, a - 360],
      transition: { duration: 10, ease: "linear", repeat: Infinity },
    });
  };

  useEffect(() => {
    if (autoplay) startSpin(rotation.get());
    else controls.stop();
  }, [autoplay]);

  const dragFactor = 0.05;
  const onDrag = (_, info) => {
    controls.stop();
    rotation.set(rotation.get() + info.offset.x * dragFactor);
  };

  const onDragEnd = (_, info) => {
    const finalAngle = rotation.get() + info.velocity.x * dragFactor;
    rotation.set(finalAngle);
    if (autoplay) startSpin(finalAngle);
  };

  return (
    <div
      ref={ wrapRef }
      className={ `relative w-full overflow-hidden ${className}` }
      style={ { height } }
    >
      {/* gradient kiri-kanan */ }
      <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-l from-transparent to-black/90" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-r from-transparent to-black/90" />

      <div className="flex h-full items-center justify-center [perspective:1000px]">
        <motion.div
          drag="x"
          dragElastic={ 0 }
          onDrag={ onDrag }
          onDragEnd={ onDragEnd }
          onMouseEnter={ () => pauseOnHover && controls.stop() }
          onMouseLeave={ () => pauseOnHover && autoplay && startSpin(rotation.get()) }
          animate={ controls }
          onUpdate={ (latest) => {
            if (typeof latest.rotateY === "number") rotation.set(latest.rotateY);
          } }
          style={ {
            transform: transform,
            rotateY: rotation,
            width: cylinderWidth,
            transformStyle: "preserve-3d",
          } }
          className="flex h-full cursor-grab items-center justify-center"
        >
          { images.map((url, i) => (
            <div
              key={ i }
              className="group absolute flex items-center justify-center [backface-visibility:hidden]"
              style={ {
                width: `${faceWidth}px`,
                transform: `rotateY(${(360 / faceCount) * i}deg) translateZ(${radius}px)`,
              } }
            >
              <img
                src={ url }
                alt="gallery"
                className="pointer-events-none w-[clamp(140px,28vw,220px)] 
                           h-[clamp(90px,14vw,130px)] object-cover
                           rounded-[12px] border border-white/10 shadow
                           transition-transform duration-300 ease-out group-hover:scale-105"
              />
            </div>
          )) }
        </motion.div>
      </div>
    </div>
  );
}
