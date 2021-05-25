function sumOfUnique(nums: number[]): number {
    const map = new Map<number, number>();
    
    nums.forEach((num) => {
        const mapElement = map.get(num)
        
        if (!mapElement) {
            map.set(num, 1);
            return;
        }
        
        map.set(num, mapElement + 1);
    });
    
    let result = 0;
    map.forEach((value, key) => {
        if (value === 1) {
            result += key;
        }
    });
    
    return result;
};