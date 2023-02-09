import React, { useEffect, useState } from "react";
import s from "./Header.module.scss";
import SvgSelector from "../icons/SvgSelector";
import Select, { useStateManager } from "react-select";

interface Props {}

export const Header = (props: Props) => {
  const options = [
    { value: "city-1", label: "Москва" },
    { value: "city-2", label: "Дубай" },
    { value: "city-3", label: "Париж" },
  ];

  const [theme, setTheme] = useState("light");

  const colorStyles = {
    control: (styles: any) => ({
      ...styles,
      backgroundColor: theme === "dark" ? "#4f4f4f" : "rgba(71,147,255,0.2)",
      witdh: "164px",
      height: "37px",
      border: "none",
      borderRadius: "10px",
      zIndex: 3,
    }),
    singleValue: (styles: any) => ({
      ...styles,
      color: theme === "light" ? "#000" : "#fff",
    }),
  };

  function changeTheme() {
    setTheme(theme === "light" ? "dark" : "light");
    console.log(theme);
  }

  useEffect(() => {
    const root = document.querySelector(":root") as HTMLElement;
    const components = [
      "body-background",
      "components-background",
      "card-background",
      "card-box-shadow",
      "text-color",
    ];

    components.forEach(
      (components) => {
        root.style.setProperty(
          `--${components}-default`,
          `var(--${components}-${theme})`
        );
      },
      [theme]
    );
  });

  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <div className={s.logo}>
          <SvgSelector id="logo" />
        </div>
        <div className={s.title}>
          <h1>Weather</h1>
        </div>
      </div>
      <div className={s.wrapper}>
        <div className={s.change_theme} onClick={changeTheme}>
          <SvgSelector id="change-theme" />
        </div>
        <Select
          defaultValue={options[0]}
          styles={colorStyles}
          options={options}
        />
      </div>
    </header>
  );
};

export default Header;
