import React, { useState } from "react";
import { CgMenu } from "@react-icons/all-files/cg/CgMenu";
import { CgCloseO } from "@react-icons/all-files/cg/CgCloseO";
import { AiFillTwitterCircle } from "@react-icons/all-files/ai/AiFillTwitterCircle";
import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook";
import { FaPinterest } from "@react-icons/all-files/fa/FaPinterest";
import { FaTumblr } from "@react-icons/all-files/fa/FaTumblr";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";

import { MdEmail } from "@react-icons/all-files/md/MdEmail";
import "../index.scss";
import Navbar from "./Navbar";
import Footer from "./Footer";
import useMetadata from "./hooks/useMetadata";
import { Link } from "gatsby";
export default function Layout({ children }) {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const data = useMetadata();
  const headerData = data.site.siteMetadata.menuLinks;
  const navLinks = data.site.siteMetadata.navLinks;

  const openNav = () => {
    if (hamburgerOpen === true) {
      setHamburgerOpen(false);
    }
    if (hamburgerOpen === false) {
      setHamburgerOpen(true);
    }
  };

  return (
    <div className="container">
      <header className="header">
        <div className="header__halfCircle"></div>
        <Link to='/' className="header__logo" onClick={()=> setHamburgerOpen(false)}>
          <em className="logo__firstLetter">Ż</em>
          <h1>
            ŻYCIE <br />
            OD NOWA
          </h1>
        </Link>
        <div className="header__links">
          <AiFillTwitterCircle />
          <FaFacebook />
          <FaPinterest />
          <FaTumblr />
          <FaLinkedin />
          <MdEmail />
        </div>
        <button className="header__hamburger" onClick={openNav}>
          {hamburgerOpen === false ? <CgMenu /> : <CgCloseO />}
        </button>
        <nav
          className={`header__navigation  ${
            hamburgerOpen ? "header__navigation--open" : null
          }`}
        >
          <ul className="navigation__ul">
            {navLinks.map((link) => (
              <li className="navigation__li " key={link.id}>
                <Link className="navigation__a" to={link.link}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Navbar data={headerData} location="header" />
      </header>
      <main>{children}</main>
      <Footer data={navLinks} />
    </div>
  );
}
