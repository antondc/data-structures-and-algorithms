export function fourSum(nums: number[], target: number): number[][] {
  nums.sort((a, b) => a - b);
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    for (let j = i + 1; j < nums.length; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) continue;
      let k = j + 1;
      let l = nums.length - 1;

      while (k < l) {
        if (k > j + 1 && nums[k] === nums[k - 1]) {
          k++;
          continue;
        }
        if (i === j || i === k || i === l) {
          k++;
          continue;
        }
        const sum = nums[i] + nums[j] + nums[k] + nums[l];
        if (sum === target) {
          result.push([nums[i], nums[j], nums[k], nums[l]]);
        }
        if (sum > target) {
          l--;
        } else {
          k++;
        }
      }
    }
  }

  return result;
}
