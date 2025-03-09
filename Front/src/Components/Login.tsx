import "../styles/logIn.css"
import { CustomTextField } from '../styles/customTextField';
import { Box } from "@mui/material";
import { CustomButton } from "../styles/customButton";
import { useTranslation } from 'react-i18next';
import { useAuth } from "../api/AuthProvider";
import { useState } from "react";





export default function CredentialsSignInPage() { // fetch to login to be added once jwt is implemented on backend
    const { t } = useTranslation()
    const { login } = useAuth();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const handleLogin = async () => {
        try {
          await login(username, password);
          // Redirect or perform any other actions after successful login
          console.log('Login successful');
        } catch (error) {
          setError('Login failed. Please check your credentials and try again.');
        }
      };
    return (

        <Box id='loginForm'>
            {error && <p>{error}</p>}
            <div id='borderDiv'>
                <p>{t("Sign in to make reservations")}</p>

                <CustomTextField
                    id="Email"
                    className='input'
                    label={t("Email")}
                    variant="standard"
                    onChange={(e) => setUsername(e.target.value)}
                />
                <CustomTextField
                    className='input'
                    id="Password"
                    label={t("Password")}
                    variant="standard"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <CustomButton onClick={handleLogin}>{t("Log in")}</CustomButton>
            </div>
        </Box>

    );
}
