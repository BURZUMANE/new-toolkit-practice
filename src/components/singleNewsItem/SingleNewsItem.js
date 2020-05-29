import React from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const SingleNewsItem = () => {
  const state = useSelector((state) => state);
  const location = useLocation();
  console.log(location.state.id);
  console.log(state);
  return <div>hello</div>;
};

export default SingleNewsItem;
