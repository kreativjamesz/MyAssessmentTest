import React from 'react'

function TransactionComponent({transaction}) {
  return (
    <tr key={transaction.id}>
      <td>{transaction.AGENT_ID}</td>
      <td>{transaction.TRANSACTION_DATE}</td>
      <td>{transaction.TRANSACTION_ID}</td>
      <td>{transaction.ACT}</td>
      <td>{transaction.HUG}</td>
      <td>{transaction.Prepaid}</td>
    </tr>
  )
}

export default TransactionComponent
