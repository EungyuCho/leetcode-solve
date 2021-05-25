interface MapProps {
  [index: string]: string[];
}

function findItinerary(tickets: string[][]): string[] {
  const map: MapProps = {};
  const res: string[] = [];
  tickets.forEach(ticket => {
    const start = ticket[0];
    const end = ticket[1];

    const element = map[start];

    if (!element) {
      map[start] = [end];
    } else {
      element.push(end);
    }
  });

  for (const node in map) {
    map[node].sort();
  }

  const dfs = function(node: string) {
    const now = map[node];

    while (now && now.length > 0) {
      const next = now.shift();
      if (next) {
        dfs(next);
      }
    }

    res.push(node);
  };

  dfs("JFK");
  return res.reverse();
}