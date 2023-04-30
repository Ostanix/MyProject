import React from 'react';
import { useParams } from 'react-router-dom';
import IndividualProductPage from '../components/individProducPage';
import ShoppingCartList from '../components/cart/shoppingCartList';

const ShoppingCart = () => {
  const params = useParams();
  const { shopCartId } = params;

  return (
    <>
      {shopCartId ? (
        <ShoppingCartList shopCartId={shopCartId} />
      ) : (
        <IndividualProductPage cardId={shopCartId} />
      )}
    </>
  );
};

export default ShoppingCart;
