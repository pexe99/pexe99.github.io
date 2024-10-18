import * as React from "react"
import ReactDOMServer from "react-dom/server"
import Icon from "../Icon/index.jsx"
import styled from "styled-components"

const StyledOgImage = styled.div`
  width: 1200px;
  height: 630px;
  background-color: rgb(212, 212, 212);
  color: rgb(25, 25, 25);
  display: flex;
  align-items: center;
  justify-content: center;
`

const OgImage = icon => {
  const svg = ReactDOMServer.renderToStaticMarkup(
    <StyledOgImage>
      <Icon iconName={icon} size="2rem" />
    </StyledOgImage>
  )
  const dataUrl = `data:image/svg+xml,${encodeURIComponent(svg)}`
  return dataUrl
}

export default OgImage
