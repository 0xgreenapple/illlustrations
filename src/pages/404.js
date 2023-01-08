import React from "react"
import Layout from "../components/layout"
import Nav from "../components/nav"

export default function notFound() {
    return (
      <Layout>
        <Nav />
        <section className="license_section">
          <div className="container">
            <h1>Wrong place please check back</h1>
          </div>
        </section>
      </Layout>
    )
}

