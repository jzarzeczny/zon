import React, { useState, useEffect } from "react";
import { Link } from "gatsby";

export default function Navbar({ data, location }) {
  const [cssClass, setCssClass] = useState();

  useEffect(() => {
    if (location === "header") {
      setCssClass("--header");
    }
    if (location === "footer") {
      setCssClass("--footer");
    }
  }, [location]);
  return (
    <nav className={`navbar navbar${cssClass}`}>
      <ul className={`navbar__ul navbar__ul${cssClass}`}>
        {data.map((link) => (
          <li className={`navbar__li navbar__li${cssClass}`} key={link.name}>
            <Link className={`navbar__a navbar__a${cssClass}`} to={link.link}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
