import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';

import store from '../redux/store';

const history = createMemoryHistory();

const Wrappers = ({ children }) => (
  <Provider store={store}>
    <Router history={history}>{children}</Router>
  </Provider>
);

const customRender = ui => render(ui, { wrapper: Wrappers });

export * from '@testing-library/react';

export { customRender as render };
