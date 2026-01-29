// src/components/RewardsTable.jsx
import './RewardsTable.css';
import { formatDate, formatCurrency } from '../utils/formatters';

const RewardsTable = ({ customerRewards }) => {


    return (
        <div className="rewards-container">
            <table className="rewards-table">
                <thead>
                    <tr>
                        <th>Customer ID</th>
                        <th>Customer Name</th>
                        <th>Total Points</th>
                        <th>Transactions</th>
                    </tr>
                </thead>
                <tbody>
                    {customerRewards.map(customer => (
                        <>
                            <tr key={customer.customerId}>
                                <td className="customer-id">{customer.customerId}</td>
                                <td className="customer-name">{customer.customerName}</td>
                                <td className="total-points">{customer.totalPoints}</td>
                                <td className="transaction-count">
                                    {customer.transactions.length} transactions
                                </td>
                            </tr>
                            <tr key={`${customer.customerId}-details`}>
                                <td colSpan="4" className="transactions-cell">
                                    <table className="transactions-table">
                                        <thead>
                                            <tr>
                                                <th>Date</th>
                                                <th>Amount</th>
                                                <th>Points</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {customer.transactions.map((transaction, index) => (
                                                <tr key={index}>
                                                    <td className="transaction-date">
                                                        {formatDate(transaction.date)}
                                                    </td>
                                                    <td className="transaction-amount">
                                                        {formatCurrency(transaction.amount)}
                                                    </td>
                                                    <td className="transaction-points">
                                                        {transaction.points}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default RewardsTable;