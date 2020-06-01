import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCurrentNews } from '../../redux/news/newsOperations';

const NewsList = () => {
  const state = useSelector((state) => state.news);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentNews());
  }, []);

  return (
    <ul>
      {state.map((item) => {
        return (
          <li key={item.newsID}>
            <Link
              to={{
                pathname: `/news/${item.newsID}`,
                state: { id: item.newsID },
              }}
            >
              {item.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NewsList;
