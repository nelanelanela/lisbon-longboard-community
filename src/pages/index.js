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
    <a href="https://www.facebook.com/events/374330423379728/">2.02.2019  Alcantara-Mar  15:00</a>
    <p></p>
    <a href="https://www.facebook.com/events/402676977173670/">16.02.2019  Alcantara-Mar  15:00</a>
    <h2> </h2>
    <h2> </h2>
    <h2>See you there!</h2>
    <div style={{ maxWidth: `500px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>
)

export default IndexPage

