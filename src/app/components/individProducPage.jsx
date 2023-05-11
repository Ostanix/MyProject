/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import API from '../api';
import { Link } from 'react-router-dom';

const IndividualProductPage = ({ cardId }) => {
  const [card, setCard] = useState();

  useEffect(() => {
    API.cards.getById(cardId).then((data) => setCard(data));
  });

  if (card) {
    return (
      <div key={card._id} className='card mb-3' style={{ minWidth: '138px', minHeight: '138px' }}>
        <div className='row no-gutters'>
          <div className='col-md-4'>
            <img src={card.image} className='card-img' alt={card.name} />
          </div>
          <div className='col-md-8'>
            <div className='card-body' style={{ maxWidth: '300px', maxHeight: '300px' }}>
              <h5 className='card-title' style={{ minWidth: '300px' }}>
                {card.name}
              </h5>

              <p className='card-text'>
                <small className='text-muted'>Остаток товара: {card.quantity}</small>
              </p>
              <p className='card-text'>Цена: {card.price}</p>
              <p>
                <Link to={`/shoppingCart/${card._id}`} className='btn btn-primary'>
                  Добавить в корзину
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <h1>Loading...</h1>;
  }
};

export default IndividualProductPage;
