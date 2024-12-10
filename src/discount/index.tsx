import { useState, useCallback } from 'react';
import calculateDiscount from './calculateDiscount';

const debounce = (func: Function, wait: number) => {
  let timeout: number;
  return function executedFunction(...args: any[]) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

const DiscountInput = () => {
  const [price, setPrice] = useState(100);
  const [discount, setDiscount] = useState('0');
  const [discountPrice, setDiscountPrice] = useState('100.00');

  const debouncedCalculation = useCallback(
    debounce((p: number, d: number) => {
      const result = calculateDiscount(p, d);
      setDiscountPrice(result);
    }, 500),
    [],
  );

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPrice = Number(e.target.value);
    setPrice(newPrice);
    debouncedCalculation(newPrice, parseFloat(discount));
  };

  const handleDiscountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDiscount = e.target.value;
    setDiscount(newDiscount);
    const floatNum = parseFloat(newDiscount || '0') / 100;
    debouncedCalculation(price, floatNum);
  };

  return (
    <div className="border-1 border-stone-700 p-1 flex">
      <input
        data-testid={'price'}
        className="border-1 rounded-md p-0.5"
        value={price}
        onChange={handlePriceChange}
      />
      <input
        data-testid={'discount'}
        className="border-1 rounded-md p-0.5"
        value={discount}
        onChange={handleDiscountChange}
      />
      <p data-testid={'discountResult'}>{discountPrice}</p>
    </div>
  );
};

export default DiscountInput;
