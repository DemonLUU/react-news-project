import React from "react";
import style from "./Child.module.scss";

// console.log(style);
export default function Child () {
  return (
    <div>
      child
      <ul>
        <li className={style.item}>cccccccccc</li>
        <li className={style.item}>hhhhhhhhh</li>
        111
      </ul>
    </div>
  );
}
