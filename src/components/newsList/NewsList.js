import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Link, Route } from 'react-router-dom';

import { v4 as uuidv4 } from 'uuid';

const NewsList = () => {
  const state = useSelector((state) => state);
  return (
    <ul>
      {state.map((item) => (
        <li key={item.id}>
          <Link
            to={{
              pathname: `/news/${item.id}`,
              state: { id: item.id },
            }}
          >
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NewsList;
