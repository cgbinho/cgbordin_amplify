import { parseISO, format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import enUS from 'date-fns/locale/en-US';
import { useRouter } from 'next/router';

const DateFormatter = ({ dateString }) => {
  const { locale: userLocale = 'pt-BR' } = useRouter();

  const locale = userLocale !== 'pt-BR' ? enUS : ptBR;

  const dateFormat =
    userLocale !== 'pt-BR' ? 'LLLL	d, yyyy' : "d 'de' LLLL, yyyy";

  const date = parseISO(dateString);
  return (
    <time dateTime={dateString}>
      {format(date, dateFormat, {
        locale,
      })}
    </time>
  );
};
export default DateFormatter;
