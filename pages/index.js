import { useState } from "react";
import Head from "next/head";
import Accessibility from "../parts/Accessibility";
import Contact from "../parts/Contact";
import Features from "../parts/Features";
import Footer from "../parts/Footer";
import Gallery from "../parts/Gallery";
import Header from "../parts/Header";
import Map from "../parts/Map";
import MasterPlan from "../parts/MasterPlan";
import { Panoramic } from "../parts/Panoramic";
import Presentation from "../parts/Presentation";
import SellingArea from "../parts/SellingArea";

import "animate.css";

export default function Home() {
  const [fixed, setFixed] = useState(false);

  return (
    <div className={`outer ${fixed && "fixed"}`}>
      <Head>
        <title>AKKA Panguipulli</title>
        <meta name="description" content="AKKA Panguipulli" />
      </Head>

      <Header setFixed={setFixed} />

      <Presentation />

      <SellingArea />

      <MasterPlan />

      <Accessibility />

      <Features />

      <Panoramic />

      <Gallery />

      <Contact />

      <Map />

      <Footer />
    </div>
  );
}
