import "../styles/logIn.css"
import { CustomTextField } from '../styles/customTextField';
import { Box } from "@mui/material";
import { CustomButton } from "../styles/customButton";
import { useTranslation } from 'react-i18next';





export default function CredentialsSignInPage() { // fetch to login to be added once jwt is implemented on backend
    const { t } = useTranslation()
    return (

        <Box id='loginForm'>
            <div id='borderDiv'>
                <p>{t("Sign in to make reservations")}</p>

                <CustomTextField
                    id="Email"
                    className='input'
                    label={t("Email")}
                    variant="standard"
                />
                <CustomTextField
                    className='input'
                    id="Password"
                    label={t("Password")}
                    variant="standard"
                />
                <CustomButton>{t("Log in")}</CustomButton>
            </div>
        </Box>

    );
}
