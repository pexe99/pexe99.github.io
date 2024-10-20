import React, { useContext } from "react"
import styled from "styled-components"
import { navigate } from "gatsby"
import Icon from "../../Icon"
import { MobileContext } from "../../../contexts/MobileContext"
import { NavContext } from "../../../contexts/NavContext"

const ResultWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  margin-top: 0.5rem;
  margin-bottom: 0.25rem;
`

const BlockWrapper = styled.a`
  display: flex;
  flex: 0 0 auto;
  cursor: pointer;
  border-radius: 0.375rem;
  color: ${props => props.theme.weekIcon};
  background: #00000000;
  overflow: hidden;
  margin: 0 0.25rem;
  padding: 0.5rem 0;
  flex-direction: row;
  svg:last-child {
    color: #00000000;
  }
  &:hover {
    background: ${props => props.theme.buttonHover};
    span:nth-child(1) {
      color: ${props => props.theme.text};
    }
    svg:last-child {
      color: ${props => props.theme.weekIcon};
    }
  }
  &:active {
    background: ${props => props.theme.buttonActive};
  }
  transition: 20ms ease-in 0s;
`

const ResultText = styled.div`
  padding: 0 0.875rem;
  margin: 0.375rem 0;
  font-size: 0.75rem;
  font-weight: 500;
  color: ${props => props.theme.weekText};
`

const ResultIcon = styled(Icon)`
  margin: 0.188rem 0.75rem 0 0.625rem;
  flex: 0 0 auto;
`

const EnterIcon = styled(Icon)`
  margin: 0.065rem 0.75rem 0 0rem;
  flex: 0 0 auto;
`

const TextWrapper = styled.div`
  display: flex;
  min-width: 0;
  flex: 1 1 auto;
  flex-direction: column;
  margin: 0 0.375rem 0 0.25rem;
`

const Title = styled.span`
  font-size: 0.875rem;
  line-height: 1.5;
  font-weight: 500;
  color: ${props => props.theme.searchResultTitle};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1 1 auto;
`

const Date = styled.span`
  font-size: 0.75rem;
  line-height: 1.5;
  color: ${props => props.theme.searchText};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1 1 auto;
`

const NoResult = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 0.875rem;
  padding: 0 0.5rem;
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

const ResultBlock = ({ results, $setSearchModalActive }) => {
  const { isMobile } = useContext(MobileContext)
  const { setIsNavFixed } = useContext(NavContext)

  const handleBlockClicked = to => {
    $setSearchModalActive(false)
    if (isMobile) setIsNavFixed(false)
    navigate(to)
  }

  return (
    <>
      {results.length > 0 ? (
        <ResultWrapper>
          <ResultText>Search Result: {results.length}</ResultText>
          {results.map(result => (
            <BlockWrapper
              key={result.id}
              onClick={() => handleBlockClicked(`${result.fields.slug}`)}
            >
              <ResultIcon iconName={result.frontmatter.icon} size="1.25rem" />
              <TextWrapper>
                <Title>{result.frontmatter.title}</Title>
                <Date>{result.frontmatter.date}</Date>
              </TextWrapper>
              <EnterIcon iconName="TbArrowBack" size="1rem" />
            </BlockWrapper>
          ))}
        </ResultWrapper>
      ) : (
        <NoResult>
          <span>No Results</span>
          <span>There are no pages related to the keyword you entered.</span>
          <button onClick={() => $setSearchModalActive(false)}>
            Close search window
          </button>
        </NoResult>
      )}
    </>
  )
}

export default ResultBlock
