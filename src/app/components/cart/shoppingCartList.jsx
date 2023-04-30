/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import API from '../../api';
import ShopingCartCard from './shopingCartCard';
import CheckoutWindow from './checkoutWindow';

const ShoppingCartList = ({ shopCartId }) => {
  const [arrayOfShoppingCards, setArrayOfShoppingCards] = useState([]);

  const handleDeleteCard = (itemId) => {
    setArrayOfShoppingCards(arrayOfShoppingCards.filter((card) => card._id !== itemId));
    localStorage.setItem('shoppingCards', JSON.stringify(arrayOfShoppingCards));
  };

  useEffect(() => {
    const storedShoppingCards = JSON.parse(localStorage.getItem('shoppingCards'));
    if (storedShoppingCards) {
      setArrayOfShoppingCards(storedShoppingCards);
    }
  }, []);

  useEffect(() => {
    API.cards.fetchAll().then((data) => {
      const cards = data.filter((item) => item._id === shopCartId);
      if (cards.length > 0 && !arrayOfShoppingCards.includes(cards.shopCartId)) {
        const updatedShoppingCards = [...arrayOfShoppingCards, ...cards];
        setArrayOfShoppingCards(updatedShoppingCards);
        localStorage.setItem('shoppingCards', JSON.stringify(updatedShoppingCards));
      }
    });
  }, []);

  return (
    <>
      <div>
        <CheckoutWindow />
      </div>

      <div>
        {arrayOfShoppingCards.map((shoppingCard) => (
          <ShopingCartCard
            key={shoppingCard._id}
            card={shoppingCard}
            onHandleDeleteCard={handleDeleteCard}
          />
        ))}
      </div>
    </>
  );
};

export default ShoppingCartList;
