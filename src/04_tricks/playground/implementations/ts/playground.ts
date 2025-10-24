export function myFunction(data: Array<number>) {
  const result = [];

  for (let i = 0; i < data.length; i++) {
    result[i] = data[i] + 1;
  }

  return result;
}
