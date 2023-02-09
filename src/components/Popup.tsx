import React from "react";
import s from "./Popup.module.scss";

import ThisDayItem from "./ThisDayItem";
import { Item } from "./ThisDayInfo";
import SvgSelector from "../icons/SvgSelector";

interface Props {}

export const Popup = ({}: Props) => {
  const items = [
    {
      icon_id: "temp",
      name: "Температура",
      value: "20° - ощущается как 17°",
    },
    {
      icon_id: "pressure",
      name: "Давление",
      value: "765 мм ртутного столба - нормальное",
    },
    {
      icon_id: "precipitation",
      name: "Осадки",
      value: "Без осадков",
    },
    {
      icon_id: "wind",
      name: "Ветер",
      value: "3 м/с юго-запад - легкий ветер",
    },
  ];
  return (
    <>
      <div className={s.blur}></div>
      <div className={s.popup}>
        <div className={s.day}>
          <div className={s.day_temp}>12°</div>
          <div className={s.day_name}>Среда</div>
          <div className={s.img}>
            <SvgSelector id="sun" />
          </div>
          <div className={s.day_time}>
            Время: <span>12.24</span>
          </div>
          <div className={s.day_city}>
            Город: <span>Москва</span>
          </div>
        </div>
        <div className={s.day_info_items}>
          {items.map((item: Item) => (
            <ThisDayItem key={item.icon_id} item={item} />
          ))}
        </div>
        <div className={s.close}>
          <SvgSelector id="close" />
        </div>
      </div>
    </>
  );
};
