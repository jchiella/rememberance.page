import Header from './Header';
import Card from './Card';

export default function App() {
  return (
    <main className="app">
      <Header />
      <Card
        sender="James Chiella"
        message="Hi there!" 
        date="01/12/2021"
      />
    </main>
  );
}