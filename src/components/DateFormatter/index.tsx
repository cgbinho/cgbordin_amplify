import { parseISO, format } from 'date-fns';

const DateFormatter = ({ dateString }) => {
  const date = parseISO(dateString);
  return (
    <small>
      <time dateTime={dateString}>{format(date, 'LLLL	d, yyyy')}</time>
    </small>
  );
};
export default DateFormatter;
