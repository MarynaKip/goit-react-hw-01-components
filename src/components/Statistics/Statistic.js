import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  item: {
    listStyle: "none",
    flexGrow: "1",
    padding: "10px",
    boxShadow: "0 15px 10px #777",
    color: "white",
  },
  label: {
    display: "block",
    textAlign: "center",
    paddingBottom: "10px",
  },
  percentage: {
    display: "block",
    textAlign: "center",
    fontSize: "16px",
  },
});

const Statistic = ({ id, label, percentage }) => {
  const classes = useStyles();

  return (
    <li key={id} className={classes.item}>
      <span className={classes.label}>{label}</span>
      <span className={classes.percentage}>{percentage}%</span>
    </li>
  );
};

export default Statistic;
