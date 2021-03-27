import PropTypes from "prop-types";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  transactionHistory: {
    flexGrow: "1",
    textAlign: "center",
  },
  headRaw: {
    backgroundColor: "blue",
    padding: "20px",
  },
  bodyRaw: {
    backgroundColor: "skyblue",
    paddingRight: "20px",
    paddingLeft: "20px",
  },
});

const TransactionHistory = ({ items }) => {
  const classes = useStyles();

  return (
    <table className={classes.transactionHistory}>
      <thead>
        <tr>
          <th className={classes.headRaw}>Type</th>
          <th className={classes.headRaw}>Amount</th>
          <th className={classes.headRaw}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ type, amount, currency }) => {
          return (
            <tr>
              <td className={classes.bodyRaw}>{type}</td>
              <td className={classes.bodyRaw}>{amount}</td>
              <td className={classes.bodyRaw}>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.shape({
    type: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
  }),
};

export default TransactionHistory;
