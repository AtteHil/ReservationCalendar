import RangeCalendar from "./Calendar";
import { ReservationsDiv } from "./ReservationsDiv";
import { useDates } from "../hooks/useDates";
import { ReservationInputs } from './ReservationInputs'
import '../styles/reservationPage.css';

const ReservationsPage = () => {
    const { selectedDays, saveDays } = useDates();
    return (
        <div id="reservationPageDiv">
            <ReservationsDiv />
            <RangeCalendar saveDays={saveDays} />
            <ReservationInputs selectedDays={selectedDays} />

        </div>
    );
};

export default ReservationsPage;