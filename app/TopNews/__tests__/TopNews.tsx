import TopNews from '../TopNews';
import {render, screen} from '@testing-library/react';

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

describe('TopNews', () => {
  it('show all news', () => {
    const { container } = render(<TopNews items={items} />);
    items.forEach(({ title }) => {
      const element = screen.queryByText(title);
      expect(element).toBeVisible();
    });
  });

  it('show lead', () => {
    const { container } = render(<TopNews items={items} />);
    const text = container.querySelector('figcaption')?.textContent;
    expect(text).toBe(items.at(0)!.title);
  });
});

