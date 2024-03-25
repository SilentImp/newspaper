import type NewsEvent from '@/types/NewsEvent';
import './TimeLineEvent.css';

type TimeLineEvent = {
  event: NewsEvent;
}

const TimeLineEvent = (
  {
    event: {
      timestamp,
      title,
    }
  }: TimeLineEvent
) => {
  const date = new Date(timestamp);
  let optionsTime: Intl.DateTimeFormatOptions = {
    hourCycle: 'h23',
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Europe/Amsterdam",
  };
  const time = Intl.DateTimeFormat('en', optionsTime).format(date);
  const dateTime = Intl.DateTimeFormat('en', {
    hourCycle: 'h23',
    dateStyle: "full",
    timeStyle: "full",
    timeZone: "Europe/Amsterdam",
  }).format(date);
  return (
    <li className="timeline-event">
      <a href="#" className="timeline-event__link" >
        <time 
          className="timeline-event__time" 
          title={dateTime} 
          dateTime={timestamp}>{time}</time>
        <span className="timeline-event__title">{title}</span>
      </a>
    </li>
  );
}

export default TimeLineEvent;
