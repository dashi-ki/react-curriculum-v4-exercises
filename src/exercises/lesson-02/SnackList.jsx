export default function SnackList() {
  const snacks = [
    { name: 'Pretzels', rank: 5 },
    { name: 'Granola Bar', rank: 4 },
    { name: 'Banana', rank: 3 },
    { name: 'Trail Mix', rank: 2 },
    { name: 'Potato Chips', rank: 1 },
  ];

  const snacksSorted = snacks.toSorted((a, b) => a.rank - b.rank);
  //console.log(snacksSorted)

  return (
    <div>
      <ul>
        {snacksSorted.map((item) => (
          <li key={item.rank}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}
