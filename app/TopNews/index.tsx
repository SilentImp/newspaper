import TopNews from './TopNews';
import sortByPopularity from "@/utils/sortByPopularity";
import { useData } from '@/context/DataContext';

const TopNewsContainer = () => {
  const items = useData();
  const sortedItems = sortByPopularity(items);
  return <TopNews items={sortedItems} />
}

export default TopNewsContainer;
