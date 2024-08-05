import React, { useRef, useState } from "react";
import OtroComponente from "../api/OtroComponente";

function Componente() {
	const dataA = 1234;
	const referencia = useRef();
	const [dato, setDato] = useState("");
	const handleChange = () => {
		setDato(referencia.current.value);
	};
	return (
		<>
			<input type="text" ref={referencia} onChange={handleChange} />
			<OtroComponente dato1={dataA} dato2={dato} />
		</>
	);
}

export default Componente;
