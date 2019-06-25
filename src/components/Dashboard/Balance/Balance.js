import React from 'react';
import PropTypes from 'prop-types';
import styles from './Balance.module.css';

const Balance = ({ balance, history }) => (
  <section className={styles.balance}>
    <span>
      <span className={styles.green}> ⬆ </span>{' '}
      {history.reduce((acc, item) => {
        if (item.type === 'deposit') {
          acc = Number(acc) + Number(item.amount);
        }
        return acc;
      }, 0)}{' '}
      {' $'}{' '}
    </span>{' '}
    <span>
      {' '}
      <span className={styles.red}> ⬇ </span>{' '}
      {history.reduce((acc, item) => {
        if (item.type === 'withdrawal') {
          acc = Number(acc) + Number(item.amount);
        }
        return acc;
      }, 0)}{' '}
      {' $'}{' '}
    </span>{' '}
    <span>
      {' '}
      Balance: {balance}
      .00 ${' '}
    </span>{' '}
  </section>
);
Balance.propTypes = {
  balance: PropTypes.number.isRequired,
  history: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      date: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
export default Balance;
