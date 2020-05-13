import React from 'react'
import TransactionComponent from './TransactionComponent'

const TransactionListComponent = ({transactions}) => {

  
  return (
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
                  {
                    transactions.map((transaction) => {
                      return (
                        <TransactionComponent transaction={transaction} key={transaction.id}/>
                      )
                    })
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}



export default TransactionListComponent
