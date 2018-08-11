import { ConnectedRouter } from 'connected-react-router';
import { History } from 'history';
import * as React from 'react';
import { Provider } from 'react-redux';
import { Store } from 'redux';

import { router } from 'router';
import { IGlobalState } from 'types/global';

interface IAppProps {
  store: Store<IGlobalState>;
  history: History;
}

export const App = (props: IAppProps) => (
  <Provider store={props.store}>
    <ConnectedRouter history={props.history}>
      {router}
    </ConnectedRouter>
  </Provider>
);
