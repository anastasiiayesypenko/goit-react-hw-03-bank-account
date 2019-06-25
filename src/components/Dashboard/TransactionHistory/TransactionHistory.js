import React from 'react';
import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

const TransactionHistory = ({ history }) => (
  <table className={styles.history}>
    <thead>
      <tr>
        <th> Transaction </th> <th> Amount </th> <th> Date </th>{' '}
      </tr>{' '}
    </thead>{' '}
    <tbody>
      {' '}
      {history.map(item => (
        <tr key={item.id}>
          <td className={styles.type}> {item.type} </td>{' '}
          <td> {`${item.amount} $`} </td> <td> {item.date} </td>{' '}
        </tr>
      ))}{' '}
    </tbody>{' '}
  </table>
);
TransactionHistory.propTypes = {
  history: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      date: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
export default TransactionHistory;
