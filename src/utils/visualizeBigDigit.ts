const MAX_UNITS = 999;
const MAX_THOUSANDS = 999999;
const MAX_MILLIONS = 999999999;

const visualizeBigDigit = (input: number): string => {
  if (input > MAX_MILLIONS) {
    return `${(input - (input % 10000000)) / 1000000000} млрд`;
  }
  if (input > MAX_THOUSANDS) {
    return `${(input - (input % 10000)) / 1000000} млн`;
  }
  if (input > MAX_UNITS) {
    return `${(input - (input % 10)) / 1000} тыс`;
  }
  return `${input}`;
};

export default visualizeBigDigit;
