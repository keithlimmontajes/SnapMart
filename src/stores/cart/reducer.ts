import { TYPES } from "./types";
import { useStores } from "..";

const CART_REDUCER = (action: string, payload?: any) => {
  switch (action) {
    case TYPES.ADD:
      useStores.setState((states) => ({
        ...states,
        cart: {
          ...states.cart,
          data: payload,
        },
      }));
      break;

    case TYPES.REMOVE:
      useStores.setState((states) => ({
        ...states,
        cart: {
          ...states.cart,
          data: payload,
        },
      }));
      break;

    default:
      return;
  }
};

export { CART_REDUCER };
