import React, { useState } from "react";
import numeroTareasPie, { cantidadTareas } from "./numeroTareasPie";
import listIncrement from "./listIncrement";

export function Home() {
	let [tarea, setTarea] = useState([]);

	let agregarTarea = (evento, teclaPresionada) => {
		if (teclaPresionada === 13) {
			setTarea(tarea.concat(evento.target.value)); // .push no funciona en REACT genera el lenght no el dato
			evento.target.value = ""; //limpia el valor del textarea despues del ENTER

			// console.log("si Entro");
		}

		// console.log(tarea);
		// console.log(tarea);
	};

	return (
		<div className="main">
			<div className="secundario">
				<h1 className="titulo">toDoList</h1>
				<div className="listadoVacio">
					<ul className="list-group">
						<li className="list-group-item">
							<input
								className="entrada"
								type="text"
								placeholder="Create Task"
								onKeyPress={e => agregarTarea(e, e.charCode)}
							/>
						</li>
						<li className="list-group-item">
							{listIncrement(tarea)}
						</li>
					</ul>
				</div>
				<div className="listadoIniciado">
					<p>{cantidadTareas(tarea.length)}</p>
				</div>
			</div>
		</div>
	);
}
