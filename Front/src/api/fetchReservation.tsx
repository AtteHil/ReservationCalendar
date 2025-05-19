
interface Reservation {
  days: string[];
  cats: number;
  food: string;
}
export const fetchReservation = async (signal: AbortSignal):Promise<Reservation[]> => {
    const response = await fetch('https://reservationcalendar.onrender.com/reservation/getReservations', { signal});
    
    
      if (!response.ok) {
        throw new Error('Failed to make reservation');
      }
      
      
      return await response.json();
    };
