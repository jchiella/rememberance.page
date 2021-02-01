import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';

import Page from './Page';
import HomePage from './HomePage';

export default function App() {
  return (
    <main className="app">
      <BrowserRouter>
        <Switch>
          <Route path="/:pageId" children={<Page />} />
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </BrowserRouter>
    </main>
  );
}