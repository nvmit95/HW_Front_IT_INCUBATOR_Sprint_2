import s from './Loader.module.css'
import {CircularProgress, Stack} from "@mui/material";

// export const Loader = () => <div className={s.loader}></>

export type LoaderPropsType = {
  size: string
}
export function Loader({size}: LoaderPropsType) {
  return (
    <Stack className={s.loader} >
      <CircularProgress size={size} color="secondary" />
    </Stack>
  );
}