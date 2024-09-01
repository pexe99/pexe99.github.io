import React from "react"
import styled from "styled-components"
import { navigate } from "gatsby"

const NoResult = styled.div`
  margin: 3rem 0;
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 0.875rem;
  line-height: 1.5;
  text-align: center;
  span:nth-child(1) {
    font-weight: 500;
    color: ${props => props.theme.weekText};
  }
  span:nth-child(2) {
    color: ${props => props.theme.searchText};
  }
  button {
    line-height: 1.5;
    font-size: 0.875rem;
    color: ${props => props.theme.blue};
  }
`

const NoData = ({ main, series }) => {
  return (
    <NoResult>
      <span>
        {main && "No Posts"}
        {series && "No Series"}
      </span>
      <span>
        {main && "There are no posts in this blog."}
        {series && "There are no series in this blog."}
      </span>
      <button onClick={() => navigate("/")}>Go to main page</button>
    </NoResult>
  )
}

export default NoData
