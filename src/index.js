import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import App from './components/app';
import reducers from './reducers';
import NewsList from './components/news_list';
import NewsIndex from './components/news_index';
import HeadNews from './components/head_news';
import Header from './components/Header';
import Slider from './containers/slider';
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <div>
          <Header />
        </div>
        <Switch>
          <Route path="/search" component={App} />
          <Route path="/index" component={NewsIndex} />
          <Route path="/" component={HeadNews} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.querySelector('.container')
);
