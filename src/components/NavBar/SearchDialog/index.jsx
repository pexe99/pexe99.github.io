import React, { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import Icon from "../../Icon"
import { graphql, useStaticQuery } from "gatsby"
import ResultBlock from "./ResultBlock"

const Dimmer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100dvh;
  z-index: 400;
  overflow: hidden;
  background: rgba(15, 15, 15, 0.8);
`

const DialogWrapper = styled.div`
  position: fixed;
  top: 5.5rem;
  left: 50%;
  display: flex;
  flex-direction: column;
  transform: translate(-50%, 0);
  background: ${props => props.theme.searchBackground};
  border-radius: 0.75rem;
  overflow: hidden;
  min-height: max(50vh, 0px);
  max-height: max(50vh, 0px);
  width: 100%;
  max-width: 755px;
  z-index: 500;
  user-select: none;
  -webkit-user-select: none;
`

const SearchBarWrapper = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  padding: 0 1rem 0 1rem;
  width: 100%;
  background: transparent;
  height: 3rem;
  box-shadow: ${props => props.theme.searchDivider};
  color: ${props => props.theme.searchIcon};
  & > * {
    flex: 0 0 auto;
  }
`

const EraseButton = styled.button`
  color: ${props => props.theme.searchIcon};
  padding: 0;
  margin: 0 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  &:hover {
    background: ${props => props.theme.searchIconHover};
  }
`

const SearchInput = styled.input`
  width: 100%;
  flex: 1 1 auto;
  margin-left: 0.5rem;
  font-size: 1.125rem;
  color: ${props => props.theme.text};
`

const CloseButton = styled.button`
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.25rem;
  padding: 0.25rem;
  margin-left: 0.25rem;
  color: ${props => props.theme.searchIcon};
  &:hover {
    background: ${props => props.theme.buttonHover};
  }
  &:active {
    background: ${props => props.theme.buttonActive};
  }
  transition: 20ms ease-in 0s;
`

const SearchDialog = ({ $setSearchModalActive }) => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        nodes {
          id
          frontmatter {
            title
            icon
            date(formatString: "MMMM DD, YYYY")
          }
          fields {
            slug
          }
          rawMarkdownBody
        }
      }
    }
  `)

  const allPosts = data.allMarkdownRemark.nodes
  const inputRef = useRef()
  const [inputText, setInputText] = useState("")
  const [results, setResults] = useState([])

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  const handleChange = e => {
    const query = e.target.value
    setInputText(query)

    if (query.length > 0) {
      const filteredResults = allPosts.filter(
        post =>
          post.frontmatter.title.toLowerCase().includes(query.toLowerCase()) ||
          post.rawMarkdownBody.toLowerCase().includes(query.toLowerCase())
      )
      setResults(filteredResults)
    } else {
      setResults([])
    }
  }

  const handleErase = () => {
    setInputText("")
  }

  return (
    <>
      <Dimmer onClick={() => $setSearchModalActive(false)} />
      <DialogWrapper>
        <SearchBarWrapper>
          <Icon iconName="TbSearch" size="1.25rem" />
          <SearchInput
            placeholder="Search on the blog"
            value={inputText}
            onChange={handleChange}
            ref={inputRef}
          />
          <EraseButton onClick={handleErase}>
            <Icon iconName="TbXboxXFilled" size="1rem" />
          </EraseButton>
          <CloseButton onClick={() => $setSearchModalActive(false)}>
            <Icon iconName="TbArrowDownToArc" size="1rem" />
          </CloseButton>
        </SearchBarWrapper>

        <ResultBlock
          results={results}
          $setSearchModalActive={$setSearchModalActive}
        />
      </DialogWrapper>
    </>
  )
}
export default SearchDialog
