export type Category = 'Decoração' | 'Cozinha' | 'Gadgets' | 'Peças de Reposição' | 'Articulados' | 'Organizadores';

export interface Product {
  id: string;
  name: string;
  price: number;
  oldPrice?: number;
  category: Category;
  image: string;
  description: string;
  rating: number;
  reviews: number;
  tags: string[];
  isBestSeller?: boolean;
  isQuickShip?: boolean;
}

export type Material = 'PLA' | 'PETG' | 'Resina';

export interface MaterialOption {
  id: Material;
  name: string;
  description: string;
  icon: string;
  benefits: string;
}

export interface ColorOption {
  id: string;
  name: string;
  hex: string;
}

export type Screen = 'home' | 'catalog' | 'detail' | 'config';
