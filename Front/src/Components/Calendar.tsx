import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../styles/calendar.css";
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
      {/* {Array.isArray(date) && date.length === 2 && (
        <p>
          {t("Chosen days")} : {date[0] ? format(date[0], "dd-MM-yyyy") : ""} - {date[1] ? format(date[1], "dd-MM-yyyy") : ""}
        </p>
      )} */}

    </div>
  );
};

export default RangeCalendar;
