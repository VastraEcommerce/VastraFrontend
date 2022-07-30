export interface ISize {
  size: string;
  count: number;
  price: number;
}

export interface IVariant {
  color: string;
  sizes: ISize[];
  images: string[];
}

export default interface IProduct {
  category: string;
  brand: string;
  brand_thumbnail: string;
  title: string;
  description: string;
  ratingsAverage: number;
  ratingsQuantity: number;
  variants: IVariant[];
  _id: string;
  createdAt: string;
  updatedAt: string;
  slug: string;
  __v: number;
}
