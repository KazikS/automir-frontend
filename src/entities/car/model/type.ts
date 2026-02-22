export type CarCardType = {
  brand: string;
  model: string;
  year: number;
  engineVolume: number;
  mileage: number;
  price: number;
  transmission: string;
  power: number;
  category: "new" | "used" | "tradeIn";
  images: string[];
};
export type CarType = {
  fuelType: string;
  drive: string;
  body: string;
  color: string;
  wheelPosition: string;
  generation: string;
  equipment: string;
} & CarCardType;
