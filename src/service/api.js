import { mockTransactions } from "../data/mockTransactions";

export const getTransactions = () => {
    return new Promise((resolve, reject) => {   
        setTimeout(() => {
            try {
                resolve({ 
                    data: mockTransactions,
                    status: 200, 
                    message: "Transactions fetched successfully"
                });
            } catch (error) {
                reject({  
                    error: error,
                    status: 500, 
                    message: "Error fetching transactions" 
                });
            }
        }, 1000);
    });
}