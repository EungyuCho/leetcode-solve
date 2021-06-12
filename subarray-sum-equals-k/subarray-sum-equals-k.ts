function subarraySum(nums: number[], k: number): number {
  let result = 0;

  const map = new Map<number, number>();
  map.set(0, 1);
  let sum = 0;

  nums.forEach(num => {
    sum += num;

    if (map.has(sum - k)) {
      const frequency = map.get(sum - k);
      if (frequency) {
        result += frequency;
      }
    }

    const nowFrequency = map.get(sum) ?? 0;
    map.set(sum, nowFrequency + 1);
  });

  return result;
}
