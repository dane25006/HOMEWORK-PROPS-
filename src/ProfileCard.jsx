import "./ProfileCard.css";

export default function ProfileCard({ name, role, bio }) {
  return (
    <article className="card">
      <h2 className="card__name">{name}</h2>
      <p className="card__role">{role}</p>
      <p className="card__bio">{bio}</p>
    </article>
  );
}
