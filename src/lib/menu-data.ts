export interface MenuItem {
  id: string
  name: string
  description: string
  price: number
  category: 'makanan' | 'minuman' | 'snack' | 'dessert'
  image: string
}

export const menuItems: MenuItem[] = [
  {
    id: 'nasi-liwet',
    name: 'Nasi Liwet',
    description: 'Nasi gurih khas Solo dengan santan, daun salam, dan sereh. Disajikan hangat dengan lauk pilihan.',
    price: 16000,
    category: 'makanan',
    image: '',
  },
  {
    id: 'lontong-opor',
    name: 'Lontong Opor',
    description: 'Lontong lembut dengan kuah opor ayam santan kental, dilengkapi sambal goreng kentang dan kerupuk.',
    price: 16000,
    category: 'makanan',
    image: '',
  },
  {
    id: 'lontong-sayur',
    name: 'Lontong Sayur',
    description: 'Lontong dengan sayur labu siam dan kuah santan kuning, telur rebus, dan sambal kemiri.',
    price: 16000,
    category: 'makanan',
    image: '',
  },
  {
    id: 'nasi-uduk',
    name: 'Nasi Uduk',
    description: 'Nasi uduk Betawi harum dengan lapisan goreng, bihun goreng, orek tempe, kering kentang, dan sambal.',
    price: 16000,
    category: 'makanan',
    image: '',
  },
  {
    id: 'nasi-langgi',
    name: 'Nasi Langgi',
    description: 'Nasi langgi khas Solo dengan aneka lauk: sayur gudeg, suwiran ayam, krecek, telur pindang, dan sambal goreng kentang.',
    price: 16000,
    category: 'makanan',
    image: '',
  },
  {
    id: 'garang-asem',
    name: 'Garang Asem',
    description: 'Ayam kampung dibungkus daun pisang dengan kuah asam pedas segar, lengkap dengan cabai dan tomat.',
    price: 20000,
    category: 'makanan',
    image: '',
  },
  {
    id: 'gudeg',
    name: 'Gudeg',
    description: 'Gudeg nangka muda manis khas Jogja, disajikan dengan kuah santan, ayam suwir, telur pindang, dan krecek.',
    price: 20000,
    category: 'makanan',
    image: '',
  },
  {
    id: 'bubur-ayam',
    name: 'Bubur Ayam',
    description: 'Bubur ayam gurih dengan topping lengkap: suwiran ayam, cakwe, kacang kedelai, bawang goreng, dan seledri.',
    price: 12000,
    category: 'makanan',
    image: '',
  },
  {
    id: 'selat-solo',
    name: 'Selat Solo',
    description: 'Steak ala Solo: daging sapi empuk dengan kuah kental manis asam, ditemani sayuran rebus dan kentang goreng.',
    price: 20000,
    category: 'makanan',
    image: '',
  },
  {
    id: 'nasi-ayam',
    name: 'Nasi Ayam',
    description: 'Nasi putih hangat dengan ayam goreng/ungkep bumbu tradisional, sambal, lalapan, dan kerupuk.',
    price: 20000,
    category: 'makanan',
    image: '',
  },
  {
    id: 'ayam-gecek',
    name: 'Ayam Gecek',
    description: 'Ayam suwir pedas khas Lombok dengan plecing kangkung, nasi hangat, dan sambal tomat segar.',
    price: 20000,
    category: 'makanan',
    image: '',
  },
]

export const categories = [
  { id: 'semua', label: 'Semua' },
  { id: 'makanan', label: 'Makanan' },
  { id: 'minuman', label: 'Minuman' },
  { id: 'snack', label: 'Snack' },
  { id: 'dessert', label: 'Dessert' },
] as const
