// Mock schema for development without database
export interface SelectProduct {
  id: number;
  imageUrl: string;
  name: string;
  status: 'active' | 'inactive' | 'archived';
  price: string;
  stock: number;
  availableAt: Date;
}

// Mock schema object for compatibility
export const products = {
  $inferSelect: {} as SelectProduct
};

export const insertProductSchema = {
  parse: (data: any) => data
};

export const statusEnum = {
  enumValues: ['active', 'inactive', 'archived'] as const
};