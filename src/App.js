import React, { useState, useEffect } from 'react';
import TransactionList from './components/TransactionList';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import { FaRegCalendarAlt } from 'react-icons/fa';

import axios from 'axios';

import './App.css';

function App() {

  const [ transactions, setTransactions ] = useState([
    { id: 1, AGENT_ID: 123, TRANSACTION_DATE: '01-Jan-20', TRANSACTION_ID: 1, ACT: 1, HUG: 0, Prepaid: 1 },
    { id: 2, AGENT_ID: 123, TRANSACTION_DATE: '01-Jan-20', TRANSACTION_ID: 2, ACT: 1, HUG: 0, Prepaid: 1 },
    { id: 3, AGENT_ID: 123, TRANSACTION_DATE: '02-Jan-20', TRANSACTION_ID: 3, ACT: 1, HUG: 1, Prepaid: 1 },
    { id: 4, AGENT_ID: 123, TRANSACTION_DATE: '02-Jan-20', TRANSACTION_ID: 4, ACT: 2, HUG: 1, Prepaid: 2 },
    { id: 5, AGENT_ID: 123, TRANSACTION_DATE: '03-Jan-20', TRANSACTION_ID: 5, ACT: 0, HUG: 0, Prepaid: 1 },
    { id: 6, AGENT_ID: 123, TRANSACTION_DATE: '03-Jan-20', TRANSACTION_ID: 6, ACT: 0, HUG: 0, Prepaid: 1 },
  ]);
  const [startDate,setStartDate] = useState('1/1/2014');
  const [endDate,setEndDate] = useState('3/1/2014');
  const [searchTerm, setSearchTerm] = React.useState("");
  
  const transactionList = transactions.map((transaction,index) => {
    return (
      <tr key={index}>
        <td>{transaction.AGENT_ID}</td>
        <td>{transaction.TRANSACTION_DATE}</td>
        <td>{transaction.TRANSACTION_ID}</td>
        <td>{transaction.ACT}</td>
        <td>{transaction.HUG}</td>
        <td>{transaction.Prepaid}</td>
      </tr>
    )
  });

  /* Transaction Count */
  const transactionItems = transactions;
  // console.log(typeof transactionItems.id === undefined);
  // const actTotal = transactionItems.reduce((totalAct, transaction) => totalAct+parseInt(transaction.act,10),0);
  // console.log(transactionItems)
 
  /* Search Query */
  const handleSearchChange = event => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="card shadow my-1">
              <div className="card-body p-1">
                <form action="" method="get" className="text-center">
                  <DateRangePicker startDate={startDate} endDate={endDate}>
                    <button type="button" className="btn btn-link btn-block">
                      <div><FaRegCalendarAlt /> {startDate}{` to `}{endDate}</div>
                    </button>
                  </DateRangePicker>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="card shadow my-1">
              <div className="card-shadow">
                <div className="card-body p-1">
                  <div className="container">
                    <div className="row">
                      <div className="col">
                        <div className="text-center">
                          <div className="font-weight-normal txt-value-amount">0</div>
                          <div className="font-weight-bold txt-value-name">ACT</div>
                        </div>
                      </div>
                      <div className="col">
                        <div className="text-center">
                          <div className="font-weight-normal txt-value-amount">0</div>
                          <div className="font-weight-bold txt-value-name">HUG</div>
                        </div>
                      </div>
                      <div className="col">
                        <div className="text-center">
                          <div className="font-weight-normal txt-value-amount">0</div>
                          <div className="font-weight-bold txt-value-name">Prepaid</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>    
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="card shadow my-1">
              <div className="card-body p-1">
                <form action="" method="get">
                  
                    <div className="input-group">
                      <input 
                        type="text" 
                        className="form-control input-xs border-0" 
                        name="search" 
                        placeholder="Search for line"
                        value={searchTerm}
                        onChange={handleSearchChange}
                      />
                      <div className="input-group-append">
                        <span className="input-group-text border-0 bg-white">.00</span>
                      </div>
                    </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="card shadow my-1">
              <div className="card-body">
                <div className="table-responsive">
                  <table id="transaction-list" className="table table-striped">
                    <thead>
                      <tr>
                        <th scope="col">AGENT ID</th>
                        <th scope="col">TRANSACTION DATE</th>
                        <th scope="col">TRANSACTION ID</th>
                        <th scope="col">ACT</th>
                        <th scope="col">HUG</th>
                        <th scope="col">Prepaid</th>
                      </tr>
                      
                    </thead>
                    <tbody>
                      {transactionList}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
