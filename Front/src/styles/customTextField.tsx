import { styled } from '@mui/material/styles';

import { TextField } from '@mui/material';
const violetBase = '#A020F0';


export const CustomTextField = styled(TextField)({
    "& label": { color: violetBase }, // Label color
    "& label.Mui-focused": { color: "white" }, // Label color when focused
    "& .MuiInput-underline:before": { borderBottomColor: violetBase }, // Default underline color
    "& .MuiInput-underline:hover:before": { borderBottomColor: '#ff75e8' }, // Hover underline color
    "& .MuiInput-underline:after": { borderBottomColor: "white" }, // Focus underline color
    "& .MuiInputBase-input": { color: "white" }, // Text color inside input

}) as typeof TextField;