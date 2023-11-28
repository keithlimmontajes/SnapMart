import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

import { homeModel } from "./home/models";
import { cartModel } from "./cart/models";

const store = persist(
  () => ({
    // Add models here
    ...homeModel,
    ...cartModel,
  }),
  {
    name: "stores",
    storage: createJSONStorage(() => localStorage),
    version: 1,
  }
);

export const useStores = create(store);
