export type Customer = {
  id: string;
  name: string;
  age?: number;
  gender: 'man' | 'woman' | 'none'
  imageUrl: string
};