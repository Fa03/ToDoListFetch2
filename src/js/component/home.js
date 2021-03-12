import React, { useState } from "react";
import numeroTareasPie, { cantidadTareas } from "./numeroTareasPie";

export function Home() {
	let [tarea, setTarea] = useState([]);

	let agregarTarea = (evento, teclaPresionada) => {
		if (teclaPresionada === 13) {
			if (evento.target.value == "") {
				alert("Task space is empty");
			} else {
				setTarea(tarea.concat(evento.target.value)); // .push no funciona en REACT genera el lenght no el dato

				evento.target.value = ""; //limpia el valor del textarea despues del ENTER
			}
		}
	};

	let listIncrement = () => {
		return (
			<li className="list-group-item">
				{tarea.map((t, index) => {
					return (
						<li className="list-group-item" key={index}>
							{t}
							<button
								className="button"
								onClick={e => eliminarTarea(index)}>
								&#10003;
							</button>
						</li>
					);
				})}
			</li>
		);
	};

	const eliminarTarea = indice => {
		let newTarea = [...tarea.slice(0, indice), ...tarea.slice(indice + 1)];
		setTarea(newTarea);
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
						<li className="list-group-item">{listIncrement()}</li>
					</ul>
				</div>
				<div className="listadoIniciado">
					<p>{cantidadTareas(tarea.length)}</p>
				</div>
			</div>
		</div>
	);
}
