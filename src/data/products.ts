import { Product } from '../types';

export const products: Product[] = [
  {
    id: "1",
    name: "Cassineira IPA",
    description: "Uma IPA equilibrada com notas cítricas e final seco. Amargor pronunciado com aroma de frutas tropicais.",
    price: 24.90,
    category: "ipa",
    image: "https://images.pexels.com/photos/1089930/pexels-photo-1089930.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    abv: 6.2,
    ibu: 65,
    featured: true,
    stock: 50
  },
  {
    id: "2",
    name: "Pilsen Premium",
    description: "Cerveja leve e refrescante de cor dourada. Sabor equilibrado com notas de malte e leve amargor.",
    price: 19.90,
    category: "pilsen",
    image: "https://images.pexels.com/photos/1267244/pexels-photo-1267244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    abv: 4.8,
    ibu: 25,
    featured: true,
    stock: 100
  },
  {
    id: "3",
    name: "Red Ale",
    description: "Cerveja de cor acobreada com notas de caramelo e leve amargor. Corpo médio e sabor maltado.",
    price: 22.90,
    category: "ale",
    image: "https://images.pexels.com/photos/1552630/pexels-photo-1552630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    abv: 5.5,
    ibu: 30,
    featured: false,
    stock: 40
  },
  {
    id: "4",
    name: "Weissbier",
    description: "Cerveja de trigo de cor amarelo-turva com notas de banana e cravo. Refrescante e encorpada.",
    price: 23.90,
    category: "wheat",
    image: "https://images.pexels.com/photos/1400255/pexels-photo-1400255.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    abv: 5.2,
    ibu: 15,
    featured: true,
    stock: 30
  },
  {
    id: "5",
    name: "Stout Café",
    description: "Cerveja escura com notas intensas de café e chocolate. Corpo encorpado e espuma cremosa.",
    price: 26.90,
    category: "stout",
    image: "https://images.pexels.com/photos/5530166/pexels-photo-5530166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    abv: 7.0,
    ibu: 40,
    featured: false,
    stock: 25
  },
  {
    id: "6",
    name: "Pale Ale Cítrica",
    description: "Cerveja dourada com notas cítricas e florais. Amargor moderado e final seco.",
    price: 21.90,
    category: "ale",
    image: "https://images.pexels.com/photos/1269025/pexels-photo-1269025.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    abv: 5.0,
    ibu: 35,
    featured: false,
    stock: 45
  },
  {
    id: "7",
    name: "Double IPA",
    description: "Versão mais forte e intensa da IPA, com maior teor alcoólico e amargor acentuado.",
    price: 29.90,
    category: "ipa",
    image: "https://images.pexels.com/photos/1552630/pexels-photo-1552630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    abv: 8.5,
    ibu: 85,
    featured: true,
    stock: 20
  },
  {
    id: "8",
    name: "Porter Chocolate",
    description: "Cerveja escura com notas intensas de chocolate e caramelo. Corpo encorpado e espuma cremosa.",
    price: 25.90,
    category: "porter",
    image: "https://images.pexels.com/photos/5530166/pexels-photo-5530166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    abv: 6.5,
    ibu: 35,
    featured: false,
    stock: 30
  }
];

export const categories = [
  { id: "all", name: "Todas" },
  { id: "ipa", name: "IPAs" },
  { id: "pilsen", name: "Pilsen" },
  { id: "ale", name: "Ales" },
  { id: "wheat", name: "Trigo" },
  { id: "stout", name: "Stouts" },
  { id: "porter", name: "Porters" },
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

export const getProductsByCategory = (category: string): Product[] => {
  if (category === 'all') return products;
  return products.filter(product => product.category === category);
};