import React from "react";
import SvgSelector from "../icons/SvgSelector";
import { Weather } from "../store/types/types";
import s from "./ThisDay.module.scss";

interface Props {
  weather: Weather;
}

export const ThisDay = ({ weather }: Props) => {
  const timezone = weather.timezone;
  function getTime() {
    const h = timezone / 60 / 60;

    var today = new Date();
    const hours = today.getUTCHours();

    var today = new Date();
    const minutes = today.getUTCMinutes();

    return `${hours + h}:${minutes}`;
  }
  return (
    <div className={s.this_day}>
      <div className={s.top_block}>
        <div className={s.top_block_wrapper}>
          <div className={s.this_temp}>{Math.floor(weather.main.temp)}°</div>
          <div className={s.today}>Сегодня</div>
        </div>
        <SvgSelector id="sun" />
      </div>
      <div className={s.bottom_block}>
        <div className={s.time}>
          Время: <span>{getTime()}</span>
        </div>
        <div className={s.city}>
          Город: <span>{weather.name}</span>
        </div>
      </div>
    </div>
  );
};
