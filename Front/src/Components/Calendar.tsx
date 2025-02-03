import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../styles/Calendar.css";
import { useTranslation } from 'react-i18next'

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const RangeCalendar: React.FC = () => {
  const { t, i18n } = useTranslation()
    
  const [date, setDate] = useState<Value>([new Date(), new Date()]);

  return (
    <div>
      <h2>Select a Date Range</h2>
      <Calendar onChange={setDate} value={date} selectRange={true} />
      {Array.isArray(date) && date.length === 2 && (
        <p>
          {t("chosen days")} : {date[0]?.toDateString()} - {date[1]?.toDateString()}
        </p>
      )}
    </div>
  );
};

export default RangeCalendar;
