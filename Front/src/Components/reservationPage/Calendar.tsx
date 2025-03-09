import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../../styles/calendar.css";
import { useTranslation } from 'react-i18next'


type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];
interface CalendarProps {
  saveDays?: (days: [Date, Date]) => boolean;
}
const RangeCalendar = ({ saveDays }: CalendarProps) => { // react calendar component
  const { t } = useTranslation()

  const [date, setDate] = useState<Value>([new Date(), new Date()]); // showing dates in this div
  const handleDateChange = (newDate: Value) => {
    setDate(newDate);


    if (saveDays && Array.isArray(newDate) && newDate.length === 2) {
      saveDays(newDate as [Date, Date]);  // Use hook to transfer dates to input div
    }
  };
  return (
    <div id="calendarDiv">
      <h2>{t('Select a Date Range')}</h2>
      <Calendar onChange={handleDateChange} value={date} selectRange={true} />
    </div>
  );
};

export default RangeCalendar;
