import { HomeInterface } from "./types";

export const INITIAL_STATES: HomeInterface = {
  home: {
    data: [],
    code: 200,
    error: false,
    loading: false,
    categories: [],
  },
};

const homeModel: HomeInterface = {
  ...INITIAL_STATES,
};

export { homeModel };
