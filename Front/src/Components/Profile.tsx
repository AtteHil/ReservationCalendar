import { useEffect } from "react"
import { useNavigate } from "react-router-dom";

const Profile = () => { // to be implemented
    const navigate = useNavigate();
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://reservationcalendar.onrender.com/reservation/', { /// fix address
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