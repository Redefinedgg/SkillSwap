import Header from "@/widgets/Layout/Header/ui";
import { FC } from "react";

const RootLayout: FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <main>
      <Header />
      {children}
    </main>
  );
};

export default RootLayout;
