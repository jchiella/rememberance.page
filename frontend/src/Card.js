import './Card.css'

export default function Card(props) {
  return (
    <section className="card">
      <p>{props.message}</p>
      <p>
        <em>{props.sender}</em>&nbsp;
        ({new Date(props.date).toDateString()})
      </p>
    </section>
  );
}