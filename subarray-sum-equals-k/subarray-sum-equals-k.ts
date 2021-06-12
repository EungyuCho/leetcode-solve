function subarraySum(nums: number[], k: number): number {

    let result = 0;
    nums.forEach((num, i) => {
        let sum = 0;
        
        for (let j = i; j < nums.length; j++) {
            sum += nums[j];
            
            if (k === sum) {
                result += 1;
            }
        }
    })
    
    return result;
};