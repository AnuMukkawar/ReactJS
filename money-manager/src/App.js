import './App.css';
import * as React from 'react';
import { Balance } from './components/Balance.js'
import { IncomeExpense } from './components/IncomeExpense';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';

export default function App() {
  return (
    <div>
      <h1>Expence Tracker</h1><br/>
      <Balance/>
      <IncomeExpense/>
      <TransactionList/>
      <AddTransaction/>
    </div>
  );
}
