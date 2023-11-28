import { TYPES } from "./types";
import { useStores } from "..";

const HOME_REDUCER = (action: string, payload?: any) => {
  switch (action) {
    case TYPES.START:
      useStores.setState((states) => ({
        ...states,
        home: {
          ...states.home,
          code: null,
          loading: true,
        },
      }));
      break;

    case TYPES.SUCCESS:
      useStores.setState((states) => ({
        ...states,
        home: {
          ...states.home,
          code: 200,
          loading: false,
          error: false,
          data: payload,
        },
      }));
      break;

    case TYPES.ERROR:
      useStores.setState((states) => ({
        ...states,
        home: {
          ...states.home,
          code: payload?.code,
          loading: false,
          error: true,
          data: payload?.data,
        },
      }));
      break;

    case TYPES.SUCCESS_START_CATEGORIES:
      useStores.setState((states) => ({
        ...states,
        home: {
          ...states.home,
          categories: payload,
        },
      }));
      break;

    default:
      return;
  }
};

export { HOME_REDUCER };
