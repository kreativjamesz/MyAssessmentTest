import React, { useState, useEffect } from 'react';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import { FaRegCalendarAlt } from 'react-icons/fa';
import TransactionWidget from './components/TransactionWidget';
import TransactionSearchComponent from './components/TransactionSearchComponent';
import TransactionListComponent from './components/TransactionListComponent';
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
  
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="card shadow my-1">
              <div className="card-body p-1">
                <form action="" method="get" className="text-center">
                  <DateRangePicker startDate={startDate} endDate={endDate}>
                    <button type="button" className="btn btn-link btn-block text-secondary">
                      <div><FaRegCalendarAlt /> {startDate}{` to `}{endDate}</div>
                    </button>
                  </DateRangePicker>
                </form>
              </div>
            </div>
          </div>
        </div>
        <TransactionWidget/>
        <TransactionSearchComponent serchTerm={searchTerm} onChange={setSearchTerm}/>
        <TransactionListComponent transactions={transactions}/>
      </div>
    </div>
  );
}



export default App;
