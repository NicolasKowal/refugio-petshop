import React, { useEffect, useState } from "react";

function customHook() {
	const [array, setArray] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	useEffect(() => {
		fetch("url")
			.then((response) => {
				if (!response.ok) {
					throw new Error("El error");
				}
				return response.json();
			})
			.then((data) => {
				setLoading(false);
				setArray(data);
				console.log(data);
			})
			.catch((error) => {
				setError(error);
				setLoading(false);
				console.error(error);
			});
	}, []);
	return { array, loading, error };
}

export default customHook;
