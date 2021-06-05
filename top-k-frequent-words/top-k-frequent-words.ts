function topKFrequent(words: string[], k: number): string[] {
    const map = {};
    
    words.forEach(word => {
        const frequent = map[word] ?? 0
        map[word] = frequent + 1;
    })
    
    const keys = Object.keys(map)
    
    const temps = []
    keys.forEach(key => {
        temps.push({ key: key, value: map[key]})
    })
    
    temps.sort((a, b) => a.value > b.value ? -1 : a.value !== b.value ? 1 : a.key > b.key ? 1 : -1)
    
    const result = temps.splice(0, k);
    
    return result.map(obj => obj.key)
};