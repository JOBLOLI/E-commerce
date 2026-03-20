import { Category } from './category';

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  rating: number;
  imageUrl: string;
  categories: Category[];
}
