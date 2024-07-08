import React from "react"
import styled from "styled-components"

const Title = styled.h1`
  margin-top: 6rem;
  font-weight: 700;
  font-size: 3rem;

  @media (min-width: 43.75rem) {
    font-size: 4rem;
  }
`

const SubTitle = styled.p`
  margin-top: 1.5rem;
  font-weight: 500;
  font-size: 1rem;
  color: #6e6e73;
`

const MainTitle = () => {
  return (
    <>
      <Title>WELCOME, IT’S YOUR OWN BLOG</Title>
      <SubTitle>
        A Gatsby Starter Project for me to start your own develop blog with
        super minimal theme.
      </SubTitle>
    </>
  )
}

export default MainTitle
