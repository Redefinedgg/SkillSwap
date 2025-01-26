import React, { FC } from "react";
import s from "./Header.module.scss";
import LeftSide from "@/features/Layout/Header/LeftSide";
import RightSide from "@/features/Layout/Header/RightSide";

const Header: FC = () => {
  return (
    <main className={s.header}>
      <LeftSide />
      <RightSide />
    </main>
  );
};

export default Header;
