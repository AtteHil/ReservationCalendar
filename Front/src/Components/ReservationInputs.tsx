import { format } from 'date-fns';
interface ReservationInputsProps {
    selectedDays: [Date, Date] | null;
}
// getting dates from hook useDates
export const ReservationInputs = ({ selectedDays }: ReservationInputsProps) => {
    return (
        <div>
            {selectedDays ? (
                <div>
                    <h3>Selected Dates</h3>
                    <p>Start Date: {format(selectedDays[0], "dd-MM-yyyy")}</p>
                    <p>End Date: {format(selectedDays[1], "dd-MM-yyyy")}</p>
                </div>
            ) : (
                <p>No dates selected yet.</p>
            )}
        </div>
    );
};

export default ReservationInputs;
