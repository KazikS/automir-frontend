export type TrailerCardType = {
  product_category: "new" | "used" | "tradeIn";
  trailer_category: string
  model: string;
  capacity: number;
  width: number;
  length: number;
  height?: number;
  price: number;
  createdAt: string;
  year: number;
};

export type TrailerType = {
  axes_count: number;
  mass: number;
  description?: string;
} & TrailerCardType;
