import React, { FC } from "react";
import s from "./RightSide.module.scss";
import { FaUser } from "react-icons/fa";

const RightSide: FC = () => {
  return (
    <div className={s.rightSide}>
      <div className={s.icons}>
        <FaUser size={40} />
      </div>
    </div>
  );
};

export default RightSide;
