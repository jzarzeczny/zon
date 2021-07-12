import { Link } from "gatsby";
import React from "react";
import useMetadata from "./hooks/useMetadata";

export default function Resources() {
  const data = useMetadata();
  return (
    <div className="resources">
      {data.site.siteMetadata.menuLinks.map((link) => (
        <Link to={link.link} key={link.name} className="resources__card">
          <img src={link.image} alt={link.name} className="card__image" />
          <h3 className="card__heading">{link.name}</h3>
        </Link>
      ))}
    </div>
  );
}
