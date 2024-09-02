import React from "react"
import styled from "styled-components"
import Icon from "../Icon/index.jsx"
import Property from "./Property/index.jsx"

const MainIcon = styled(Icon)`
  margin-top: 5.75rem;
  padding: 0.25rem;
  color: ${props => props.theme.icon};
`

const Title = styled.h1`
  margin-top: 2.625rem;
  margin-bottom: 0.5rem;
  font-weight: 700;
  font-size: 2.5rem;
  line-height: 1.2;
  padding: 0 0.125rem;
  color: ${props => props.theme.text};
  white-space: pre-wrap;
  word-break: break-word;
`

const Callout = styled.div`
  width: 100%;
  padding: 1rem 1rem 1rem 0.75rem;
  margin: 0.25rem 0;
  border-radius: 0.25rem;
  border: ${props => props.theme.calloutBorder};
  color: ${props => props.theme.icon};
  background-color: transparent;
  display: flex;
  flex-direction: row;
  white-space: pre-wrap;
  word-break: break-word;
  flex-shrink: 0;
  flex-grow: 0;
`

const CalloutTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 0px;
  width: 100%;
  padding: 0 0.125rem;
  margin-left: 0.5rem;
  color: ${props => props.theme.text};
  line-height: 1.5;
  text-align: left;
`

const MainTitle = ({ type, title, description, icon, date, tags, series }) => {
  return (
    <>
      <MainIcon iconName={icon} size="4.875rem" />
      <Title>{title}</Title>
      {type === "main" && (
        <Callout>
          <Icon iconName="TbCode" size="1.5rem" />
          <CalloutTextWrapper>{description}</CalloutTextWrapper>
        </Callout>
      )}
      {type === "post" && <Property date={date} tags={tags} series={series} />}
    </>
  )
}

export default MainTitle
