import { skills } from "@/data";

export default function Stack() {
  const categories = Object.entries(skills);

  return (
    <section className="stack" id="stack">
      <div className="section-header reveal">
        <span className="num">04 ⁄ STACK</span>
        <h2>Tools of the <em>trade.</em></h2>
      </div>
      <div className="stack-grid">
        {categories.map(([category, items]) => (
          <div className="stack-group reveal" key={category}>
            <h5>{category}</h5>
            <ul className="skill-list">
              {items.map((skill) => (
                <li className="skill" key={skill} data-hover>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
