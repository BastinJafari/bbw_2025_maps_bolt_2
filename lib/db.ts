import 'server-only';

// Mock database implementation for development
export interface SelectProduct {
  id: number;
  imageUrl: string;
  name: string;
  status: 'active' | 'inactive' | 'archived';
  price: string;
  stock: number;
  availableAt: Date;
}

// Mock data for development
const mockProducts: SelectProduct[] = [
  {
    id: 1,
    imageUrl: 'https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=400',
    name: 'Smartphone X Pro',
    status: 'active',
    price: '999.00',
    stock: 150,
    availableAt: new Date('2024-01-15')
  },
  {
    id: 2,
    imageUrl: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=400',
    name: 'Wireless Earbuds Ultra',
    status: 'active',
    price: '199.00',
    stock: 300,
    availableAt: new Date('2024-01-10')
  },
  {
    id: 3,
    imageUrl: 'https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg?auto=compress&cs=tinysrgb&w=400',
    name: 'Smart Home Hub',
    status: 'active',
    price: '149.00',
    stock: 200,
    availableAt: new Date('2024-01-20')
  },
  {
    id: 4,
    imageUrl: 'https://images.pexels.com/photos/1201996/pexels-photo-1201996.jpeg?auto=compress&cs=tinysrgb&w=400',
    name: '4K Ultra HD Smart TV',
    status: 'active',
    price: '799.00',
    stock: 50,
    availableAt: new Date('2024-01-05')
  },
  {
    id: 5,
    imageUrl: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400',
    name: 'Gaming Laptop Pro',
    status: 'active',
    price: '1299.00',
    stock: 75,
    availableAt: new Date('2024-01-25')
  },
  {
    id: 6,
    imageUrl: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=400',
    name: 'VR Headset Plus',
    status: 'active',
    price: '349.00',
    stock: 120,
    availableAt: new Date('2024-01-12')
  },
  {
    id: 7,
    imageUrl: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=400',
    name: 'Smartwatch Elite',
    status: 'active',
    price: '249.00',
    stock: 250,
    availableAt: new Date('2024-01-18')
  },
  {
    id: 8,
    imageUrl: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=400',
    name: 'Bluetooth Speaker Max',
    status: 'active',
    price: '99.00',
    stock: 400,
    availableAt: new Date('2024-01-08')
  }
];

export async function getProducts(
  search: string,
  offset: number
): Promise<{
  products: SelectProduct[];
  newOffset: number | null;
  totalProducts: number;
}> {
  let filteredProducts = mockProducts;

  // Apply search filter
  if (search) {
    filteredProducts = mockProducts.filter(product =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );
    return {
      products: filteredProducts,
      newOffset: null,
      totalProducts: filteredProducts.length
    };
  }

  // Apply pagination
  const limit = 5;
  const startIndex = offset;
  const endIndex = startIndex + limit;
  const paginatedProducts = filteredProducts.slice(startIndex, endIndex);
  const newOffset = endIndex < filteredProducts.length ? endIndex : null;

  return {
    products: paginatedProducts,
    newOffset,
    totalProducts: filteredProducts.length
  };
}

export async function deleteProductById(id: number) {
  const index = mockProducts.findIndex(product => product.id === id);
  if (index > -1) {
    mockProducts.splice(index, 1);
  }
}

// Mock database connection for compatibility
export const db = {
  select: () => ({
    from: () => ({
      where: () => ({
        limit: () => Promise.resolve(mockProducts)
      }),
      limit: () => ({
        offset: () => Promise.resolve(mockProducts)
      })
    })
  }),
  delete: () => ({
    where: () => Promise.resolve()
  })
};