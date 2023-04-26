import React from 'react';

const CardsList = ({ ...card }) => {
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
            <p className='card-text'>Цена: {card.price}</p>
            <p className='card-text'>
              <small className='text-muted'>Id товара: {card._id}</small>
            </p>
            <p>
              <a href='#' className='btn btn-primary'>
                Открыть карточку
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsList;

/*


*/
