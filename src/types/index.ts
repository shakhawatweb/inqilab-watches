export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  images: string[];
  description: string;
  shortDescription: string;
  category: string;
  featured?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface OrderFormData {
  fullName: string;
  address: string;
  mobile: string;
  paymentMethod: string;
}
