import { Subscription } from '../types';

export const subscriptions: Subscription[] = [
  {
    id: "basic",
    name: "Básica",
    description: "Receba 4 cervejas diferentes por mês para descobrir novos sabores.",
    price: 89.90,
    image: "https://images.pexels.com/photos/1269025/pexels-photo-1269025.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    interval: "monthly",
    features: [
      "4 cervejas por mês",
      "Guia de degustação",
      "Acesso a conteúdo exclusivo",
      "10% de desconto em compras avulsas"
    ]
  },
  {
    id: "premium",
    name: "Premium",
    description: "Para os verdadeiros apreciadores, receba 8 cervejas premium mensalmente.",
    price: 159.90,
    image: "https://images.pexels.com/photos/1552630/pexels-photo-1552630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    interval: "monthly",
    features: [
      "8 cervejas por mês",
      "Guia de degustação premium",
      "Brinde exclusivo a cada 3 meses",
      "Acesso a lançamentos antecipados",
      "15% de desconto em compras avulsas",
      "Convites para eventos especiais"
    ],
    recommended: true
  },
  {
    id: "connoisseur",
    name: "Connoisseur",
    description: "A experiência definitiva para os especialistas em cerveja artesanal.",
    price: 249.90,
    image: "https://images.pexels.com/photos/5530166/pexels-photo-5530166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    interval: "monthly",
    features: [
      "12 cervejas por mês",
      "Edições limitadas e exclusivas",
      "Kit de degustação profissional",
      "Curso online de apreciação de cerveja",
      "Visita anual à fábrica",
      "20% de desconto em compras avulsas",
      "Acesso a barrel-aged e cervejas especiais"
    ]
  }
];

export const getSubscriptionById = (id: string): Subscription | undefined => {
  return subscriptions.find(subscription => subscription.id === id);
};