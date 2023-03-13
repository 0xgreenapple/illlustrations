import React from "react"
import Challange from "../../v2_components/challenge";
import Illustrations from "../../v2_components/100-illustrations"
import Layout from "../../v2_components/layout";
import Hero from "../../v2_components/hero";
import Product from "../../v2_components/product";
import Featured from "../../v2_components/featured";
import COVID19 from "../../v2_components/covid-19";
import Nav from "../../v2_components/nav";
import Footer from "../../v2_components/footer";
import { getSortedPostsData } from "../../templates/blog-post"

export async function getStaticProps() {
  const illlustrations = getSortedPostsData();
  return {
    props: {
      illlustrations,
    },
  }
}
export default function Home({ illlustrations }) {
  return (
    <Layout>
      <Nav />
      <Hero />
      <COVID19 />
      <Featured />
      <Illustrations data={illlustrations}/>
      <Challange />
      <Product />
      <Footer />
    </Layout>
  )
}


