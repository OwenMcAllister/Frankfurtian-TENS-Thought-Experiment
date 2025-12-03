// built in
import { useEffect, useRef, useState } from "react";

type Side = "left" | "right";

export function TwoButtonsExperiment() {

	const [chosenSide] = useState<Side>(
		Math.random() < 0.5 ? "left" : "right"
	);

	const [intervened, setIntervened] = useState(false);
	const [completed, setCompleted] = useState(false);

	const leftBtnRef = useRef<HTMLButtonElement | null>(null);
	const rightBtnRef = useRef<HTMLButtonElement | null>(null);

	useEffect(() => {
		if (intervened || completed) return;

		const handleMouseMove = (e: MouseEvent) => {
			const forbiddenSide: Side = chosenSide === "left" ? "right" : "left";
			const forbiddenEl =
				forbiddenSide === "left" ? leftBtnRef.current : rightBtnRef.current;

			if (!forbiddenEl) return;

			const rect = forbiddenEl.getBoundingClientRect();

			const dx = Math.max(rect.left - e.clientX, 0, e.clientX - rect.right);
			const dy = Math.max(rect.top - e.clientY, 0, e.clientY - rect.bottom);
			const distance = Math.hypot(dx, dy);

			const THRESHOLD_PX = 80;

			if (distance < THRESHOLD_PX) {
				setIntervened(true);

				fetch("http://localhost:8000/intervention", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						attempted: forbiddenSide,
						chosen: chosenSide,
					}),
				});
			}
		};

		window.addEventListener("mousemove", handleMouseMove);
		return () => window.removeEventListener("mousemove", handleMouseMove);
	}, [chosenSide, intervened, completed]);

	const handleClick = (side: Side) => {
		if (side !== chosenSide) {
			setIntervened(true);
			return;
		}

		setCompleted(true);
	};

	const disableLeft =
		(intervened || completed) && chosenSide === "right";
	const disableRight =
		(intervened || completed) && chosenSide === "left";

	return (
		<div className="w-full h-full flex items-center justify-center">
			<div className="flex flex-col items-center w-full max-w-4xl px-8 gap-12">
				<p className="text-white text-2xl md:text-4xl text-center -mt-10">
					Choose one of the buttons.
				</p>

				<div className="flex w-full justify-between px-8 mt-4">
					<button
						ref={leftBtnRef}
						onClick={() => handleClick("left")}
						disabled={disableLeft}
						className="px-12 py-8 rounded-2xl bg-slate-800 text-white text-2xl md:text-3xl
							hover:bg-slate-700 transition shadow-lg
							disabled:opacity-40 disabled:cursor-not-allowed"
					>
						Left
					</button>

					<button
						ref={rightBtnRef}
						onClick={() => handleClick("right")}
						disabled={disableRight}
						className="px-12 py-8 rounded-2xl bg-slate-800 text-white text-2xl md:text-3xl
							hover:bg-slate-700 transition shadow-lg
							disabled:opacity-40 disabled:cursor-not-allowed"
					>
						Right
					</button>
				</div>

				{completed && (
					<p className="text-white text-lg md:text-2xl text-center max-w-xl fade-in mt-6">
						You selected the button the system had already chosen:{" "}
                        <span className="font-bold uppercase">{chosenSide}</span>.
						
                        Did this seem like a free choice? You couldn't have done otherwise...
						
					</p>
				)}

				{!completed && intervened && (
					<p className="text-white text-lg md:text-2xl text-center max-w-xl fade-in mt-6">
						Behind the scenes, the system had already decided you would pick{" "}
						<span className="font-bold uppercase">{chosenSide}</span>. What does
						this mean for the Principle of Alternate Possibilities?
					</p>
				)}
			</div>
		</div>
	);
}
