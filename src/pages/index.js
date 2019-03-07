import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <h1>Hi 👋🏼</h1>
    <p>Welcome to the community of Lisbon Longboarders! We're hosting a meetup every two weeks. If you're from around or passing by Lisboa - join us!</p>
    <h2>Next events:</h2>
    <p></p>
    <a href="https://www.facebook.com/events/1213175732189890/">9.03.2019  Alcantara-Mar  12:00</a>
    <h2> </h2>
    <h2> </h2>
    <h2>See you there!</h2>
    <div style={{ maxWidth: `800px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>
)

export default IndexPage

