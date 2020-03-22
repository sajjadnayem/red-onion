import {
	GET_DELIVERY_DETAILS,
	ADD_ITEM,
	REMOVE_ITEM,
	CLEAR_ITEM_FROM_CART
} from "./cart.types";

export const getDeliveryDetails = (data) => ({
	type: GET_DELIVERY_DETAILS,
	payload: data
});

export const addItem = (item) => ({
	type: ADD_ITEM,
	payload: item
});

export const clearItemFromCart = (item) => ({
	type: CLEAR_ITEM_FROM_CART,
	payload: item
});

export const removeItem = (item) => ({
	type: REMOVE_ITEM,
	payload: item
});
