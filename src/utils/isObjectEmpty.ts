/* eslint-disable */

const isObjectEmpty = (obj: Record<string, unknown>): boolean => {
  for (const key in obj) {
    return false;
  }
  return true;
};

export default isObjectEmpty;
