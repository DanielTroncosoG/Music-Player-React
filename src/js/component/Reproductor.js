import React from "react";
import Play from "./Play";

//create your first component
export function Reproductor() {
	return (
		<div className="container">
			<div className="SongList">
            </div>
			<div className="Reproductor">
				<button onClick="Play(this)" type="button" id="Previous">
					<i className="fas fa-step-backward"></i>
				</button>
				<button type="button" id="Play">
					<i className="fas fa-play"></i>
				</button>
				<button type="button" id="Next">
					<i className="fas fa-step-forward"></i>
				</button>
			</div>
		</div>
	);
}
