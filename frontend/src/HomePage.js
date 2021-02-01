import Header from './Header';
import NewPageForm from './NewPageForm';

import { useState } from 'react';

import './HomePage.css';

export default function HomePage() {
  const [formShown, setFormShown] = useState(false);

  return (
    <main className="homepage">
      <Header />
      <h1 className="blurb">
        Simple, easy-to-use virtual guestbooks to say goodbye to your loved ones.
      </h1>
      {
        formShown || <div className="btn" onClick={() => setFormShown(true)}>
          Start Here
        </div>
      }

      {formShown && <NewPageForm />}
    </main>
  )
}