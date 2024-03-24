import sortByPopularity from "../sortByPopularity";

const items = [
  {
    id: 8015699,
    title: 'The story behind the Table Snip',
    popularity: 0.129,
    timestamp: '2023-02-16T07:39:55.793Z',
  },
  {
    id: 9895971,
    title: 'The dangers behind image resizing (2021)',
    popularity: 0.658,
    timestamp: '2023-02-16T22:51:21.660Z',
  },
  {
    id: 3158876,
    title: 'Tesla Terminated Dozens in Response to New Union Campaign, Complaint Alleges',
    popularity: 0.165,
    timestamp: '2023-02-16T11:00:27.508Z',
  },
];

describe('sortByPopularity', () => {
  it('can sort. By popularity.', () => {
    const sortedItem = sortByPopularity(items);
    expect(sortedItem.at(0)?.popularity).toBe(0.658);
    expect(sortedItem.at(1)?.popularity).toBe(0.165);
    expect(sortedItem.at(2)?.popularity).toBe(0.129);
  });
});
