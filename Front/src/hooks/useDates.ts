import { useState } from "react";
// hook to transfer selected days from calendar component to reservation inputs to make reservation
export const useDates = () => {
    const [selectedDays, setSelectedDays] = useState<[Date, Date] | null>(null);
    
    const saveDays = (days: [Date, Date]): boolean => {
        setSelectedDays(days);
        return true;
    };
    
    return {
        selectedDays,
        saveDays
    }
}