import { useEffect, useState } from 'react';
import { motion, AnimatePresence} from 'framer-motion';
import '../styles/reservationDiv.css';
import { fetchReservation } from '../api/fetchReservation';
import { CustomButton } from '../styles/customButton';
import UpdateIcon from '@mui/icons-material/Update';
import { useTranslation } from 'react-i18next';
import { format} from 'date-fns';
import { Atom } from 'react-loading-indicators';

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
        // does not do it in production
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
        return () => {
            controller.abort();
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
        {loading ? ( // loading spinner or reservations
                <Atom color="#b31dcc" size="medium" text="" textColor="" />
            ) : (
                <ul className="reservations-list">
                    {reservations && reservations.length === 0 && <p>{t("No reservations")}</p>}
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
                                <p>{t("Starts")}: {format(new Date(reservation.days[0]), "dd-MM-yyyy")}</p>
                                <p>{t("Ends")}: {format(new Date(reservation.days[1]), "dd-MM-yyyy")}</p>
                                <p>{t("Food choice")}: {reservation.food}</p>
                            </motion.li>
                        ))}
                    </AnimatePresence>
                </ul>
            )}
        </div>
    );
};