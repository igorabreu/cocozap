import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

import '../components/_settings/base.scss'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={['cocozap', 'saneamento', 'maré']} />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
