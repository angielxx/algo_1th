/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
    // Map으로 (value, 갯수)
    // need = k - n
    // 찾으면 (need, 갯수--)
    // 없으면 (n, 갯수++)

    const hashMap = new Map();
    let count = 0;

    for (const n of nums) {
        const need = k - n;

        if (hashMap.has(need) && hashMap.get(need) > 0) {
            hashMap.set(need, hashMap.get(need) - 1);
            count += 1;
        } else {
            hashMap.set(n, (hashMap.get(n) || 0) + 1);
        }
    }

    return count;
};