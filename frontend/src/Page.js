import Header from './Header';
import Card from './Card';
import TitleCard from './TitleCard';

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function Page() {
  const { pageId } = useParams();
  // const pageId = '6016271cb5dc01933c2d455f';

  const API_URL = 'http://localhost:3001';

  const [page, setPage] = useState({});
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/pages/${pageId}`)
      .then((res) => res.json())
      .then(setPage);
  }, [pageId]);

  useEffect(() => {
    fetch(`${API_URL}/cards/${pageId}`)
      .then((res) => res.json())
      .then(setCards);
  }, [pageId]);

  return (
    <main className="page">
      <Header />
      <TitleCard 
        name={page.name}
        birthYear={page.birthYear}
        deathYear={page.deathYear}
        description={page.description}
      />
      {
        cards.map((card) => (
          <Card
            key={card._id}
            sender={card.sender}
            message={card.message}
            date={card.date}
            colour={card.colour}
          />
        ))
      }
    </main>
  );
}