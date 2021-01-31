export default function TitleCard(props) {
  return (
    <section className="card">
      <h1>{props.title}</h1>
      <img src={props.img} />
      <p>{props.description}</p>
    </section>
  );
}