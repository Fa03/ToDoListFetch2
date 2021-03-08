import React from "react";

export function cantidadTareas(cantidadItems) {
	let mensaje = "";
	if (cantidadItems == 0) {
		mensaje = "No Tasks";
	} else {
		mensaje = cantidadItems + " Pending Tasks";
	}
	return mensaje;
}
