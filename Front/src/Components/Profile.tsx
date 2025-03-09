import { useEffect } from "react"
import { useNavigate } from "react-router-dom";

const Profile = () => { // not implemented yet routes to log in because no token is found
    const navigate = useNavigate();
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:3000/reservation/', {
                method: 'GET',
                credentials: 'include',
            });
            if (response.status === 401) {
                navigate('/LogIn')
            }
            if(response.status === 400){
                console.log('Bad request')
            }
            const data = await response.json();
            console.log(data)
        };
        fetchData();
    }, [])
    
    return (
        <div>
            <h1>Profile Page</h1>
        </div>
        )

    
}
export default Profile