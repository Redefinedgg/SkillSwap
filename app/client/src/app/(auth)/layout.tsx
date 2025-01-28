import React, { FC } from "react";

const RootLayout: FC<React.PropsWithChildren> = ({ children }) => {
  return <main>{children}</main>;
};

export default RootLayout;
