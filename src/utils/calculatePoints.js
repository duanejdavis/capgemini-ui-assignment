

export const calculatePoints = (amount) => {

    if(amount <= 50) {
        return 0
    }

    let points = 0;

    if(amount > 100) {
        points += ( amount - 100 ) * 2; 
    }


    const amountInMiddleRange = Math.min(amount, 100) - 50;

    points += amountInMiddleRange;

    return Math.floor(points); 
}