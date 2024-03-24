import type NewsEvent from '@/types/NewsEvent';
import TimeLineEvent from './TimeLineEvent/TimeLineEvent';
import './TimeLine.css';

const TimeLineEventMapper = (event: NewsEvent) => (<TimeLineEvent key={event.id} event={event} />);

type TimeLineProps = {
  items: NewsEvent[];
};

const TimeLine = ({
  items
}: TimeLineProps) => {
  const news = items.map(TimeLineEventMapper);
  return (
  <aside className="timeline">
    <h2 className="timeline__title">Timeline</h2>
    <ol className="timeline__list">{news}</ol>
  </aside>
  );
};

export default TimeLine;
