function merge(intervals: number[][]): number[][] {
    const ans: number[][] = [];
    
    intervals.sort((interval1, interval2) => interval1[0] - interval2[0]);
    
    intervals.forEach(interval => {
        const last = ans.pop();
        if (!last) {
            ans.push(interval);
            return;
        }
        
        if (interval[0] <= last[1]) {
            ans.push([last[0], Math.max(last[1], interval[1])]);
            return;
        }
        
        ans.push(last);
        ans.push(interval);
    })
    
    return ans;
};