import * as React from "react"
import MainTitle from "../components/MainTitle"
import Seo from "../components/Seo"
import { metaDescription, siteUrl } from "../../blog-config"

const NotFoundPage = () => (
  <>
    <Seo
      title="404: Not found"
      description={metaDescription}
      url={siteUrl}
      icon="TbMoodPuzzled"
    />
    <MainTitle
      type="main"
      title="404 NOT FOUND"
      description="Unexpectedly, you have reached a page that does not exist."
      icon="TbMoodPuzzled"
    />
  </>
)

export default NotFoundPage
