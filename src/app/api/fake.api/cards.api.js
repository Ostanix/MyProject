// import { categoriesObject as categories} from './categories';
const cards = [
  {
    _id: 111,
    name: 'Телефон Apple iPhone 13',
    category: 'Телефоны',
    price: 89990,
    image: 'https://kursor-shop.kz/image/cache/catalog/apple/iphone-13/iphone13-500x500.jpg',
  },
  {
    _id: 222,
    name: 'Ноутбук Apple MacBook Pro 13',
    category: 'Ноутбуки',
    price: 129990,
    image: 'https://berudevice.ru/pictures/product/big/12771_big.jpg',
  },
  {
    _id: 333,
    name: 'Наушники Apple AirPods Max',
    category: 'Наушники',
    price: 59990,
    image:
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-max-hero-select-202011_FMT_WHH?wid=607&hei=556&fmt=jpeg&qlt=90&.v=1633623988000',
  },
  {
    _id: 444,
    name: 'Клавиатура Logitech G512 Carbon',
    category: 'Клавиатуры',

    price: 7990,
    image:
      'https://resource.logitech.com/content/dam/gaming/en/non-braid/flying-v-mx-g512/g512-keyboard-gallery-2-2x-nb.png',
  },
  {
    _id: 555,
    name: 'Монитор Samsung Odyssey G7 27"',
    category: 'Мониторы',

    price: 39990,
    image: 'https://m.media-amazon.com/images/I/61Sz-1cB+PL._AC_UF894,1000_QL80_.jpg',
  },
  {
    _id: 666,
    name: 'Игровая консоль Sony PlayStation 5',
    category: 'Игровые консоли',
    price: 44990,
    image:
      'https://igromaster.by/upload/iblock/1ff/1ffc34fe71909f4f96c87d16528e2e2f.webp?1601892093',
  },
  {
    _id: 777,
    name: 'Игровое кресло Cougar Ranger',
    category: 'Кресла для компьютера',
    price: 15990,
    image: 'https://13chairs.ru/wp-content/uploads/2020/03/Cougar-Ranger00002.jpg',
  },
  {
    _id: 888,
    name: 'Наушники HyperX Cloud II',
    category: 'Наушники',
    price: 7990,
    image:
      'https://cdn.shopify.com/s/files/1/0564/3612/9997/products/hyperx_cloud_ii_wireless_1_main.jpg?v=1662449689',
  },
  {
    _id: 999,
    name: 'Ноутбук Lenovo IdeaPad 5',
    category: 'Ноутбуки',
    price: 44990,
    image:
      'https://img.5element.by/import/images/ut/goods/good_0910c5f8-ab63-11ec-bb95-0050560120e8/14acn6-82l7005rre-ideapad-5-pro-noutbuk-lenovo-1_600.jpg',
  },
  {
    _id: 101010,
    name: 'Телефон Samsung Galaxy S21',
    category: 'Телефоны',
    price: 69990,
    image: 'https://m.media-amazon.com/images/I/61m1Dot5KCL.jpg',
  },
  {
    _id: 111111,
    name: 'Клавиатура HyperX Alloy FPS RGB',
    category: 'Клавиатуры',

    price: 9990,
    image:
      'https://venturebeat.com/wp-content/uploads/2018/09/HyperX-Alloy-FPS-RGB-4.jpg?fit=2400%2C1500&strip=all',
  },
  {
    _id: 121212,
    name: 'Монитор Acer',
    category: 'Мониторы',

    price: 39990,
    image:
      'https://img.telemart.ua/311879-473676-product_popup/acer-238-nitro-xv240ypbmiiprx-umqx0eep01-black.png',
  },
];

const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(cards);
    }, 1000);
  });

const getById = (id) =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(cards.find((card) => card._id === id));
    }, 1000);
  });

export default {
  fetchAll,
  getById,
};
