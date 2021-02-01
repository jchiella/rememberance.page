export default function NewPageForm() {
  /*
name: String,
  birthYear: Number,
  deathYear: Number,
  description: String,
  */
  return (
    <form>
      <input type="text" name="name" placeholder="Name"></input><br />
      <input type="number" name="birthYear" placeholder="Year of Birth"></input><br />
      <input type="number" name="deathYear" placeholder="Year of Death"></input><br />
      <textarea name="description" rows="10" placeholder="Say a few words about your loved one..."></textarea>
      <button type="submit" className="btn" name="submit">Create</button>
    </form>
  )
}