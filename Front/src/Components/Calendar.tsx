import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../styles/calendar.css";
import { useTranslation } from 'react-i18next'
import {format} from 'date-fns';

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const RangeCalendar: React.FC = () => {
  const { t } = useTranslation()
    
  const [date, setDate] = useState<Value>([new Date(), new Date()]);

  return (
    <div>
      <h2>{t('Select a Date Range')}</h2>
      <Calendar onChange={setDate} value={date} selectRange={true} />
      {Array.isArray(date) && date.length === 2 && (
        <p>
          {t("Chosen days")} : {date[0]?format(date[0], "dd-MM-yyyy"):""} - {date[1]?format(date[1], "dd-MM-yyyy"):""}
        </p>
      )}
    </div>
  );
};

export default RangeCalendar;
