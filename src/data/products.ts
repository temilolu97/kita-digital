import { type Product } from '../types';

export const products: Product[] = [
  // Smartphones
  {
    id: 'iphone-13-pro',
    name: 'iPhone 13 Pro (128GB)',
    price: 710000,
    category: 'Smartphones',
    image: 'https://i.ebayimg.com/thumbs/images/g/4LMAAOSwZQ1mjZt7/s-l300.webp',
    description: 'Apple iPhone 13 Pro with A15 Bionic chip, Pro camera system, and stunning Super Retina XDR display.',
    inStock: true,
    rating: 4.8,
    reviews: 1247
  },
  {
    id: 'samsung-galaxy-s23',
    name: 'Samsung Galaxy S23 (256GB)',
    price: 620000,
    category: 'Smartphones',
    image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=500&h=500&fit=crop',
    description: 'Samsung Galaxy S23 with Snapdragon 8 Gen 2, 50MP camera, and 6.1" Dynamic AMOLED display.',
    inStock: true,
    rating: 4.7,
    reviews: 892
  },
  {
    id: 'tecno-phantom-x2',
    name: 'Tecno Phantom X2',
    price: 510000,
    category: 'Smartphones',
    image: 'https://i.ebayimg.com/images/g/7C4AAeSwyDBnwkzc/s-l960.webp',
    description: 'Tecno Phantom X2 with MediaTek Dimensity 9000, 50MP camera, and 6.8" AMOLED display.',
    inStock: true,
    rating: 4.5,
    reviews: 456
  },
  {
    id: 'infinix-zero-ultra-5g',
    name: 'Infinix Zero Ultra 5G',
    price: 350000,
    category: 'Smartphones',
    image: 'https://i.ebayimg.com/images/g/r9cAAOSw6DBm7PS8/s-l1600.webp',
    description: 'Infinix Zero Ultra 5G with MediaTek Dimensity 920, 200MP camera, and 6.8" AMOLED display.',
    inStock: true,
    rating: 4.3,
    reviews: 234
  },
  {
    id: 'redmi-note-12-pro-plus',
    name: 'Redmi Note 12 Pro+',
    price: 295000,
    category: 'Smartphones',
    image: 'https://i.ebayimg.com/images/g/YowAAOSwFUJnTyS7/s-l1600.webp',
    description: 'Redmi Note 12 Pro+ with MediaTek Dimensity 1080, 200MP camera, and 6.67" AMOLED display.',
    inStock: true,
    rating: 4.4,
    reviews: 567
  },

  // Gadgets & Accessories
  {
    id: 'apple-airpods-pro-2',
    name: 'Apple AirPods Pro 2',
    price: 190000,
    category: 'Gadgets & Accessories',
    image: 'https://i.ebayimg.com/images/g/7eUAAeSw6X9oaCj2/s-l1600.webp',
    description: 'Apple AirPods Pro 2 with Active Noise Cancellation, Spatial Audio, and up to 6 hours of listening time.',
    inStock: true,
    rating: 4.9,
    reviews: 2156
  },
  {
    id: 'samsung-galaxy-watch-6',
    name: 'Samsung Galaxy Watch 6',
    price: 215000,
    category: 'Gadgets & Accessories',
    image: 'https://i.ebayimg.com/images/g/SEcAAeSwJ1ZoOeLd/s-l1600.webp',
    description: 'Samsung Galaxy Watch 6 with advanced health monitoring, GPS, and 40-hour battery life.',
    inStock: true,
    rating: 4.6,
    reviews: 789
  },
  {
    id: 'oraimo-freepods-4',
    name: 'Oraimo FreePods 4',
    price: 58000,
    category: 'Gadgets & Accessories',
    image: 'https://cdn-img.oraimo.com/fit-in/600x600/NG/album/oeb-e104dc/oeb-e104dc-white.png',
    description: 'Oraimo FreePods 4 with premium sound quality, touch controls, and 24-hour total playtime.',
    inStock: true,
    rating: 4.2,
    reviews: 345
  },
  {
    id: 'anker-20000mah-power-bank',
    name: 'Anker 20000mAh Power Bank',
    price: 65000,
    category: 'Gadgets & Accessories',
    image: 'https://i.ebayimg.com/images/g/WZcAAOSwt2pfh3OY/s-l1600.webp',
    description: 'Anker 20000mAh Power Bank with Power Delivery, USB-C, and multiple device charging.',
    inStock: true,
    rating: 4.7,
    reviews: 1234
  },
  {
    id: 'smartwatch-waterproof',
    name: 'Smartwatch (Waterproof)',
    price: 75000,
    category: 'Gadgets & Accessories',
    image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500&h=500&fit=crop',
    description: 'Waterproof smartwatch with heart rate monitoring, GPS tracking, and 7-day battery life.',
    inStock: true,
    rating: 4.1,
    reviews: 234
  },

  // Tablets & Mobile Tech
  {
    id: 'samsung-galaxy-tab-s8',
    name: 'Samsung Galaxy Tab S8',
    price: 460000,
    category: 'Tablets & Mobile Tech',
    image: 'https://skit.ng/wp-content/uploads/2022/11/Samsung-Tab-S8-ultra-256-with-keyboard-b.jpg',
    description: 'Samsung Galaxy Tab S8 with Snapdragon 8 Gen 1, 11" WQXGA display, and S Pen included.',
    inStock: true,
    rating: 4.8,
    reviews: 567
  },
  {
    id: 'ipad-9th-gen',
    name: 'iPad 9th Gen (64GB)',
    price: 380000,
    category: 'Tablets & Mobile Tech',
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&h=500&fit=crop',
    description: 'Apple iPad 9th Gen with A13 Bionic chip, 10.2" Retina display, and support for Apple Pencil.',
    inStock: true,
    rating: 4.9,
    reviews: 1892
  },
  {
    id: 'lenovo-tab-m10-plus',
    name: 'Lenovo Tab M10 Plus',
    price: 275000,
    category: 'Tablets & Mobile Tech',
    image: 'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/39/1100172/1.jpg?3945',
    description: 'Lenovo Tab M10 Plus with MediaTek Helio P22T, 10.3" FHD display, and 8GB RAM.',
    inStock: true,
    rating: 4.3,
    reviews: 234
  },
  {
    id: 'tecno-pova-pad',
    name: 'Tecno Pova Pad',
    price: 198000,
    category: 'Tablets & Mobile Tech',
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&h=500&fit=crop',
    description: 'Tecno Pova Pad with MediaTek Helio G99, 10.1" FHD display, and 8GB RAM.',
    inStock: true,
    rating: 4.0,
    reviews: 123
  },
  {
    id: 'amazon-fire-hd-10',
    name: 'Amazon Fire HD 10',
    price: 152000,
    category: 'Tablets & Mobile Tech',
    image: 'https://i.ebayimg.com/images/g/QPIAAeSww-hoZACR/s-l1600.webp',
    description: 'Amazon Fire HD 10 with octa-core processor, 10.1" 1080p display, and 32GB storage.',
    inStock: true,
    rating: 4.2,
    reviews: 456
  },

  // Mobile Accessories
  {
    id: 'baseus-65w-fast-charger',
    name: 'Baseus 65W Fast Charger',
    price: 52000,
    category: 'Mobile Accessories',
    image: 'https://i.ebayimg.com/images/g/sAUAAOSwk~Bn2pJD/s-l1600.webp',
    description: 'Baseus 65W Fast Charger with USB-C and USB-A ports, compatible with most devices.',
    inStock: true,
    rating: 4.6,
    reviews: 789
  },
  {
    id: 'oraimo-3in1-charging-cable',
    name: 'Oraimo 3-in-1 Charging Cable',
    price: 50000,
    category: 'Mobile Accessories',
    image: 'https://pictures-nigeria.jijistatic.net/35400288_3_431x505.jpg',
    description: 'Oraimo 3-in-1 charging cable with Lightning, USB-C, and Micro USB connectors.',
    inStock: true,
    rating: 4.4,
    reviews: 567
  },
  {
    id: 'bluetooth-selfie-stick-tripod',
    name: 'Bluetooth Selfie Stick Tripod',
    price: 58000,
    category: 'Mobile Accessories',
    image: 'https://i.ebayimg.com/thumbs/images/g/e~4AAOSw9gloTI7T/s-l300.webp',
    description: 'Bluetooth selfie stick with tripod stand, remote control, and extendable design.',
    inStock: true,
    rating: 4.3,
    reviews: 234
  },
  {
    id: 'wireless-charging-pad',
    name: 'Wireless Charging Pad',
    price: 61000,
    category: 'Mobile Accessories',
    image: 'https://i.ebayimg.com/images/g/2j4AAOSw9T9memuH/s-l1600.webp',
    description: '10W wireless charging pad with LED indicator and non-slip design for Qi-enabled devices.',
    inStock: true,
    rating: 4.5,
    reviews: 456
  },
  {
    id: 'usb-c-hub-adapter',
    name: 'USB-C Hub Adapter',
    price: 63000,
    category: 'Mobile Accessories',
    image: 'https://i.ebayimg.com/images/g/2k4AAOSwIJVnUm-6/s-l1600.webp',
    description: 'USB-C hub adapter with HDMI, USB-A, SD card reader, and power delivery support.',
    inStock: true,
    rating: 4.7,
    reviews: 678
  }
];

export const categories = [
  { id: 'smartphones', name: 'Smartphones', description: 'Latest smartphones from top brands' },
  { id: 'gadgets-accessories', name: 'Gadgets & Accessories', description: 'Premium gadgets and accessories' },
  { id: 'tablets-mobile-tech', name: 'Tablets & Mobile Tech', description: 'Tablets and mobile technology' },
  { id: 'mobile-accessories', name: 'Mobile Accessories', description: 'Essential mobile accessories' }
]; 