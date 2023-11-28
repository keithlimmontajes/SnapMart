export enum TYPES {
  START = "GET_ALL_LIST_START",
  SUCCESS = "GET_ALL_LIST_SUCCESS",
  ERROR = "GET_ALL_LIST_ERROR",

  START_CATEGORIES = "GET_ALL_LIST_CATEGORIES_START",
  SUCCESS_START_CATEGORIES = "GET_ALL_LIST_CATEGORIES_SUCCESS",
  ERROR_START_CATEGORIES = "GET_ALL_LIST_CATEGORIES_ERROR",
}

export interface HomeInterface {
  home: {
    data: Array<DataTypes>;
    code: number | null;
    error: boolean;
    loading: boolean;
    categories: Array<CategoryTypes>;
  };
}

export interface DataTypes {
  id: string;
  productName: string;
  description: string;
  unitPrice: number;
  imageUrl: string;
  category: string;
  qty: any;
}

export interface CategoryTypes {
  category: string;
  count: number;
}
