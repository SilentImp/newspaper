import './TopNews.css';

import NewsEvent from '@/types/NewsEvent';
import News from './News/News';
import LeadArticle from './LeadArticle/LeadArticle';

const NewsMapper = (item: NewsEvent) => (<News key={item.id} item={item} />);

type TopNewsProps = {
  items: NewsEvent[];
};

const TopNews = ({ items }: TopNewsProps) => {
  const list = items.slice(1).map(NewsMapper);
  const hasArticle = items.length > 0;
  const hasArticles = items.length > 1;
  return (
    <main className="top-news">
      <h2 className="top-news__title">Top News</h2>
      {hasArticle && <LeadArticle article={items.at(0)!} />}
      {hasArticles && <ol className="top-news__list">
        {list}
      </ol>}
    </main>
  );
}

export default TopNews;
