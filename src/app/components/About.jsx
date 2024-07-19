import React from "react";
import Role from "./Role";
import Reveal from "../style-components/Reveal";
import "../styles/about.css";

export default function About() {
    return (
        <div className="about-container">
            <Reveal>
                <div className="about" id="about">
                    <div>
                        <div className="name">Ranga Raja</div>
                        <Role />
                    </div>
                    <div className="objective">
                        A dynamic person who loves to work and learn within the challenges of daily work. Ability to work
                        under pressure and independently when necessary. My skills are complemented by a strong sense of team
                        commitment, a strong work ethic, a desire to learn and a passion to improve.
                    </div>
                </div>
            </Reveal>
        </div>
    );
}
