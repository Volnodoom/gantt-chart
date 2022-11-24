import { useDispatch } from "react-redux";
import { AppDispatch } from "types/server.type";

export const useAppDispatch = () => useDispatch<AppDispatch>();
