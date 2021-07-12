import React from "react";
import Navbar from "./Navbar";

export default function Footer({ data }) {
  return (
    <footer className="footer">
      <div className="header__logo header__logo--white">
        <em className="logo__firstLetter logo__firstLetter--white">Ż</em>
        <h1>
          ŻYCIE <br />
          OD NOWA
        </h1>
      </div>
      <Navbar data={data} location={"footer"} />
      <div className="footer__decoration"></div>
    </footer>
  );
}
