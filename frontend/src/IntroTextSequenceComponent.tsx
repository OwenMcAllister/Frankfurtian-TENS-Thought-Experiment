// built in
import { useEffect, useState } from "react";

const INTRO_TEXT = [
    "How might we define free will?",
    "A common definition involves a very specific unstanding of free action... The Principle of Alternate Possibilites.",
    "The PAP is as follows: An agent makes a choice freely, if and only if they could have done otherwise.",
    "Keep this definition in mind.",
    "Assume that under normal conditions, your choices are made freely..."
];

const TEXT_DURATION_MS = 5000

export function IntroTextSequence() {
    const[index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % INTRO_TEXT.length);
        }, TEXT_DURATION_MS);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="absolute inset-0 flex items-center justify-center">
            <h1 key = {index} className = "fade-seq text-white text-3xl md:text-5xl text-center px-4">
                {INTRO_TEXT[index]}
            </h1>
        </div>
    );
}

export const TEXT_SEQUENCE_DURATION_TOTAL = INTRO_TEXT.length * TEXT_DURATION_MS