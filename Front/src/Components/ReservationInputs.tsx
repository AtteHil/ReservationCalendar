import { Box, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Tooltip } from '@mui/material';
import { format } from 'date-fns';
import { CustomTextField } from '../styles/customTextField';
import { CustomButton } from '../styles/customButton';
import { useTranslation } from 'react-i18next';
import '../styles/reservationInputs.css';
import { useState } from 'react';
interface ReservationInputsProps {
    selectedDays: [Date, Date] | null;
}
// getting dates from hook useDates
export const ReservationInputs = ({ selectedDays }: ReservationInputsProps) => {
    const [selectedValue, setSelectedValue] = useState(0);
    const { t } = useTranslation();
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => { // listen to changes in radio buttons
        setSelectedValue(Number(event.target.value));
    };

    const controlProps = (item: number) => ({
        checked: selectedValue === item,
        onChange: handleChange,
        value: item,
    });
    return (
        <Box
            component="form"
            sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
            noValidate
            autoComplete="off"
            id='ReservationInputs'
        >

            {selectedDays ? (
                <div>
                    <h3>{t("Selected Dates")}</h3>
                    <p>{format(selectedDays[0], "dd-MM-yyyy")} - {format(selectedDays[1], "dd-MM-yyyy")}</p>
                </div>
            ) : (
                <p>{t("No dates selected yet")}</p>
            )}

            <Tooltip title={t("If you have many visitors, please separate them with ,")}>
                <CustomTextField id="Cats" label={t("Visitors")} variant="outlined" />
            </Tooltip>

            <FormControl>
                <FormLabel id="foodChoice">{t("Food")}</FormLabel>
                <RadioGroup

                    defaultValue={1}
                    name="radio-buttons-group"
                >
                    <FormControlLabel value={1} control={<Radio {...controlProps(1)} color="secondary" />} label={t("Bring own")} />
                    <FormControlLabel value={2} control={<Radio {...controlProps(2)} color="secondary" />} label={t("At an extra charge at Hotel")} />
                </RadioGroup>
            </FormControl>
            <CustomButton>{t("Make reservation")}</CustomButton>
        </Box>
    );
};

export default ReservationInputs;
