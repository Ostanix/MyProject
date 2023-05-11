/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';

function SortBar({ onSort, sortBy }) {
  const handleSort = () => {
    if (sortBy.iter === '') {
      onSort({ iter: 'price', order: 'asc' });
    } else {
      const newSortState = {
        iter: sortBy.iter,
        order: sortBy.order === 'asc' ? 'desc' : 'asc',
      };
      onSort(newSortState);
    }
  };

  const textChangeFunc = (sort) => {
    if (sort.order === 'asc') {
      return 'по возрастанию цены';
    } else if (sort.order === 'desc') {
      return 'по убыванию цены';
    }

    return 'по стоимости';
  };

  const iconChangeFunc = (item) => {
    if (item.order === 'asc') {
      return <i className='bi bi-caret-down-fill'></i>;
    } else if (item.order === 'desc') {
      return <i className='bi bi-caret-up-fill'></i>;
    }

    return null;
  };

  return (
    <div>
      <h5 className='text-primary' type='button' onClick={() => handleSort()}>
        Cортировка ({textChangeFunc(sortBy)}){iconChangeFunc(sortBy)}
      </h5>
    </div>
  );
}

export default SortBar;

SortBar.propTypes = {
  onSort: PropTypes.func.isRequired,
};
