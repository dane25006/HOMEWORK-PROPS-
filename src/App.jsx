import ProfileCard from "./ProfileCard.jsx";
import "./App.css";

const people = [
  {
    name: "Ada Lovelace",
    role: "Mathematician",
    bio: "Wrote the first algorithm intended for a machine.",
  },
  {
    name: "Alan Turing",
    role: "Computer Scientist",
    bio: "Father of theoretical computer science and AI.",
  },
  {
    name: "Grace Hopper",
    role: "Computer Scientist",
    bio: "Pioneered machine-independent programming languages.",
  },
];

export default function App() {
  return (
    <main className="app">
      <header className="app__header">
        <h1>Homework: React Props</h1>
        <p>
          Each card below is the same <code>ProfileCard</code> component reused
          with different <strong>props</strong>.
        </p>
      </header>

      <section className="cards">
        {people.map((person) => (
          <ProfileCard
            key={person.name}
            name={person.name}
            role={person.role}
            bio={person.bio}
          />
        ))}
      </section>
    </main>
  );
}
