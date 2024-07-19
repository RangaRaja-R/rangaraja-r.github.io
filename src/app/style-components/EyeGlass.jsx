'use client'
import { motion } from "framer-motion";
import { useScroll, useTransform } from "framer-motion";
import "../styles/eyeglass.css";
import { useEffect } from "react";
import { useMotionValueEvent } from "framer-motion";

export default function EyeGlass() {
    const { scrollYProgress, scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        console.log("Page scroll: ", latest)
    })

    const scale = useTransform(
        scrollY,
        [0, 390, 4000],
        [1, 11, 0]
    );
    const visibility = useTransform(
        scrollY,
        [0, 390, 391, 4000],
        ["", "", "hidden", "hidden"]
    );
    const display = useTransform(
        scrollY,
        [0, 390, 391, 4000],
        ["", "", "None", "None"]
    );
    const blur = useTransform(
        scrollY,
        [0, 390, 4000],
        ["30px", "0px", "0px"]
    );
    const position = useTransform(
        scrollY,
        [0, 390, 4000],
        ["10%", "30%", "50%"]
    );

    return (
        <>
            <motion.div
                className="eye-glass-container"
                id="eye-glass-container"
                style={{
                    visibility,
                    display,
                    "--blur": blur,
                }}
            >
                <motion.div
                    className="eye-glass"
                    id="eye-glass"
                    style={{
                        scale,
                        bottom: position,
                        transformOrigin: "center",
                    }}
                >
                    <div className="half">
                        <div className="frame">
                            <div className="glass"></div>
                        </div>
                    </div>
                    <div className="connector">
                        <div className="line"></div>
                    </div>
                    <div className="half">
                        <div className="frame">
                            <div className="glass"></div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </>
    );
}
