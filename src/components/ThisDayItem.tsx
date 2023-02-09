import React from "react";
import { IndicatorSvgSelector } from "../indicators/IndicatorSvgSelector";
import { Item } from "./ThisDayInfo";
import s from "./ThisDayInfo.module.scss";

interface Props {
  item: Item;
}

function ThisDayItem({ item }: Props) {
  const { icon_id, name, value } = item;
  return (
    <div className={s.item}>
      <div className={s.indicator}>
        <IndicatorSvgSelector id={icon_id} />
      </div>
      <div className={s.indicator_name}>{name}</div>
      <div className={s.indicator_value}>{value}</div>
    </div>
  );
}

export default ThisDayItem;
