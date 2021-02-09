export const sumPositiveNumbers = (n1: number, n2: number) => {
  if (n1 < 0 || n2 < 0) {
    throw new Error("One of the numbers is negative");
  }
  return n1 + n2;
};
