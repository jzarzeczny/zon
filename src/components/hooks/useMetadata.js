import { useStaticQuery, graphql } from "gatsby";

export default function useMetadata() {
  const data = useStaticQuery(graphql`
    query MyQuery {
      site {
        siteMetadata {
          menuLinks {
            name
            link
            image
          }
          navLinks {
            link
            name
          }
        }
      }
    }
  `);
  return data;
}
