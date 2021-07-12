import React from "react";
import { Link } from "gatsby";
import useMetadata from "./hooks/useMetadata";
export default function Navbar() {
  const data = useMetadata();
  return (
    <nav className="header__navbar">
      <ul className="navbar__ul">
        {data.site.siteMetadata.menuLinks.map((link) => (
          <li className="navbar__li" key={link.name}>
            <Link className="navbar__a" to={link.link}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
