/* eslint-disable react/prop-types */
import React from 'react';

const ShopingCartCard = ({ card, onHandleDeleteCard }) => {
  const handleDeleteCard = () => {
    localStorage.removeItem(`shoppingCard-${card._id}`);
    onHandleDeleteCard(card._id);
  };
  return (
    <div className='card mb-3' style={{ minWidth: '138px', minHeight: '138px' }}>
      <div>
        <button
          onClick={handleDeleteCard}
          type='button'
          className='close'
          data-dismiss='modal'
          aria-label='Close'
        >
          <span aria-hidden='true'>&times;</span>
        </button>
      </div>
      <div className='row no-gutters'>
        <div className='col-md-4'>
          <img src={card.image} className='card-img' alt={card.name} />
        </div>
        <div className='col-md-8'>
          <p className='card-text'>
            <small className='text-muted'>Id товара: {card._id}</small>
          </p>
          <div className='card-body' style={{ maxWidth: '300px', maxHeight: '300px' }}>
            <h5 className='card-title' style={{ minWidth: '300px' }}>
              {card.name}
            </h5>

            <p className='card-text'>
              <small className='text-muted'>Остаток товара: {card.quantity}</small>
            </p>
            <p className='card-text'>Цена: {card.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopingCartCard;
