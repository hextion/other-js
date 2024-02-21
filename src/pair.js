/**
 * @param nums
 */
function pair(nums) {
  return nums.reduce((res, num) => res ^ num);
}

module.exports = { pair };
