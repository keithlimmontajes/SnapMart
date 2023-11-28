import { useStores } from "..";
import { AxiosError } from "axios";
import { CART_REDUCER } from "./reducer";
import { TYPES, DataTypes } from "./types";

export const addCartItem = async (item: DataTypes) => {
  try {
    const { cart } = useStores.getState();
    const newObject = [{ ...item, qty: 1 }, ...cart?.data];

    CART_REDUCER(TYPES.ADD, newObject);
    return;
  } catch (err) {
    const error = err as AxiosError;
    return error;
  }
};

export const removeCartItem = async (id: string) => {
  try {
    const { cart } = useStores.getState();
    const data = [...cart?.data];

    const indexObject = data.findIndex((obj) => obj.id === id);

    if (indexObject !== -1) {
      data.splice(indexObject, 1);
      console.log("Array after removing:", data);

      CART_REDUCER(TYPES.REMOVE, data);
    } else {
      console.log("Object with id", id, "not found in the array.");
    }

    return;
  } catch (err) {
    const error = err as AxiosError;
    return error;
  }
};

export const clearCartItem = async () => {
  CART_REDUCER(TYPES.REMOVE, []);
};

export const updateCartList = async (payload: any) => {
  CART_REDUCER(TYPES.ADD, payload);
};
