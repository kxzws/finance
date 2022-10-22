const parseFixedFloat = (str: string, fixed: number): string => {
  return parseFloat(str).toFixed(fixed);
};

export default parseFixedFloat;
