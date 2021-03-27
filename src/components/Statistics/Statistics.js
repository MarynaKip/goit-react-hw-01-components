import Statistic from "./Statistic";
import PropTypes from "prop-types";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  statistics: {
    width: "400px",
    boxShadow: "0 15px 10px #777",
  },
  title: {
    textAlign: "center",
    color: "slategrey",
    backgroundColor: "white",
    margin: "0px",
    padding: "15px",
    textTransform: "uppercase",
  },
  statList: {
    display: "flex",
    padding: "0px",
    margin: "0px",
    backgroundColor: "skyblue",
  },
});

function Statistics({ stats, title }) {
  const classes = useStyles();
  return (
    <section className={classes.statistics}>
      <h2 className={classes.title}>{title}</h2>

      <ul className={classes.statList}>
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

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.shape({
    stat: PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  }),
};

export default Statistics;
