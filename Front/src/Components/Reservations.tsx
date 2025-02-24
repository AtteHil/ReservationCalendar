import RangeCalendar from "./Calendar";
import { ReservationsDiv } from "./ReservationsDiv";
import { useDates } from "../hooks/useDates";
import { ReservationInputs } from "./ReservationInputs";
import { Paper } from "@mui/material";
import "../styles/reservationPage.css";


const ReservationsPage: React.FC = () => {
    const { selectedDays, saveDays } = useDates();
    
    return (

        <div className="overflow-auto">
            <div className="row g-3">
                {/* First Row: ReservationsDiv & RangeCalendar */}
                <div className="col-12 col-md-6">
                    <Paper id="upperDiv" elevation={6} className="p-3 d-flex gap-2 flex-wrap">
                        <ReservationsDiv />
                        <RangeCalendar saveDays={saveDays} />
                    </Paper>
                </div>

                {/* Second Row: ReservationInputs */}
                <div className="col-12">
                    <ReservationInputs selectedDays={selectedDays} />
                </div>
            </div>
        </div>

    );
};

export default ReservationsPage;
