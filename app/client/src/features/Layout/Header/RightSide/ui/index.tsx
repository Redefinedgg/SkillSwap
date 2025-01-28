import React, { FC } from "react";
import s from "./RightSide.module.scss";
import { FaUser } from "react-icons/fa";
import Link from "next/link";

const RightSide: FC = () => {
  return (
    <div className={s.rightSide}>
      <div className={s.icons}>
        <Link href="/login">
          <FaUser size={40} />
        </Link>
      </div>
    </div>
  );
};

export default RightSide;
