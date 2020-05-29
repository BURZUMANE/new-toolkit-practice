import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { newsSlice } from './redux/store';
import { v4 as uuidv4 } from 'uuid';

import './App.css';
import NewsList from './components/newsList/NewsList';
import SingleNewsItem from './components/singleNewsItem/SingleNewsItem';
const URL =
  'http://newsapi.org/v2/everything?q=bitcoin&from=2020-04-28&sortBy=publishedAt&apiKey=baf3b32ef95d4cd0803dcc5d7a5bf9b1';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const getNews = async () => {
      const data = await axios.get(URL);
      dispatch(
        newsSlice.actions.addNews(
          data.data.articles.map((item) => ({ ...item, id: uuidv4() }))
        )
      );
    };
    getNews();
    // axios.get(URL).then((data) => {
    //   dispatch(newsSlice.actions.addNews(data.data.articles));
    // });
  }, []); // Only re-run the effect if count changes
  return (
    <>
      <Switch>
        <Route exact path="/" component={NewsList}></Route>

        <Route path="/news/:id" component={SingleNewsItem}></Route>
      </Switch>
    </>
  );
}

export default App;
