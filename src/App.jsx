import { useFetch } from './hooks/useFetch';
import { getTransactions } from './service/api';
import { useCalculatePoints } from './hooks/useCalculatePoints';
import RewardsTable from './components/rewardsTable';
import './App.css'

function App() {

  const { data: transactions, loading, error } = useFetch(getTransactions)

  const customerRewards = useCalculatePoints(transactions);
  if (loading) { return <div>Loading...</div> }
  if (error) { return <div>Error: {error}</div> }

  return (
    <div>
      <h1>Transactions</h1>
      <RewardsTable customerRewards={customerRewards} />

    </div>
  )

}

export default App
