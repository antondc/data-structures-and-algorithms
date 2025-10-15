// Brute force, O³
export const threeSumSuboptimal = (nums: number[]): number[][] => {
  const visited = new Map();
  const results = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      for (let k = 0; k < nums.length; k++) {
        if (i === j || i === k || j === k) {
          continue;
        }

        if (nums[i] + nums[j] + nums[k] === 0) {
          const result = [nums[i], nums[j], nums[k]].sort((a, b) => a - b);
          const string = result.join(',');

          if (visited.has(string)) {
            continue;
          }

          visited.set(string, true);
          results.push(result);
        }
      }
    }
  }

  return results;
};
