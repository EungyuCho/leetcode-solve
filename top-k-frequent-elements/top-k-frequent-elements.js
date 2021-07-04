/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
function topKFrequent(nums, k) {
    const map = new Map();
    
    nums.forEach(num => {
        const el = map.get(num)
        if (!el) {
            map.set(num, 1);
            return;
        }
        
        map.set(num, el + 1);
    })
    
    const elements = [];
    
    map.forEach((value, key) => {
        elements.push({ key, value });
    });
    
    elements.sort((a, b) => b.value - a.value);
    
    const ans = [];
    
    for (let i = 0; i < k; i++) {
        ans.push(elements[i].key);
    }
    
    return ans
};