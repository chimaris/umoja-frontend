export const formattedPrice = (value) => {
    const numBer = Number(value);
    return numBer.toLocaleString('en-US', { 
        style: 'currency', 
        currency: 'EUR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    });
}