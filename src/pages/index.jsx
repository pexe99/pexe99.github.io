import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/seo"
import MainTitle from "../components/MainTitle"
import PostList from "../components/PostList"

const IndexPage = () => (
  <>
    <Layout>
      <MainTitle />
      <PostList />
    </Layout>
  </>
)

export const Head = () => <Seo title="Home" />
export default IndexPage
