import TimeLine from './TimeLine';
import sortByTimeDESC from "@/utils/sortByTimeDESC";
import { useData } from '@/context/DataContext';

const TineLineContainer = () => {
  const items = useData();
  const sortedItems = sortByTimeDESC(items);
  return <TimeLine items={sortedItems} />
}

export default TineLineContainer;
