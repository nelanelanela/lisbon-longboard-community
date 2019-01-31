import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <h1>Hi 👋🏼</h1>
    <p>Welcome to the community of Lisbon Longboarders! We're hosting a meetup every two weeks. If you're from around or passing by Lisboa - join us!</p>
    <div style={{ maxWidth: `500px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>
)

export default IndexPage

