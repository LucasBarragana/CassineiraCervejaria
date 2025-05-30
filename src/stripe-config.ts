export interface StripeProduct {
  id: string;
  priceId: string;
  name: string;
  description: string;
  mode: 'payment' | 'subscription';
}

export const products: StripeProduct[] = [
  {
    id: 'prod_SE4PHL5tl0afTe',
    priceId: 'price_1RJcGdKTNisKmk4mRPTp7mVZ',
    name: 'Porter Chocolate',
    description: 'Cerveja escura com notas intensas de chocolate e caramelo. Corpo encorpado e espuma cremosa.',
    mode: 'payment',
  },
  {
    id: 'prod_SE4OZwrpij1gS4',
    priceId: 'price_1RJcFlKTNisKmk4mLI31ZQez',
    name: 'Double IPA',
    description: 'Versão mais forte e intensa da IPA, com maior teor alcoólico e amargor acentuado.',
    mode: 'payment',
  },
  {
    id: 'prod_SE4Nijc59wKj6z',
    priceId: 'price_1RJcF4KTNisKmk4mEgrM0ezb',
    name: 'Pale Ale Cítrica',
    description: 'Cerveja dourada com notas cítricas e florais. Amargor moderado e final seco.',
    mode: 'payment',
  },
  {
    id: 'prod_SE4Nh94qcpWwRo',
    priceId: 'price_1RJcEYKTNisKmk4mH440J8Wj',
    name: 'Stout Café',
    description: 'Cerveja escura com notas intensas de café e chocolate. Corpo encorpado e espuma cremosa.',
    mode: 'payment',
  },
  {
    id: 'prod_SE4MgG5pxif3SE',
    priceId: 'price_1RJcDrKTNisKmk4mX0tZ9IAD',
    name: 'Weissbier',
    description: 'Cerveja de trigo de cor amarelo-turva com notas de banana e cravo. Refrescante e encorpada.',
    mode: 'payment',
  },
  {
    id: 'prod_SE4LYkdJCSDufB',
    priceId: 'price_1RJcDIKTNisKmk4mI9rIBvdk',
    name: 'Red Ale',
    description: 'Cerveja de cor acobreada com notas de caramelo e leve amargor. Corpo médio e sabor maltado.',
    mode: 'payment',
  },
  {
    id: 'prod_SE4LSLxd0nyh32',
    priceId: 'price_1RJcCcKTNisKmk4mBR3GZMCB',
    name: 'Pilsen Premium',
    description: 'Cerveja leve e refrescante de cor dourada. Sabor equilibrado com notas de malte e leve amargor.',
    mode: 'payment',
  },
  {
    id: 'prod_SE4KT0YmMdz0z0',
    priceId: 'price_1RJcBtKTNisKmk4mctWAXyz2',
    name: 'Cassineira IPA',
    description: 'Uma IPA equilibrada com notas cítricas e final seco. Amargor pronunciado com aroma de frutas tropicais.',
    mode: 'payment',
  },
  {
    id: 'prod_SE47XkDfM6Pl1H',
    priceId: 'price_1RJbzfKTNisKmk4mFKoTXs2m',
    name: 'Connoisseur',
    description: 'A experiência definitiva para os especialistas em cerveja artesanal.',
    mode: 'subscription',
  },
  {
    id: 'prod_SE47EvYqwWYerA',
    priceId: 'price_1RJbzFKTNisKmk4mRWA7Y7Zq',
    name: 'Premium',
    description: 'Para os verdadeiros apreciadores, receba 8 cervejas premium mensalmente.',
    mode: 'subscription',
  },
  {
    id: 'prod_SE46niD8ODcL8j',
    priceId: 'price_1RJbyjKTNisKmk4mXIH22968',
    name: 'Básica',
    description: 'Receba 4 cervejas diferentes por mês para descobrir novos sabores.',
    mode: 'subscription',
  },
];

export const getProductByPriceId = (priceId: string): StripeProduct | undefined => {
  return products.find((product) => product.priceId === priceId);
};

export const getProductById = (id: string): StripeProduct | undefined => {
  return products.find((product) => product.id === id);
};