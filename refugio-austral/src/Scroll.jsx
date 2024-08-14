import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Scroll() {
	const { pathname } = useLocation();
	useEffect(() => {
		console.log("Route changed to:", pathname);
		window.scrollTo(0, 0);
	}, [pathname]);

	return null;
}

export default Scroll;
