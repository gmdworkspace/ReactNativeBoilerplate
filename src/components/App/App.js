import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Incrementor from '../Incrementor';
import reducer from '../../reducers';

const store = createStore(reducer);

const App = () => {
  return (
    <Provider store={store}>
      <Incrementor />
    </Provider>
  );
};

export default App;