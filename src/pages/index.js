import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import Resources from "../components/Resources";
import YouTubeSection from "../components/YouTubeSection";
import QuotationOfTheDay from "../components/QuotationOfTheDay";
const IndexPage = () => {
  return (
    <Layout>
      <main className="content">
        <StaticImage
          src="../assets/images/people.png"
          alt="Group of people"
          placeholder="blurred"
          layout="constrained"
        />
        <Resources />
        <YouTubeSection />
        <QuotationOfTheDay />
      </main>
    </Layout>
  );
};

export default IndexPage;
