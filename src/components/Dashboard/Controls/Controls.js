import React, { Component } from 'react';
import PropTypes from 'prop-types';
import v4 from 'uuid';
import styles from './Controls.module.css';

class Controls extends Component {
  static propTypes = {
    balance: PropTypes.number.isRequired,
    onDepositClick: PropTypes.func.isRequired,
    onWithdrawalClick: PropTypes.func.isRequired,
  };

  handleDepositClick = () => {
    const date = new Date();
    const input = document.getElementById('input');
    if (Number(input.value) <= 0) {
      // eslint-disable-next-line no-alert
      alert('Введите корректную сумму для проведения операции!');
    } else {
      const newTransaction = {
        id: v4(),
        type: 'deposit',
        amount: Number(input.value),
        date: date.toLocaleString(),
      };
      this.props.onDepositClick(newTransaction);
      input.value = null;
    }
  };

  handleWithdrawClick = () => {
    const date = new Date();
    const input = document.getElementById('input');
    if (Number(input.value) > this.props.balance) {
      // eslint-disable-next-line no-alert
      alert('На счету недостаточно средств для проведения операции!');
    } else if (Number(input.value) <= 0) {
      // eslint-disable-next-line no-alert
      alert('Введите корректную сумму для проведения операции!');
    } else {
      const newTransaction = {
        id: v4(),
        type: 'withdrawal',
        amount: Number(input.value),
        date: date.toLocaleString(),
      };
      this.props.onWithdrawalClick(newTransaction);
      input.value = null;
    }
  };

  render() {
    return (
      <section className={styles.controls}>
        <input type="number" id="input" className={styles.input} />{' '}
        <button
          type="button"
          className={styles.button}
          onClick={this.handleDepositClick}
        >
          {' '}
          Deposit{' '}
        </button>{' '}
        <button
          type="button"
          name="withdrawal"
          className={styles.button}
          onClick={this.handleWithdrawClick}
        >
          {' '}
          Withdraw{' '}
        </button>{' '}
      </section>
    );
  }
}
export default Controls;
