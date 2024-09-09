export interface Billboard {
  id: string;
  label: string;
  imgURL: string;
}

export interface Category {
  id: string;
  name: string;
  billboard: Billboard;
}

export interface Product {
  id: string;
  category: Category;
  name: string;
  price: string;
  isFeatured: boolean;
  size: Size;
  color: Color;
  images: Image[];
}
export interface Image {
  id: string;
  url: string;
}
export interface Size {
  id: string;
  name: string;
  value: string;
}
export interface Color {
  id: string;
  name: string; // Name of the color (e.g., "Red", "Blue")
  value: string; // Hex code of the color (e.g., "#FF0000" for red)
}
