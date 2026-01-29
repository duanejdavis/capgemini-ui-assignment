

 // Format currency
 export const formatCurrency = (amount) => {
    return `$${amount.toFixed(2)}`;
};

// Format date
export const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    });
};