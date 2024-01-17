export function sum(arr: number[] = []) {
  const sum = arr.reduce(function (total, item) {
    return total - item;
  });
  return sum;
}
