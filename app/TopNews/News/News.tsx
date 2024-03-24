import type NewsEvent from '@/types/NewsEvent';
import './News.css';

type News = {
  item: NewsEvent;
}

const News = (
  {
    item: {
      title,
    }
  }: News
) => (
  <li className="news">
    <a href="#" className="news__link">{title}</a>
  </li>
);

export default News;
