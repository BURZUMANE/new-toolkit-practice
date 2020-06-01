import React from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const SingleNewsItem = () => {
  const state = useSelector((state) => state.news);

  const location = useLocation();
  const id = location.state.id;

  const singleNewsItem = state.find((item) => {
    return item.newsID === id;
  });
  return (
    <>
      {singleNewsItem && (
        <div>
          <h2>{singleNewsItem.title}</h2>
          <p>by: {singleNewsItem.author}</p>
          <p>{singleNewsItem.description}</p>
        </div>
      )}
    </>
  );
};

export default SingleNewsItem;
