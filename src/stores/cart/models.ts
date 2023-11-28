import { CartInterface } from "./types";

export const INITIAL_STATES: CartInterface = {
  cart: {
    data: [],
  },
};

const cartModel: CartInterface = {
  ...INITIAL_STATES,
};

export { cartModel };
