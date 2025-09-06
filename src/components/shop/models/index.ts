export type SelectTypes = {
  label: string;
  value: string;
};

export type ProductsType = {
  id: number;
  title: string;
  image: string;
  availableBrand: string;
  price: number;
  quntity: number;
};

export type ShopStateType = {
  stort: 'ASC' | 'DESC';
};
