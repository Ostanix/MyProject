/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
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
  const [selectedCategory, setSelectedCategory] = useState();
  const [sortBy, setSortBy] = useState({ iter: null, order: null });
  const [name, setName] = useState(''); // searchBar

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name);
  }; // searchBar

  const handleChange = (event) => {
    setName(event.target.value);
  }; // searchBar

  const pageSize = 4;

  useEffect(() => {
    const fetchData = async () => {
      const result = await API.cards.fetchAll();
      setCards(result);
    };

    fetchData();
  }, []);

  useEffect(() => {
    API.categories.fetchAll().then((data) => setCategories(data));
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory]);

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  const handleCategorySelect = (item) => {
    setSelectedCategory(item);
  };

  const handleSort = (item) => {
    setSortBy(item);
  };

  const filteredCards = selectedCategory
    ? cards.filter((card) => card.category === selectedCategory.name)
    : cards;

  const count = filteredCards.length;

  const sortedCards = _.orderBy(filteredCards, [sortBy.iter], [sortBy.order]);

  const cardPaginate = paginate(sortedCards, currentPage, pageSize);

  const clearFilter = () => {
    setSelectedCategory();
    setSortBy({ iter: null, order: null });
  };

  return (
    <>
      <div>
        <SearchBar onHandleSubmit={handleSubmit} onHandleChange={handleChange} name={name} />
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
};

export default MainPage;
