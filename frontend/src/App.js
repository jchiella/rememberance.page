import Header from './Header';
import Card from './Card';
import TitleCard from './TitleCard';

export default function App() {
  return (
    <main className="app">
      <Header />
      <TitleCard 
        name="John Doe"
        birthYear="1950"
        deathYear="2020"
        description="John Doe was great!"
      />
      <Card
        sender="James Chiella"
        message="Hi there!" 
        date="01/12/2021"
        colour="lightblue"
      />
    </main>
  );
}