export enum TYPES {
  REMOVE = "REMOVE_ITEM_CART",
  ADD = "ADD_ITEM_CART",
}

export interface CartInterface {
  cart: {
    data: Array<DataTypes>;
  };
}

export interface DataTypes {
  id: string;
  productName: string;
  description: string;
  unitPrice: number;
  imageUrl: string;
  category: string;
}
