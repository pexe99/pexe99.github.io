import React from "react"
import MainTitle from "../components/MainTitle"
import { description } from "../../blog-config.js"

const SeriesPage = () => {
  return (
    <>
      <MainTitle
        type="main"
        title="Series"
        description={description}
        icon="TbLayoutList"
      />
    </>
  )
}

export default SeriesPage
