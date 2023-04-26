// export const categoriesObject = {
//   telephones: { _id: '1', name: 'Телефоны' },
//   laptops: { _id: '2', name: 'Ноутбуки' },
//   headphones: { _id: '3', name: 'Наушники' },
//   keyboards: { _id: '4', name: 'Клавиатуры' },
//   gameConsoles: { _id: '5', name: 'Игровые консоли' },
//   chairs: { _id: '6', name: 'Кресла для компьютера' },
// };
export const categories = [
  { _id: '1', name: 'Телефоны' },
  { _id: '2', name: 'Ноутбуки' },
  { _id: '3', name: 'Наушники' },
  { _id: '4', name: 'Клавиатуры' },
  { _id: '5', name: 'Игровые консоли' },
  { _id: '6', name: 'Кресла для компьютера' },
  { _id: '7', name: 'Мониторы' },
];

const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(categories);
    }, 1000);
  });

export default {
  fetchAll,
};
