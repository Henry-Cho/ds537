/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    // Initialize frequency arrays
        const p_freq = new Array(26).fill(0);
        const s_freq = new Array(26).fill(0);
        
        // Store frequency of characters in p
        for (let char of p) {
            p_freq[char.charCodeAt() - 'a'.charCodeAt()] += 1;
        }
        
        // Initialize pointers and result array
        let left = 0, right = 0;
        const result = [];
        
        while (right < s.length) {
            // Expand window to the right
            s_freq[s.charCodeAt(right) - 'a'.charCodeAt()] += 1;
            
            // Shrink window from the left if it exceeds length p
            if (right - left + 1 > p.length) {
                s_freq[s.charCodeAt(left) - 'a'.charCodeAt()] -= 1;
                left += 1;
            }
            
            // Check if frequency arrays match for current window
            if (right - left + 1 === p.length && p_freq.join('') === s_freq.join('')) {
                result.push(left);
            }
            
            // Move right pointer to the right
            right += 1;
        }
        
        return result;
        }