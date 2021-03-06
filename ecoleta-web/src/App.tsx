import { Route, BrowserRouter } from 'react-router-dom';

import { Home } from '../src/pages/Home';
import { CreatePoint } from '../src/pages/CreatePoint';

import GlobalStyles from './styles/GlobalStyles';

export const App = () => {
  return (
    <BrowserRouter>
      <Route exact path={'/'} component={Home} />
      <Route path={'/create-point'} component={CreatePoint} />
      <GlobalStyles />
    </BrowserRouter>
  );
};
