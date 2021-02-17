import { parseISO, formatDistance } from "date-fns";
import { fr } from "date-fns/locale";

export const currentDayName = () => {
  const date = new Date();
  return date.toLocaleString("default", { weekday: "long" });
};

export const dateAgo = (date) => {
  return (
    "il y a " +
    formatDistance(parseISO(date), new Date(), {
      locale: fr,
    })
  );
};
