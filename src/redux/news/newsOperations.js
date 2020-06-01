import { firestore } from '../../firesbase/config';
import { newsSlice } from '../reducers/newsReducer';

export const getCurrentNews = () => (dispatch) => {
  firestore.collection('news').onSnapshot((doc) => {
    const news = doc.docs.map((d) => ({ ...d.data(), newsID: d.id }));
    dispatch(newsSlice.actions.addNews(news));
  });
};
