export default function TitleCard(props) {
  return (
    <section className="card">
      <h1>
        {props.name}&nbsp;
        ({props.birthYear}-{props.deathYear})
        </h1>
      <img src={props.img} alt=""/>
      <p>{props.description}</p>
    </section>
  );
}