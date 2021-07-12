import React from "react";
import { CgMenu } from "@react-icons/all-files/cg/CgMenu";
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

export default function Layout({ children }) {
  const data = useMetadata();
  const headerData = data.site.siteMetadata.menuLinks;
  const footerData = data.site.siteMetadata.navLinks;
  return (
    <div className="container">
      <header className="header">
        <div className="header__halfCircle"></div>
        <div className="header__logo">
          <em className="logo__firstLetter">Ż</em>
          <h1>
            ŻYCIE <br />
            OD NOWA
          </h1>
        </div>
        <div className="header__links">
          <AiFillTwitterCircle />
          <FaFacebook />
          <FaPinterest />
          <FaTumblr />
          <FaLinkedin />
          <MdEmail />
        </div>
        <div className="header__hamburger">
          <CgMenu />
        </div>
        <Navbar data={headerData} location="header" />
      </header>
      <main>{children}</main>
      <Footer data={footerData} />
    </div>
  );
}
