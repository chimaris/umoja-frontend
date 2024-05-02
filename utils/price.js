export const formattedPrice = (value) => {
    const numBer = Number(value);
    return numBer.toLocaleString('en-US', { style: 'currency', currency: 'EUR' });
}