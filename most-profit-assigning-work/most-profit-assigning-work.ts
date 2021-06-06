interface workerProps {
  index: number;
  able: number;
}

interface workProps {
  gain: number;
  difficult: number;
}

function maxProfitAssignment(
  difficulty: number[],
  profit: number[],
  persons: number[]
): number {
  let result = 0;

  let workers: workerProps[] = [];
  persons.forEach((able, index) => workers.push({ index: index, able: able }));

  const works: workProps[] = [];
  for (let i = 0; i < profit.length; i++) {
    works.push({ gain: profit[i], difficult: difficulty[i] });
  }

  works.sort((a, b) => (a.gain < b.gain ? 1 : -1));

  for (let i = 0; i < works.length; i++) {
    const { difficult, gain } = works[i];

    const indexes = [];
    const newWorkers: workerProps[] = [];
    workers.forEach(worker => {
      const { able, index } = worker;
      if (able >= difficult) {
        indexes.push(index);
        return;
      }

      newWorkers.push(worker);
    });

    workers = newWorkers;
    result += gain * indexes.length;

    if (!workers.length) {
      break;
    }
  }

  return result;
}