
'use client';
import { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

const springValues = {
    damping: 30,
    stiffness: 100,
    mass: 2
};

// Types for props to remove implicit any errors
type TiltedCardProps = {
    imageSrc: string;
    altText?: string;
    captionText?: string;
    containerHeight?: string | number;
    containerWidth?: string | number;
    imageHeight?: string | number;
    imageWidth?: string | number;
    scaleOnHover?: number;
    rotateAmplitude?: number;
    showMobileWarning?: boolean;
    showTooltip?: boolean;
    overlayContent?: React.ReactNode | null;
    displayOverlayContent?: boolean;
};

export default function TiltedCard({
    imageSrc,
    altText = 'Tilted card image',
    captionText = '',
    containerHeight = '300px',
    containerWidth = '100%',
    imageHeight = '300px',
    imageWidth = '300px',
    scaleOnHover = 1.1,
    rotateAmplitude = 14,
    showMobileWarning = true,
    showTooltip = true,
    overlayContent = null,
    displayOverlayContent = false
}: TiltedCardProps) {
    const ref = useRef<HTMLElement | null>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useSpring(useMotionValue(0), springValues);
    const rotateY = useSpring(useMotionValue(0), springValues);
    const scale = useSpring(1, springValues);
    const opacity = useSpring(0);
    const rotateFigcaption = useSpring(0, {
        stiffness: 350,
        damping: 30,
        mass: 1
    });

    const [lastY, setLastY] = useState(0);
    const [isTouch, setIsTouch] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setIsTouch(window.matchMedia('(pointer: coarse)').matches);
        }
    }, []);

    function handleMouse(e: React.MouseEvent<HTMLElement>) {
        if (!ref.current || isTouch) return;

        const rect = ref.current.getBoundingClientRect();
        const offsetX = e.clientX - rect.left - rect.width / 2;
        const offsetY = e.clientY - rect.top - rect.height / 2;

        const rotationX = (offsetY / (rect.height / 2)) * -rotateAmplitude;
        const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude;

        rotateX.set(rotationX);
        rotateY.set(rotationY);

        x.set(e.clientX - rect.left);
        y.set(e.clientY - rect.top);

        const velocityY = offsetY - lastY;
        rotateFigcaption.set(-velocityY * 0.6);
        setLastY(offsetY);
    }

    function handleMouseEnter() {
        if (isTouch) return;
        scale.set(scaleOnHover);
        opacity.set(1);
    }

    function handleMouseLeave() {
        opacity.set(0);
        scale.set(1);
        rotateX.set(0);
        rotateY.set(0);
        rotateFigcaption.set(0);
    }

    // Disable tooltip on mobile
    const enableTooltip = showTooltip && !isTouch;

    // Responsive container and image sizes
    const responsiveContainerWidth = typeof containerWidth === 'string' 
        ? containerWidth 
        : `${containerWidth}px`;
    
    const responsiveImageWidth = typeof imageWidth === 'string' 
        ? imageWidth 
        : `${imageWidth}px`;
    
    const responsiveImageHeight = typeof imageHeight === 'string' 
        ? imageHeight 
        : `${imageHeight}px`;

    return (
        <figure
            ref={ref}
            className="relative w-full h-full [perspective:800px] flex flex-col items-center justify-center"
            style={{
                height: containerHeight,
                width: responsiveContainerWidth
            }}
            onMouseMove={isTouch ? undefined : handleMouse}
            onMouseEnter={isTouch ? undefined : handleMouseEnter}
            onMouseLeave={isTouch ? undefined : handleMouseLeave}
        >
            {showMobileWarning && isTouch && (
                <div className="absolute top-4 text-center text-sm block sm:hidden">
                    This effect is not optimized for mobile. Check on desktop.
                </div>
            )}

            <motion.div
                className="relative [transform-style:preserve-3d] w-full h-full"
                style={{
                    maxWidth: responsiveImageWidth,
                    maxHeight: responsiveImageHeight,
                    rotateX,
                    rotateY,
                    scale
                }}
            >
                <motion.img
                    src={imageSrc}
                    alt={altText}
                    className="absolute top-0 left-0 object-cover rounded-[15px] will-change-transform [transform:translateZ(0)] w-full h-full"
                    style={{
                        maxWidth: '100%',
                        maxHeight: '100%'
                    }}
                />

                {displayOverlayContent && overlayContent && (
                    <motion.div className="absolute top-0 left-0 z-[2] will-change-transform [transform:translateZ(30px)] w-full h-full">
                        {overlayContent}
                    </motion.div>
                )}
            </motion.div>

            {enableTooltip && (
                <motion.figcaption
                    className="pointer-events-none absolute left-0 top-0 rounded-[4px] bg-white px-[10px] py-[4px] text-[10px] text-[#2d2d2d] opacity-0 z-[3] hidden sm:block"
                    style={{
                        x,
                        y,
                        opacity,
                        rotate: rotateFigcaption
                    }}
                >
                    {captionText}
                </motion.figcaption>
            )}
        </figure>
    );
}
