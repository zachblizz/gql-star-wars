import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import Routes from './routes';
import { ApolloProvider } from 'react-apollo';
import { client } from './graphQL'

import { Provider } from 'react-redux'
import store from './redux/store'

const App = (
  <ApolloProvider client={client}>
    <Provider store={store}>
      <Routes />
    </Provider>
  </ApolloProvider>
);

ReactDOM.render(App, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
