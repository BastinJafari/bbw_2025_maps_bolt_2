// Mock database implementation for hackathon template
// Replace with real database calls when ready to connect to a backend

export interface SelectProduct {
  id: number;
  name: string;
  status: string;
  price: number;
  stock: number;
  imageUrl: string;
  availableAt: Date;
}

// Mock products data
const mockProducts: SelectProduct[] = [
  {
    id: 1,
    name: 'Wireless Headphones',
    status: 'active',
    price: 99.99,
    stock: 25,
    imageUrl: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=400',
    availableAt: new Date('2024-01-15')
  },
  {
    id: 2,
    name: 'Smart Watch',
    status: 'active',
    price: 199.99,
    stock: 15,
    imageUrl: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=400',
    availableAt: new Date('2024-01-10')
  },
  {
    id: 3,
    name: 'Laptop Stand',
    status: 'inactive',
    price: 49.99,
    stock: 0,
    imageUrl: 'https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400',
    availableAt: new Date('2024-01-05')
  },
  {
    id: 4,
    name: 'USB-C Hub',
    status: 'active',
    price: 79.99,
    stock: 30,
    imageUrl: 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=400',
    availableAt: new Date('2024-01-20')
  },
  {
    id: 5,
    name: 'Bluetooth Speaker',
    status: 'active',
    price: 129.99,
    stock: 12,
    imageUrl: 'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=400',
    availableAt: new Date('2024-01-12')
  }
];

// Simulate API delay for realistic development experience
function delay(ms: number = 500): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Mock database functions
export async function getProducts(offset: number = 0, limit: number = 5): Promise<SelectProduct[]> {
  await delay();
  return mockProducts.slice(offset, offset + limit);
}

export async function getProductsCount(): Promise<number> {
  await delay();
  return mockProducts.length;
}

export async function getProductById(id: number): Promise<SelectProduct | undefined> {
  await delay();
  return mockProducts.find(product => product.id === id);
}

export async function deleteProductById(id: number): Promise<void> {
  await delay();
  // In a real implementation, this would delete from the database
  // For now, we'll just simulate the operation
  console.log(`Mock: Deleting product with id ${id}`);
}

export async function searchProducts(query: string): Promise<SelectProduct[]> {
  await delay();
  if (!query) return mockProducts;
  
  return mockProducts.filter(product =>
    product.name.toLowerCase().includes(query.toLowerCase()) ||
    product.status.toLowerCase().includes(query.toLowerCase())
  );
}

// Additional utility functions
export function filterProductsByStatus(status: string): SelectProduct[] {
  return mockProducts.filter(product => product.status === status);
}

export function getActiveProducts(): SelectProduct[] {
  return filterProductsByStatus('active');
}

export function getInactiveProducts(): SelectProduct[] {
  return filterProductsByStatus('inactive');
}