import { useMemo } from "react";
import { calculatePoints } from "../utils/calculatePoints";


export const useCalculatePoints = ( transactions ) => {

    const customerRewards = useMemo(() =>{

        if(!transactions || transactions.length === 0) {
            return [];
        }

        const customerMap = {};

        transactions.forEach(transaction => {
            const { customerId, customerName, date, amount } = transaction;

            const points = calculatePoints(amount); 

            if(!customerMap[customerId]){
                customerMap[customerId] = {
                    customerId,
                    customerName,
                    totalPoints: 0,
                    transactions: []
                }
            }

            customerMap[customerId].transactions.push({
                date, 
                amount,
                points
            })

            customerMap[customerId].totalPoints += points;

        });

        return Object.values(customerMap).sort((a, b) => a.customerName.localeCompare(b.customerName));
    }, [transactions]);

    return customerRewards;

}