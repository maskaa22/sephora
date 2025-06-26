import { useMediaQuery } from "react-responsive";

export const useDecktop = () => useMediaQuery({ minWidth: 1440 });
export const useMobile = () => useMediaQuery({ maxWidth: 1439 });
