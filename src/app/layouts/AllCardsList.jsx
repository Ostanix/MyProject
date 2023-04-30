/* eslint-disable react/prop-types */
import React from 'react';
import { useParams } from 'react-router-dom';
import IndividualProductPage from '../components/individProducPage';
import MainPage from '../components/mainPage';

const AllCardsList = () => {
  const params = useParams();
  const { cardId } = params;

  return <>{cardId ? <IndividualProductPage cardId={cardId} /> : <MainPage />}</>;
};

export default AllCardsList;
