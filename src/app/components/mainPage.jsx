import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { paginate } from '../utils/paginate';
import API from '../api';
import CardsList from './cardsList';
import Pagination from './pagination';
import CategoriesList from './categoriesList';
import SortBar from './sortBar';
import _ from 'lodash';
import SearchBar from './searchBar';

const MainPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [cards, setCards] = useState([]);
  const [categories, setCategories] = useState();
  const [name, setName] = useState(''); //
  const [selectedCategory, setSelectedCategory] = useState();
  const [sortBy, setSortBy] = useState({ iter: '', order: '' });
  const pageSize = 4;

  useEffect(() => {
    API.cards.fetchAll().then((data) => setCards(data));
  }, []);

  useEffect(() => {
    API.categories.fetchAll().then((data) => setCategories(data));
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, name]);

  const handleCategorySelect = (item) => {
    if (name !== '') setName('');
    setSelectedCategory(item);
  };

  const handleSearchName = ({ target }) => {
    setSelectedCategory(undefined);
    setName(target.value);
  }; // searchBar ///

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  const handleSort = (item) => {
    setSortBy(item);
    console.log(item);
  };

  useEffect(() => {
    if (cards) {
      const filteredCards = selectedCategory
        ? cards.filter((card) => JSON.stringify(card.category) === JSON.stringify(selectedCategory))
        : cards;
      const cardsCrop = paginate(filteredCards, currentPage, pageSize);
      if (cardsCrop.length === 0 && currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    }
  }, [cards]);

  if (cards) {
    const filteredCards = name
      ? cards.filter((card) => card.name.toLowerCase().indexOf(name.toLowerCase()) !== -1)
      : selectedCategory
      ? cards.filter((card) => JSON.stringify(card.category) === JSON.stringify(selectedCategory))
      : cards;

    const count = filteredCards.length;
    const sortedCards = _.orderBy(filteredCards, [sortBy.iter], [sortBy.order]);
    const cardPaginate = paginate(sortedCards, currentPage, pageSize);

    const clearFilter = () => {
      setSelectedCategory();
      setSortBy({ iter: '', order: '' });
    };

    return (
      <>
        <div>
          <SearchBar onHandleSearchName={handleSearchName} name={name} />
        </div>

        <div className='d-flex justify-content-center'>
          <SortBar onSort={handleSort} sortBy={sortBy} />
        </div>

        <div className='d-flex justify-content-space-saround'>
          {categories && (
            <div className='d-flex flex-column flex-shrink-0 p-5'>
              <div className='fixed'>
                <CategoriesList
                  items={categories}
                  onItemSelect={handleCategorySelect}
                  selectedItem={selectedCategory}
                />
                <button className='btn btn-secondary mt-2' onClick={clearFilter}>
                  Очистить фильтр
                </button>
              </div>
            </div>
          )}

          {count > 0 && (
            <div>
              {cardPaginate.map((card) => (
                <CardsList key={card._id} {...card} />
              ))}
            </div>
          )}
        </div>

        <div className='d-flex justify-content-center'>
          <Pagination
            itemsCount={filteredCards.length}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      </>
    );
  }
  return 'loading...';
};

MainPage.propTypes = {
  cards: PropTypes.array,
};

export default MainPage;
