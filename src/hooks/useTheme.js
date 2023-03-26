import { useSelector, useDispatch } from "react-redux";
import { themeActions } from "../store/theme";

export default function useTheme() {
  const isDark = useSelector((state) => state.theme.isDark);
  const dispatch = useDispatch();
  const toggleTheme = () => {
    dispatch(themeActions.toggleTheme());
  };
  return { isDark, toggleTheme };
}
