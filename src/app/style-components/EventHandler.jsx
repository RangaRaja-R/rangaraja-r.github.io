'use client'
import React, { useEffect } from 'react'

export default function EventHandler() {
    useEffect(() => {
        function handleGlass() {
            const glass = document.getElementById("eye-glass-container");
            const image = document.getElementById("hero__img");
            const navbar = document.getElementById("navbar");
            if (glass.style.display == "none") {
                image.style.position = "absolute";
                image.style.bottom = "20%";
                image.style.top = "auto";
                image.style.left = "auto";
                image.style.transform = "none";
                navbar.style.display = "flex";
            } else {
                image.style.position = "fixed";
                image.style.top = "50%";
                image.style.left = "50%";
                image.style.bottom = "";
                image.style.transform = "translate(-50%, -50%)";
                navbar.style.display = "none";
            }
        }
        document.addEventListener("scroll", handleGlass);
        return () => document.removeEventListener("scroll", handleGlass);
    }, []);
    return (
        <div></div>
    )
}
