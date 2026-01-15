# 8 String to Integer (atoi)

https://leetcode.com/problems/string-to-integer-atoi/

Implement the `myAtoi(string s)` function, which converts a string to a 32-bit signed integer (similar to C/C++'s `atoi`
function).

The algorithm for `myAtoi(string s)` is as follows:

1. **Whitespace**: Ignore any leading whitespace (`" "`).
2. **Signedness**: Determine the sign by checking if the next character is `'-'` or `'+'`, assuming positivity if
   neither is present.
3. **Conversion**: Read the integer by skipping leading zeros until a non-digit character is encountered or the end of
   the string is reached.  
   If no digits were read, return `0`.
4. **Rounding**: If the integer is outside the 32-bit signed integer range  
   `[-2^31, 2^31 - 1]`, clamp the integer so that it remains in the range.

Return the integer as the final result.

---

### Example 1:

- Input: `s = "42"`
- Output: `42`

### Example 2:

- Input: `s = "   -42"`
- Output: `-42`

Explanation: The first non-whitespace character is `'-'`, which means the result is negative.

### Example 3:

- Input: `s = "4193 with words"`
- Output: `4193`

Explanation: Conversion stops at digit `'3'` since the next character is not a digit.

### Example 4:

- Input: `s = "words and 987"`
- Output: `0`

Explanation: The first non-whitespace character is not a valid integer.

### Example 5:

- Input: `s = "-91283472332"`
- Output: `-2147483648`

Explanation: The number is clamped to the lower bound of a 32-bit signed integer.

---

### Constraints:

- `0 <= s.length <= 200`
- `s` consists of English letters (lower-case and upper-case), digits (`0–9`), `' '`, `'+'`, `'-'`, and `'.'`
