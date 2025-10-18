// Zip matrix:
// From matrix[i][j] to matrix[j][i]
export function transpose(matrix: number[][]): number[][] {
  let maxNumberColumns = 0;

  // Get length of larger row —max number of columns—.
  for (let r = 0; r < matrix.length; r++) {
    const inner = matrix[r];
    const rowColumns = inner ? inner.length : 0;

    if (rowColumns > maxNumberColumns) maxNumberColumns = rowColumns;
  }

  // Create new output array matrix with length of number of columns
  const out = new Array(maxNumberColumns);

  // Iterate columns
  for (let c = 0; c < maxNumberColumns; c++) {
    // Create new column for new items
    const newRow = new Array(matrix.length);
    // Iterate rows
    for (let r = 0; r < matrix.length; r++) {
      // For each row iterate it and if value exists, add to new array;
      // otherwise, add null.
      newRow[r] = matrix[r] && c < matrix[r].length ? matrix[r][c] : null;
    }

    out[c] = newRow;
  }

  return out;
}
