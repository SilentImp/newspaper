import "./reset.css";
import "./globals.css";
import "./typography.css";

import NewsPage from './NewsPage';
import News from "@/services/news";
import type NewsEvent from "@/types/NewsEvent";

export default async () => {
  const items = await News.get() satisfies NewsEvent[];
  return (<NewsPage items={items} />);
}
