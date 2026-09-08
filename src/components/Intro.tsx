"use client";

import { motion } from "motion/react";

type IntroProps = {
    visible: boolean;
};

type AnimatedSignatureProps = {
    visible: boolean;
};

function AnimatedSignature({ visible }: AnimatedSignatureProps) {
    const isMobile =
        typeof window !== "undefined" &&
        window.matchMedia("(max-width: 700px)").matches;

    const drawTransition = (duration: number, delay: number) => ({
        pathLength: {
            duration: isMobile ? duration * 0.65 : duration,
            delay: isMobile ? delay * 0.65 : delay,
            ease: "easeInOut" as const,
        },
        opacity: {
            duration: 0,
            delay: isMobile ? delay * 0.65 : delay,
        },
    });

    const hiddenState = { pathLength: 0, opacity: 0 };
    const visibleState = { pathLength: 1, opacity: 1 };

    return (
        <svg
            className="intro-signature"
            viewBox="0 0 411 548"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Jörgen Terepson signature"
        >
            <defs>
                {/* 1. Bottom horizontal line mask */}
                <mask id="stroke-1-mask" maskUnits="userSpaceOnUse">
                    <motion.path
                        d="M 2 313 C 55 313, 128 314, 205 323"
                        fill="none"
                        stroke="#ffffff"
                        strokeWidth="35"
                        strokeLinecap="round"
                        initial={hiddenState}
                        animate={visible ? visibleState : hiddenState}
                        transition={drawTransition(0.3, 0.15)}
                    />
                </mask>

                {/* 2. Main loop and bottom sweep mask */}
                <mask id="stroke-2-mask" maskUnits="userSpaceOnUse">
                    <motion.path
                        d="
                            M 35 312
                            C 57 284, 93 224, 117 182
                            C 127 207, 151 233, 178 249
                            C 207 265, 257 267, 286 285
                            C 309 299, 316 315, 311 342
                            C 304 381, 281 416, 247 448
                            C 213 478, 166 505, 92 544
                        "
                        fill="none"
                        stroke="#ffffff"
                        strokeWidth="45"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={hiddenState}
                        animate={visible ? visibleState : hiddenState}
                        transition={drawTransition(0.9, 0.5)}
                    />
                </mask>

                {/* 3. Top right cross line mask */}
                <mask id="stroke-3-mask" maskUnits="userSpaceOnUse">
                    <motion.path
                        d="M 245 144 C 289 149, 349 169, 408 199"
                        fill="none"
                        stroke="#ffffff"
                        strokeWidth="30"
                        strokeLinecap="round"
                        initial={hiddenState}
                        animate={visible ? visibleState : hiddenState}
                        transition={drawTransition(0.35, 1.45)}
                    />
                </mask>

                {/* 4. Main diagonal line mask */}
                <mask id="stroke-4-mask" maskUnits="userSpaceOnUse">
                    <motion.path
                        d="
                            M 117 345
                            C 151 287, 184 226, 218 169
                            C 253 109, 294 45, 341 3
                        "
                        fill="none"
                        stroke="#ffffff"
                        strokeWidth="55"
                        strokeLinecap="round"
                        initial={hiddenState}
                        animate={visible ? visibleState : hiddenState}
                        transition={drawTransition(0.7, 1.85)}
                    />
                </mask>
            </defs>

            {/* Calligraphic brush strokes */}

            {/* 1. Bottom horizontal stroke */}
            <path
                d="M 2 308 L 10 307 C 70 306, 140 310, 205 322 C 140 325, 70 323, 10 318 L 2 318 Z"
                fill="#ff2020"
                mask="url(#stroke-1-mask)"
            />

            {/* 2. Main loop and bottom sweep */}
            <path
                d="
                    M 35 312
                    C 53 278, 90 218, 117 182
                    C 131 212, 155 238, 182 254
                    C 212 270, 262 272, 292 290
                    C 316 304, 323 322, 316 348
                    C 309 387, 285 422, 250 454
                    C 215 484, 167 511, 92 544
                    C 165 500, 212 473, 245 442
                    C 278 410, 301 375, 307 336
                    C 311 309, 303 293, 280 279
                    C 252 261, 202 259, 174 243
                    C 147 227, 122 200, 117 182
                    C 92 230, 56 290, 35 312 Z"
                fill="#ff2020"
                mask="url(#stroke-2-mask)"
            />

            {/* 3. Top right cross line */}
            <path
                d="M 245 138 C 295 145, 355 167, 408 199 C 352 177, 292 157, 245 150 Z"
                fill="#ff2020"
                mask="url(#stroke-3-mask)"
            />

            {/* 4. Main diagonal line */}
            <path
                d="
                    M 117 345
                    C 158 273, 196 205, 232 145
                    C 268 85, 308 20, 341 3
                    C 288 42, 244 110, 206 172
                    C 168 235, 135 295, 117 345 Z"
                fill="#ff2020"
                mask="url(#stroke-4-mask)"
            />
        </svg>
    );
}

export default function Intro({ visible }: IntroProps) {
    return (
        <motion.section className={`intro ${!visible ? "intro-hidden" : ""}`}>
            <div className="intro-content">
                <h1 className="intro-title">TEREPSON</h1>
                <AnimatedSignature visible={visible} />
            </div>
        </motion.section>
    );
}