'use client'
import React, { useRef, useState, useEffect } from 'react';

export default function Reveal({ children, style }) {
    const containerRef = useRef(null);
    const [animate, setAnimate] = useState(false);

    const handleScroll = () => {
        const container = containerRef.current;
        const rect = container.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        const distanceTopToWinBottom = windowHeight - rect.top;
        const distanceBottomToWinTop = windowHeight - rect.bottom;

        // Set opacity based on distance
        if (distanceTopToWinBottom <= 2 * windowHeight / 3) {
            setAnimate(false)
        } else if (distanceBottomToWinTop <= 2 * windowHeight / 3) {
            setAnimate(true);
        } else {
            setAnimate(false)
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="container"
            style={
                animate ?
                    {
                        opacity: 1,
                        left: 0,
                        ...style
                    } :
                    {
                        overflow: "hidden",
                        opacity: 0.5,
                        left: "100%",
                        ...style
                    }
            }
        >
            {children}
        </div>
    )
}