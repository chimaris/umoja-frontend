
export const convertToShorthand = (number) => {
    if (number >= 1_000_000) {
      return (number / 1_000_000).toFixed(1).replace(/\.0$/, '') + 'M';
    } else if (number >= 1_000) {
      return (number / 1_000).toFixed(1).replace(/\.0$/, '') + 'K';
    } else {
      return number?.toString();
    }
  }
  export const formattedPrice = (value) => {
    const numBer = Number(value);
    
    if (isNaN(numBer) || numBer === 0) {
      return '€ 0.00';
    }
    // Handle large numbers with abbreviations
    if (numBer >= 1e9) {
      return '€ ' + (numBer / 1e9).toFixed(1).replace(/\.0$/, '') + 'B';
    } else if (numBer >= 1e6) {
      return '€ ' + (numBer / 1e6).toFixed(1).replace(/\.0$/, '') + 'M';
    } else if (numBer >= 1e3) {
      return '€ ' + (numBer / 1e3).toFixed(1).replace(/\.0$/, '') + 'k';
    }
    
    // Standard currency formatting
    return numBer.toLocaleString('en-US', { 
      style: 'currency', 
      currency: 'EUR',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  }
  