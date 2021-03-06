import React, { useState } from "react";

// const [tarea, setTarea] = useState("");

export function Home() {
	return (
		<div className="main">
			<div className="secundario">
				<h1 className="titulo">toDoList</h1>
				<div className="listadoVacio">
					<ul class="list-group">
						<li className="list-group-item">
							<input
								className="entrada"
								type="text"
								placeholder="Create Task"
							/>
						</li>
						<li className="list-group-item">
							Dapibus ac facilisis in
						</li>
						<li className="list-group-item">Morbi leo risus</li>
						<li className="list-group-item">
							Porta ac consectetur ac
						</li>
						<li className="list-group-item">Vestibulum at eros</li>
					</ul>
				</div>
				<div className="listadoIniciado">
					<p>Pending Tasks</p>
				</div>
			</div>
		</div>
	);
}
