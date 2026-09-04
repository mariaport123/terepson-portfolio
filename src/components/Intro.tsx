"use client";

import { motion } from "motion/react";

type IntroProps = {
    visible: boolean;
};

function AnimatedSignature() {
    const isMobile =
        typeof window !== "undefined" &&
        window.matchMedia("(max-width: 700px)").matches;

    return (
        <motion.img
            src="/signature/jorgen-signature.png"
            alt="Jörgen Terepson signature"
            className="intro-signature"
            initial={{
                clipPath: "inset(0 100% 0 0)",
            }}
            animate={{
                clipPath: "inset(0 0% 0 0)",
            }}
            transition={{
                duration: isMobile ? 1.2 : 1.8,
                delay: isMobile ? 0 : 0.5,
                ease: "easeInOut",
            }}
        />
    );
}

export default function Intro({
    visible,
}: IntroProps) {
    return (
        <motion.section
            className={`intro ${!visible ? "intro-hidden" : ""
                }`}
        >
            <div className="intro-content">
                <h1 className="intro-title">
                    TEREPSON
                </h1>

                <AnimatedSignature />
            </div>
        </motion.section>
    );
}