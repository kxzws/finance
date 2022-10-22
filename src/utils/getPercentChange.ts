const getPercentChange = (oldPrice: number, newPrice: number): number => {
  return ((newPrice - oldPrice) / newPrice) * 100;
};

export default getPercentChange;
