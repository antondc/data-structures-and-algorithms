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

// Optimal, O(n)
export const threeSumOptimal = (nums: number[]): number[][] => {
  const results = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const total = nums[i] + nums[left] + nums[right];

      if (total > 0) {
        right--;
      } else if (total < 0) {
        left++;
      } else {
        results.push([nums[i], nums[left], nums[right]]);
        left++;

        while (nums[left] === nums[left - 1] && left < right) {
          left++;
        }
      }
    }
  }

  return results;
};
