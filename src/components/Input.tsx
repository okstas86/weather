import { useState } from "react";
import s from "./Input.module.scss";

function Input() {
  const [city, setCity] = useState("");

  return (
    <div className={s.search}>
      <input
        type="text"
        placeholder="Enter the city"
        name="city"
        onChange={(event) => setCity(event.target.value)}
      />
      <button type="button">Enter your city</button>
    </div>
  );
}
export default Input;
function dispatch(arg0: any) {
  throw new Error("Function not implemented.");
}
