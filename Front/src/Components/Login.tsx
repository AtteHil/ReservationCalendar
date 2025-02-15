import "../styles/logIn.css"
import { CustomTextField } from '../styles/customTextField';
import { Box } from "@mui/material";
import { CustomButton } from "../styles/customButton";






export default function CredentialsSignInPage() {

    return (

        <Box id='loginForm'>
            <div id='borderDiv'>
                <p>Sign in</p>

                <CustomTextField
                    id="Email"
                    className='input'
                    label="Email"
                    variant="standard"
                />
                <CustomTextField
                    className='input'
                    id="Password"
                    label="Password"
                    variant="standard"
                />
                <CustomButton>Log in</CustomButton>
            </div>
        </Box>

    );
}
