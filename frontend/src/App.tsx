// built in
import { useEffect, useState } from "react"

// internal
import { IntroTextSequence, TEXT_SEQUENCE_DURATION_TOTAL } from "./IntroTextSequenceComponent"
import { TwoButtonsExperiment } from "./TwoButtonsExperimentComponent";

function App() {
	const [phase, setPhase] = useState<"titles" | "overlay">("titles");

	useEffect(() => {
		const timer = setTimeout(() => {
			setPhase("overlay");
		}, TEXT_SEQUENCE_DURATION_TOTAL);

		return () => clearTimeout(timer);
	}, []);

	return (
		<div className="relative w-screen h-screen bg-black overflow-hidden">
			{phase === "titles" && <IntroTextSequence />}

			{phase === "overlay" && (
				<div className="absolute inset-0 flex items-center justify-center fade-in">
					<TwoButtonsExperiment/>
				</div>
			)}
		</div>
	);
}

export default App