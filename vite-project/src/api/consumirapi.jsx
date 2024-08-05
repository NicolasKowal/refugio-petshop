import { useEffect, useState } from "react";

const { array, setData: setArray } = useState([]);

useEffect(() => {
	fetch("url")
		.then((response) => {
			if (!response.ok) {
				throw new Error("El error");
			}
			return response.json();
		})
		.then((data) => {
			setArray(data);
			console.log(array);
		})
		.then((error) => {
			console.error(error);
		});
}, []);
