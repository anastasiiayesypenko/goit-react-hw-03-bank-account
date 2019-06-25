import React, { Component } from 'react';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import Balance from './Balance/Balance';
import Controls from './Controls/Controls';
import styles from './Dashboard.module.css';

class Dashboard extends Component {
  state = {
    balance: JSON.parse(localStorage.getItem('balance')) || 0,
    history: JSON.parse(localStorage.getItem('history')) || [],
  };

  componentDidUpdate = () => {
    localStorage.setItem('balance', JSON.stringify(this.state.balance));
    localStorage.setItem('history', JSON.stringify(this.state.history));
  };

  addDepositTransaction = item => {
    const { history, balance } = this.state;
    this.setState({
      balance: balance + item.amount,
      history: [...history, item],
    });
  };

  addWithdrawalTransaction = item => {
    const { history, balance } = this.state;
    this.setState({
      balance: balance - item.amount,
      history: [...history, item],
    });
  };

  render() {
    const { balance, history } = this.state;
    return (
      <div className={styles.dashboard}>
        <Controls
          balance={balance}
          onDepositClick={this.addDepositTransaction}
          onWithdrawalClick={this.addWithdrawalTransaction}
        />{' '}
        <Balance balance={balance} history={history} />{' '}
        <TransactionHistory history={history} />{' '}
      </div>
    );
  }
}

export default Dashboard;
