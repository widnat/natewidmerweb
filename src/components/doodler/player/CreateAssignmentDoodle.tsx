import { useState } from "react";
import DrawingArea from "../DrawingArea";
import Spinner from "../../Spinner";

type Props = {
	action: any;
	assignment: string;
};

export default function CreateDoodle({ action, assignment }: Props) {
	const [waiting, setWaiting] = useState(false);

	function doneDrawing(doodleURL: string) {
		setWaiting(true);
		action(doodleURL);
	}

	return (
		<>
			<div className="h-screen">
				{!waiting && (
					<div>
						<div className="flex items-center justify-center">
							draw {assignment}
						</div>
						<DrawingArea action={doneDrawing} actionText="Submit Doodle" />
					</div>
				)}
				{waiting && (
					<Spinner message="waiting for other players to finish..." />
				)}
			</div>
		</>
	);
}
