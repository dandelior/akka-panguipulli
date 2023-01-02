import { useState } from 'react';
import Head from 'next/head';
import Accessibility from '../parts/Accessibility';
import Contact from '../parts/Contact';
import Features from '../parts/Features';
import Footer from '../parts/Footer';
import Gallery from '../parts/Gallery';
import Header from '../parts/Header';
import Map from '../parts/Map';
import MasterPlan from '../parts/MasterPlan';
import { Panoramic } from '../parts/Panoramic';
import Presentation from '../parts/Presentation';
import SellingArea from '../parts/SellingArea';

import 'animate.css';

export default function Home() {
  const [fixed, setFixed] = useState(false);
  const description =
    'AKKA Panguipulli es un proyecto ubicado a 2 kms del pueblo. Vivirás en un fundo de 13 hectáreas con solo 25 exclusivos sitios, cada uno respetando el paisaje, su geografía y la propia naturaleza. Un inmenso espacio natural, seguro y tranquilo en el sur de Chile.';

  return (
    <div className={`outer ${fixed && 'fixed'}`}>
      <Head>
        <title>AKKA Panguipulli</title>
        <meta name="description" content={description} />

        <meta property="og:title" content="AKKA Panguipulli" />
        <meta name="twitter:title" content="AKKA Panguipulli" />
        <meta itemProp="name" content="AKKA Panguipulli" />

        <meta property="og:type" content="website" />

        <meta name="description" content={description} />
        <meta property="og:description" content={description} />
        <meta name="twitter:description" content={description} />
        <meta itemProp="description" content={description} />

        <link rel="canonical" href="https://akka.cl" />
        <meta property="og:url" content="https://akka.cl" />
        <meta name="twitter:url" content="https://akka.cl" />

        <meta
          property="og:image"
          content="https://akka.cl/images/akka_og.png"
        />
        <meta property="og:image:width" content="900" />
        <meta property="og:image:height" content="470" />
        <meta
          name="twitter:image"
          content="https://akka.cl/images/akka_og.png"
        />
        <meta itemProp="image" content="https://akka.cl/images/akka_og.png" />

        {/* Facebook / Open Graph globals */}
        <meta property="og:site_name" content="AKKA" />
        <meta
          property="og:author"
          content="https://www.facebook.com/profile.php?id=100087623541347"
        />

        {/* Twitter globals */}
        <meta name="twitter:card" content="summary_large_image" />
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
