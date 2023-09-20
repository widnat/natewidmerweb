import { useState } from "react";
import DrawingArea from "../DrawingArea";
import PlayerNameInput from "../PlayerNameInput";
import Spinner from "../../Spinner";

type Props = {
	action: any;
};

export default function JoinGame({ action }: Props) {
	const [playerName, setPlayerName] = useState("");
	const [waiting, setWaiting] = useState(false);

	function doneDrawing(doodleURL: string) {
		if (playerName) {
			setWaiting(true);
			action(playerName, doodleURL);
		} else alert("Please enter a name");
	}

	return (
		<>
			<div className="h-screen">
				{!waiting && (
					<div>
						<PlayerNameInput updateName={setPlayerName} />
						<DrawingArea action={doneDrawing} actionText="Join Game" />
					</div>
				)}
				{waiting && <Spinner message="waiting for other players to begin..." />}
			</div>
		</>
	);
}
