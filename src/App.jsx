import { useFetch } from './hooks/useFetch';
import { getTransactions } from './service/api';
import './App.css'

function App() {

  const { data: transactions, loading, error } = useFetch(getTransactions)


  if (loading) { return <div>Loading...</div> }
  if (error) { return <div>Error: {error}</div> }

  return (
    <div>
      <h1>Transactions</h1>
      <ul>
        {transactions.map(transaction => (
          <li key={transaction.id}>{transaction.customerName}</li>
        ))}
      </ul>
    </div>
  )

}

export default App
