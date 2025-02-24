export const makeReservation = async (days: [Date, Date], cats: string, food: number) => {
  
  const response = await fetch('https://reservationcalendar.onrender.com/reservation/makeReservation', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      days,
      cats,
      food,
    }),
  });

  if (!response.ok) {
    throw new Error('Failed to make reservation');
  }

  return response.json();
};