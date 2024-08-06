const CantidadJSON = localStorage.getItem("");
if (CantidadJSON) {
	const Cantidad = JSON.parse(CantidadJSON);
	array = Cantidad;
}

const RecuperadoJSON = localStorage.getItem("");

if (RecuperadoJSON) {
	const Recuperado = JSON.parse(RecuperadoJSON);
	Recuperado.forEach((elemento) => {
		array.push(elemento);
	});
}

const GuardarStorage = (array, nombre) => {
	const listaJSON = JSON.stringify(array);
	localStorage.setItem(nombre, listaJSON);
};
