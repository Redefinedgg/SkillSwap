import { Nunito } from "next/font/google";
import { FC } from "react";
import "./(deffault)/globals.scss";

const nunito = Nunito({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const RootLayout: FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>Skill Swap</title>
      </head>
      <body>
        <main className={nunito.className}>
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
