import React from "react"
import Challange from "../components/challenge"
import Illustrations from "../components/100-illustrations"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Product from "../components/product"
import Featured from "../components/featured"
import COVID19 from "../components/covid-19"
import Nav from "../components/nav"
import Footer from "../components/footer"
import { getSortedPostsData } from "../templates/blog-post"

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


