import React, { useEffect } from "react";
import {
  useCustomDispatch,
  useCustomSelector,
} from "../components/hooks/store";
import { selectCurrentWeatherData } from "../store/selectors";
import { fetchCurrentWeather } from "../store/thuhks/fetchCurrentWeather";
import { Days } from "../components/days/Days";
import { ThisDay } from "../components/ThisDay";
import { ThisDayInfo } from "../components/ThisDayInfo";

import s from "./Home.module.scss";
import Input from "../components/Input";

interface Props {}

export const Home = (props: Props) => {
  const dispatch = useCustomDispatch();
  const { weather } = useCustomSelector(selectCurrentWeatherData);

  useEffect(() => {
    dispatch(fetchCurrentWeather("moscow"));
  }, []);
  return (
    <div className={s.home}>
      <Input />
      <div className={s.wrapper}>
        <ThisDay weather={weather} />
        <ThisDayInfo />
      </div>
      <Days />
    </div>
  );
};
