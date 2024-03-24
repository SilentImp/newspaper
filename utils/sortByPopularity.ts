import NewsEvent from "@/types/NewsEvent";

const sortByPopularity = (items: NewsEvent[]) => items.sort((
  {popularity: popularityA}, 
  {popularity: popularityB}
) => (Number(popularityB) - Number(popularityA)));

export default sortByPopularity;
