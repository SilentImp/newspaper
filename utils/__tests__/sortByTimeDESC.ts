import sortByTimeDESC from "../sortByTimeDESC";

const items = [
  {
    id: 8015699,
    title: 'The story behind the Table Snip',
    popularity: 0.129,
    timestamp: '2023-01-16T07:39:55.793Z',
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
    timestamp: '2023-03-16T11:00:27.508Z',
  },
];

describe('sortByTimeDESC', () => {
  it('works', () => {
    const sortedItem = sortByTimeDESC(items);
    expect(sortedItem.at(2)?.id).toBe(8015699);
    expect(sortedItem.at(1)?.id).toBe(9895971);
    expect(sortedItem.at(0)?.id).toBe(3158876);
  });
});
