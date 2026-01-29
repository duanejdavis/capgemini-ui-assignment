import { useFetch } from './hooks/useFetch';
import { getTransactions } from './service/api';
import { useCalculatePoints } from './hooks/useCalculatePoints';
import './App.css'

function App() {

  const { data: transactions, loading, error } = useFetch(getTransactions)

  const customerRewards = useCalculatePoints(transactions);
  if (loading) { return <div>Loading...</div> }
  if (error) { return <div>Error: {error}</div> }

  return (
    <div>
      <h1>Transactions</h1>
      <ul>
        {customerRewards.map(customer => (
          <li key={customer.customerId}>{customer.customerName} - {customer.totalPoints} points</li>
        ))}
      </ul>
    </div>
  )

}

export default App
