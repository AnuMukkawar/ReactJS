import './App.css';
import * as React from 'react';
import { Balance } from './components/Balance.js'
import { IncomeExpense } from './components/IncomeExpense';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';
import { GlobalProvider } from './context/GlobalState';

export default function App() {
  return (
    <GlobalProvider>
      <h1>Expence Tracker</h1><br/>
      <div className='container'>
        <Balance/>
        <IncomeExpense/>
        <TransactionList/>
        <AddTransaction/>
      </div>
    </GlobalProvider>
  );
}
