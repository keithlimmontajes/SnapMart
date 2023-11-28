import { DATA } from "./data";
import { AxiosError } from "axios";
import { HOME_REDUCER } from "./reducer";
import { CategoryTypes, TYPES } from "./types";

import homeService from "../../services/homeService";

export const getList = async () => {
  try {
    const response = [...DATA];
    HOME_REDUCER(TYPES.SUCCESS, response);

    return;
  } catch (err) {
    const error = err as AxiosError;
    HOME_REDUCER(TYPES.ERROR, error);

    return;
  }
};

export const getCategories = async () => {
  try {
    let newObject: Array<CategoryTypes> = [];

    const response = [...DATA];
    const uniqueResponse = [...new Set(response.map((item) => item.category))];
    const sorted = uniqueResponse.slice().sort((a, b) => a.localeCompare(b));

    sorted.map((item) =>
      newObject.push({
        category: item,
        count: response.filter((object) => item === object?.category).length,
      })
    );

    HOME_REDUCER(TYPES.SUCCESS_START_CATEGORIES, newObject);

    return;
  } catch (err) {
    const error = err as AxiosError;
    return error;
  }
};

export const getFilteredList = async (filterby: string | null) => {
  try {
    const response = [...DATA];
    let filtered;

    if (filterby) {
      filtered = [
        ...new Set(response.filter((item) => item.category === filterby)),
      ];
    } else {
      filtered = response;
    }

    HOME_REDUCER(TYPES.SUCCESS, filtered);

    return;
  } catch (err) {
    const error = err as AxiosError;
    HOME_REDUCER(TYPES.ERROR, error);

    return;
  }
};
