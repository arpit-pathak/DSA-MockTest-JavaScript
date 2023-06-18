// Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well. You must not use any built-in exponent function or operator.

//  Example 1:
// Input: x = 4 Output: 2 Explanation: The square root of 4 is 2, so we return 2.
// Example 2:

// Input: x = 8 Output: 2 Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.
// Constraints:

// 0 <= x <= 231 - 1

function sqrt(x) {
  if (x === 0) return 0; // Square root of 0 is 0

  let left = 1; // Left boundary
  let right = Math.floor(x / 2) + 1; // Right boundary

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const square = mid * mid;

    if (square === x) {
      return mid; // Found the exact square root
    } else if (square < x) {
      left = mid + 1; // Move the left boundary
    } else {
      right = mid - 1; // Move the right boundary
    }
  }

  return right; // Return the floor of the square root
}

console.log(sqrt(4)); // Output: 2
console.log(sqrt(8)); // Output: 2
