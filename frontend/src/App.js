import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';

import Page from './Page';

export default function App() {
  return (
    <main className="app">
      <BrowserRouter>
        <Switch>
          <Route path="/:pageId" children={<Page />} />
        </Switch>
      </BrowserRouter>
    </main>
  );
}