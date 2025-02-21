import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
const Profile = () => {
    const [token, setToken] = useState<string>("");
    const navigate = useNavigate();
    useEffect(() => {
        try {
            const localStorage = window.localStorage.getItem("token") as string;
            if (localStorage) {
                setToken(localStorage)
            }
            else {
                navigate("/LogIn")
            }

        } catch (error) {

        }
    })
    return (
        (token && <div>
            <h1>Profile Page</h1>
        </div>
        )

    )
}
export default Profile