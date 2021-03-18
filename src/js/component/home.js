import React, { useState, useEffect } from "react";
import numeroTareasPie, { cantidadTareas } from "./numeroTareasPie";

export function Home() {
	let [tarea, setTarea] = useState([]);

	useEffect(() => {
		getRefresh();
	}, []);

	let agregarTarea = (evento, teclaPresionada) => {
		if (teclaPresionada === 13) {
			if (evento.target.value == "") {
				alert("Task space is empty");
			} else {
				let nueva = [
					...tarea,
					{ label: evento.target.value, done: false }
				];
				setTarea(nueva);
				console.error(nueva);

				let url =
					"https://assets.breatheco.de/apis/fake/todos/user/Fa03";
				let optionsPut = {
					method: "PUT",
					body: JSON.stringify(nueva),
					headers: {
						"Content-Type": "application/json"
					}
				};
				fetch(url, optionsPut);

				// .catch(error => {
				// 	alert("Please enter task");
				// });

				evento.target.value = ""; //limpia el valor del textarea despues del ENTER
			}
		}
	};

	let getRefresh = async () => {
		let url = "https://assets.breatheco.de/apis/fake/todos/user/Fa03";
		await fetch(url)
			.then(respuesta => {
				return respuesta.json();
			})
			.then(body => {
				setTarea(body);
			});
	};

	let listIncrement = () => {
		return (
			<li className="list-group-item">
				{tarea.map((t, index) => {
					return (
						<li className="list-group-item" key={index}>
							{t.label}
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
		let newTarea = [];
		if (tarea.length == 1) {
			vaciarAPI();
		} else {
			newTarea = [...tarea.slice(0, indice), ...tarea.slice(indice + 1)];
		}

		setTarea(newTarea);

		let url = "https://assets.breatheco.de/apis/fake/todos/user/Fa03";
		let optionsPut = {
			method: "PUT",
			body: JSON.stringify(newTarea),
			headers: {
				"Content-Type": "application/json"
			}
		};
		fetch(url, optionsPut)
			.then(respuesta => {
				return respuesta.json();
			})
			.then(body => {
				setTarea(newTarea);
			});

		// .catch(error => {
		// 	alert("Please enter task");
		// });
	};

	const vaciarAPI = async indice => {
		let newTarea = [];

		let url = "https://assets.breatheco.de/apis/fake/todos/user/Fa03";
		let optionsDelete = {
			method: "DELETE",
			body: JSON.stringify(newTarea),
			headers: {
				"Content-Type": "application/json"
			}
		};
		await fetch(url, optionsDelete)
			.then(respuesta => {
				return respuesta.json();
			})
			.then(body => {
				setTarea([]);
			});

		let optionsPost = {
			method: "Post",
			body: JSON.stringify([]),
			headers: {
				"Content-Type": "application/json"
			}
		};
		await fetch(url, optionsPost);
		// .then(response => response.text())
		// .then(result => console.log("Resultado", result));
	};

	//se forma la pagina --->

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
						<button id="button1" onClick={e => vaciarAPI()}>
							Delete All
						</button>
					</ul>
				</div>
				<div className="listadoIniciado">
					<p>{cantidadTareas(tarea.length)}</p>
				</div>
			</div>
		</div>
	);
}
