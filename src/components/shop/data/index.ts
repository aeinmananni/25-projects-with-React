import { SelectTypes, ProductsType } from '../models';
import IphoneImage1 from '../image/image1.jpg';
import IphoneImage2 from '../image/image2.jpg';
import IphoneImage3 from '../image/image3.jpg';
import samsungImage1 from '../image/image4.jpg';
import samsungImage2 from '../image/image5.jpg';
import samsungImage3 from '../image/image6.jpg';
import xiaomiImage1 from '../image/image7.jpg';

export const BRANDS_ITEMS: SelectTypes[] = [
  { label: 'همه', value: 'All' },
  { label: 'Apple', value: 'Apple' },
  { label: 'Samsung', value: 'Samsung' },
  { label: 'Xiaomi', value: 'Xiaomi' },
  { label: 'Huawei', value: 'Huawei' },
  { label: 'OnePlus', value: 'OnePlus' },
  { label: 'Nokia', value: 'Nokia' },
];

export const PRODUCTS_ITEMS: ProductsType[] = [
  // APPLE
  {
    id: 1,
    title: 'iPhone 14 Pro Max',
    image: IphoneImage1,
    availableBrand: 'Apple',
    quntity: 0,
    price: 1199 * 50000, // 59,950,000 تومان
  },
  {
    id: 2,
    title: 'iPhone 14',
    image: IphoneImage2,
    availableBrand: 'Apple',
    quntity: 0,
    price: 999 * 50000, // 49,950,000 تومان
  },
  {
    id: 3,
    title: 'iPhone 13',
    image: IphoneImage3,
    availableBrand: 'Apple',
    quntity: 0,
    price: 799 * 50000, // 39,950,000 تومان
  },

  // SAMSUNG
  {
    id: 4,
    title: 'Samsung Galaxy S23 Ultra',
    image: samsungImage1,
    availableBrand: 'Samsung',
    quntity: 0,
    price: 1199 * 50000, // 59,950,000 تومان
  },
  {
    id: 5,
    title: 'Samsung Galaxy S23',
    image: samsungImage2,
    availableBrand: 'Samsung',
    quntity: 0,
    price: 999 * 50000, // 49,950,000 تومان
  },
  {
    id: 6,
    title: 'Samsung Galaxy A54',
    image: samsungImage3,
    availableBrand: 'Samsung',
    quntity: 0,
    price: 449 * 50000, // 22,450,000 تومان
  },

  // XIAOMI
  {
    id: 7,
    title: 'Xiaomi 13 Pro',
    image: xiaomiImage1,
    availableBrand: 'Xiaomi',
    quntity: 0,
    price: 899 * 50000, // 44,950,000 تومان
  },
  {
    id: 8,
    title: 'Xiaomi 13',
    image: '',
    availableBrand: 'Xiaomi',
    quntity: 0,
    price: 699 * 50000, // 34,950,000 تومان
  },
  {
    id: 9,
    title: 'Xiaomi Redmi Note 12',
    image: '',
    availableBrand: 'Xiaomi',
    quntity: 0,
    price: 299 * 50000, // 14,950,000 تومان
  },

  // HUAWEI
  {
    id: 10,
    title: 'Huawei P60 Pro',
    image: '',
    availableBrand: 'Huawei',
    quntity: 0,
    price: 1099 * 50000, // 54,950,000 تومان
  },
  {
    id: 11,
    title: 'Huawei Mate 50 Pro',
    image: '',
    availableBrand: 'Huawei',
    quntity: 0,
    price: 999 * 50000, // 49,950,000 تومان
  },
  {
    id: 12,
    title: 'Huawei Nova 11',
    image: '',
    availableBrand: 'Huawei',
    quntity: 0,
    price: 499 * 50000, // 24,950,000 تومان
  },

  // ONEPLUS
  {
    id: 13,
    title: 'OnePlus 11',
    image: '',
    availableBrand: 'OnePlus',
    quntity: 0,
    price: 799 * 50000, // 39,950,000 تومان
  },
  {
    id: 14,
    title: 'OnePlus Nord 3',
    image: '',
    availableBrand: 'OnePlus',
    quntity: 0,
    price: 499 * 50000, // 24,950,000 تومان
  },
  {
    id: 15,
    title: 'OnePlus 10 Pro',
    image: '',
    availableBrand: 'OnePlus',
    quntity: 0,
    price: 699 * 50000, // 34,950,000 تومان
  },

  // NOKIA
  {
    id: 16,
    title: 'Nokia G50',
    image: '',
    availableBrand: 'Nokia',
    quntity: 0,
    price: 299 * 50000, // 14,950,000 تومان
  },
  {
    id: 17,
    title: 'Nokia X30',
    image: '',
    availableBrand: 'Nokia',
    quntity: 0,
    price: 399 * 50000, // 19,950,000 تومان
  },
  {
    id: 18,
    title: 'Nokia G22',
    image: '',
    availableBrand: 'Nokia',
    quntity: 0,
    price: 249 * 50000, // 12,450,000 تومان
  },
];
