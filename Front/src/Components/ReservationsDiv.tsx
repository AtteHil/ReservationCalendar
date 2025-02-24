import { useEffect, useState } from 'react';
import { motion, AnimatePresence} from 'framer-motion';
import '../styles/reservationDiv.css';
import { fetchReservation } from '../api/fetchReservation';
import { CustomButton } from '../styles/customButton';
import UpdateIcon from '@mui/icons-material/Update';
import { useTranslation } from 'react-i18next';

interface Reservation {
    days: string[];
    cats: number;
    food: string;
}

export const ReservationsDiv = () => {
    const [t] = useTranslation();
    const [reservations, setReservations] = useState<Reservation[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    
    
    useEffect(() => { // found from https://github.com/facebook/react/issues/25962 
        // initial load will abort because React loads -> cleanups -> loads again and there for two aborts happen if initialized true
        const controller = new AbortController();
        const signal = controller.signal;
    
        const fetchReservations = async () => {
            try {
                const reservationData = await fetchReservation(signal);
                setReservations(reservationData);
            } catch (error: unknown) {
                if (error instanceof Error && error.name === "AbortError") {
                    console.log("Fetch aborted");
                } else {
                    console.error("Failed to fetch reservations:", error);
                }
            } finally {
                setLoading(false);
            }
        };
    
        if (loading) {
            fetchReservations();
        }
    
        // Cleanup: only abort if fetch is still ongoing
        return () => {
            if (loading) {
                controller.abort();
            }
        };
    }, [loading]);
    
    // Motion animation variants
    const itemVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
        exit: { opacity: 0, transition: { duration: 0.3 } }
    };
    
    return (
        <div id="reservationDiv">
            <h2 id='reservationTitle'>{t("Reservations")}</h2>
            <CustomButton  onClick={() =>setLoading(true)} id='refreshButton'><UpdateIcon></UpdateIcon></CustomButton>
        <br />
        {loading && <p>{t("Loading reservations")}...</p>}
            <ul className="reservations-list">
                {reservations && reservations.length === 0 && <p>No reservations</p>}

                <AnimatePresence>
                    {reservations?.map((reservation) => (
                        <motion.li
                            key={reservation.days[0]}
                            variants={itemVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="reservation-item"
                        >
                            <p>{t("Reservation for")}: {reservation.cats}</p>
                            <p>{t("Starts")}: {reservation.days[0]}</p>
                            <p>{t("Ends")}: {reservation.days[1]}</p>
                            <p>{t("Food choice")}: {reservation.food}</p>
                        </motion.li>
                    ))}
                </AnimatePresence>
            </ul>
        </div>
    );
};