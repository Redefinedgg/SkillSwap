import React, { FC } from "react";
import s from "./LeftSide.module.scss";

const LeftSide: FC = () => {
  return (
    <div className={s.leftSide}>
      <h1>Skill Swap</h1>
      <p>
        The place to swap your skills <br /> with other people!
      </p>
    </div>
  );
};

export default LeftSide;
