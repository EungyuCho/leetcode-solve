function subsets(nums: number[]): number[][] {
  const answer = [[]];
  const set = new Set<number>();
  nums.forEach(num => {
    if (!set.has(num)) {
      set.add(num);
      answer.forEach(ans => {
        answer.push([...ans, num]);
      });
    }
  });

    return answer;
};