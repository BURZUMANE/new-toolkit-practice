import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Link, Route } from 'react-router-dom';

import { v4 as uuidv4 } from 'uuid';

const NewsList = () => {
  const state = useSelector((state) => state);
  return (
    <ul>
      {state.map((item) => {
        console.log(item.newsID);
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
