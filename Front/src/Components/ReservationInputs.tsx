import { Box, FormControl,Alert, FormControlLabel, FormLabel, Radio, RadioGroup, Tooltip } from '@mui/material';
import { format, isBefore } from 'date-fns';
import { CustomTextField } from '../styles/customTextField';
import { CustomButton } from '../styles/customButton';
import { useTranslation } from 'react-i18next';
import { makeReservation } from '../api/reservation';
import '../styles/reservationInputs.css';
import {  useEffect, useState } from 'react';


interface ReservationInputsProps {
    selectedDays: [Date, Date] | null;
}
// getting dates from hook useDates
export const ReservationInputs = ({ selectedDays }: ReservationInputsProps) => {
    const [selectedFood, setSelectedFood] = useState(0);
    const [selectedCats, setSelectedCats] = useState("");
    const [alertMessage, setAlertMessage] = useState<string | null>(null);
    const [alertSeverity, setAlertSeverity] = useState<"success" | "error">();
    const { t } = useTranslation();


    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => { // listen to changes in radio buttons
        setSelectedFood(Number(event.target.value));
    };

    const controlProps = (item: number) => ({
        checked: selectedFood === item,
        onChange: handleChange,
        value: item,
    });

    const handleReservation = async () => {
        if (selectedDays && selectedCats && selectedFood) {
            const today = new Date();
            if (isBefore(selectedDays[0], today) || isBefore(selectedDays[1], today)) {
                setAlertMessage(t("Selected dates cannot be in the past"));
                setAlertSeverity("error");
            return;
            }
          try {
            const result = await makeReservation(selectedDays, selectedCats, selectedFood);
            console.log('Reservation successful:', result);
            setAlertMessage(t("Reservation successful!"));
            setAlertSeverity("success");
          } catch (error) {
            setAlertMessage(t("Failed to make reservation"));
            setAlertSeverity("error");
          }
          
        }setTimeout(() => {
            setAlertMessage(null);
          }, 3000);
      };
      useEffect(() => { // closes alert automatically after 3 seconds
        setTimeout(() => {
            setAlertMessage(null);
          }, 3000);},[alertMessage]);


    return (
        <Box
            component="form"
            sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
            noValidate
            autoComplete="off"
            id='ReservationInputs'
        >
            {alertMessage && alertSeverity && (
            <Alert severity={alertSeverity} onClose={() => setAlertMessage(null)}>
                {alertMessage}
            </Alert>
            )}
            {selectedDays ? (
                <div>
                    <h3>{t("Selected Dates")}</h3>
                    <p>{format(selectedDays[0], "dd-MM-yyyy")} - {format(selectedDays[1], "dd-MM-yyyy")}</p>
                </div>
            ) : (
                <p>{t("No dates selected yet")}</p>
            )}
                {/* shown on site with mouse click or with phone when holding input */}
            <Tooltip title={t("If you have many visitors, please separate them with ,")}> 
                <CustomTextField id="Cats" label={t("Visitors")} variant="outlined"  onChange={(e) => setSelectedCats(e.target.value)}/>
            </Tooltip>

            <FormControl>  {/* Radio buttons for food choice */}
                <FormLabel id="foodChoice">{t("Food")}</FormLabel>
                <RadioGroup
                    defaultValue={1}
                    name="radio-buttons-group"
                >
                    <FormControlLabel value={1} control={<Radio {...controlProps(1)} color="secondary" />} label={t("Bring own")} />
                    <FormControlLabel value={2} control={<Radio {...controlProps(2)} color="secondary" />} label={t("At an extra charge at Hotel")} />
                </RadioGroup>
            </FormControl>
            <CustomButton onClick={handleReservation}>{t("Make reservation")}</CustomButton>
        </Box>
    );
};

export default ReservationInputs;
