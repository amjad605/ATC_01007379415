import { useState } from "react";
import { useAuth } from "../context/authContext"; // غير المسار حسب مشروعك

export const useBooking = () => {
  const { updateBookedEvents, fetchUser } = useAuth();
  const [isBookedLoading, setIsBookedLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const bookEvent = async (eventId: string) => {
    if (isBookedLoading) return;

    setIsBookedLoading(true);

    try {
      const response = await fetch(
        `http://localhost:5000/bookings/${eventId}`,
        {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 201) {
        await updateBookedEvents(eventId);
        await fetchUser();
        setShowSuccess(true);
        setIsBookedLoading(false);

        setTimeout(async () => {
          await fetchUser();
          setShowSuccess(false);
        }, 5000);

        return true;
      }
    } catch (error) {
      console.error("Error booking event:", error);
    }

    setIsBookedLoading(false);
    return false;
  };

  return {
    bookEvent,
    isBookedLoading,
    showSuccess,
  };
};
