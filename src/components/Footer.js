import React from "react";
import useMetadata from "./hooks/useMetadata";

export default function Footer() {
  const data = useMetadata();
  const links = data.site.siteMetadata.navLinks;
  console.log(links);
  return (
    <footer className="footer">
      <div className="header__logo">
        <em className="logo__firstLetter">Ż</em>
        <h1>
          ŻYCIE <br />
          OD NOWA
        </h1>
      </div>
    </footer>
  );
}
