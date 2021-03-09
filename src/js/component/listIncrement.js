import React from "react";
import eliminarTarea from "./eliminarTarea.js";

export default function listIncrement(arreglo) {
	return (
		<li className="list-group-item">
			{arreglo.map(tarea => {
				return (
					<li className="list-group-item" key={`tarea_${tarea}`}>
						{tarea}
						<button className="button" onClick={eliminarTarea}>
							&#10003;
						</button>
					</li>
				);
			})}
		</li>
	);
}
