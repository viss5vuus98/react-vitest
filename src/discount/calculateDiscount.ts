const calculateDiscount = (price: number, discount: number) => {
  if (price < 0) {
    throw new Error('請輸入正確價格');
  }

  if (discount > 1) {
    throw new Error('請輸入正確折扣金額');
  }

  if (discount === 0) {
    return price.toFixed(2);
  }

  return (price * discount).toFixed(2);
};

export default calculateDiscount;
