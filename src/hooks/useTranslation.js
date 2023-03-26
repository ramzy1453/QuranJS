import { useSelector, useDispatch } from "react-redux";
import { translationActions } from "../store/translation";

export default function useTranslation() {
  const translation = useSelector((state) => state.translation);
  const dispatch = useDispatch();
  const setTranslation = (locale) => {
    dispatch(translationActions.setTranslation(locale));
  };
  return { translation, setTranslation };
}
