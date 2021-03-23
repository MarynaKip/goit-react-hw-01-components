import Statistic from "./Statistic";

function Statistics({ stats, title }) {
  return (
    <section className="statistics">
      <h2 className="title">{title}</h2>

      <ul className="stat-list">
        {stats.map((stat) => (
          <Statistic
            id={stat.id}
            label={stat.label}
            percentage={stat.percentage}
          />
        ))}
      </ul>
    </section>
  );
}

export default Statistics;
