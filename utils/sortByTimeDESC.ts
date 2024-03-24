import NewsEvent from "@/types/NewsEvent";

const sortByTimeDESC = (items: NewsEvent[]) => items.sort((
  {timestamp: timestampA},
  {timestamp: timestampB}
) => {
  const dateA = new Date(timestampA);
  const dateB = new Date(timestampB);
  return dateB.getTime() - dateA.getTime();
});

export default sortByTimeDESC;
