export const Statistics = ({ title, stats }) => {
  return (
    <section>
      {title}
      <ul>
        {stats.map(stat => {
          return (
            <li key={stat.id}>
              <span>{stat.label}</span>
              <span>{stat.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
