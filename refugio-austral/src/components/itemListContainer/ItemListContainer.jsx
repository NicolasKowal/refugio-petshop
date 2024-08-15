import React from "react";
import ItemList from "../itemList/ItemList";
import "./itemListContainer.css";

function ItemListContainer() {
	window.scrollTo(0, 0);
	return (
		<div className="grid-container">
			<ItemList />
		</div>
	);
}

export default ItemListContainer;
