import React, { useState, useEffect, useRef } from "react"
import styled from "styled-components"
import TabBar from "./TabBar"
import CardBlock from "./CardBlock"
import ListBlock from "./ListBlock"
import NoData from "./NoData"

const Title = styled.h2`
  flex: 0 1 auto;
  margin-top: 4rem;
  margin-bottom: 0.25rem;
  padding: 0.25rem 0.125rem;
  font-weight: 600;
  font-size: 1.875rem;
  color: ${props => props.theme.text};
  line-height: 1.3;
`

const GridWrapper = styled.div`
  margin-top: 1rem;
  margin-bottom: 0.25rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(16.25rem, 1fr));
  gap: 1rem;
`

const ListWrapper = styled.div`
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
  display: flex;
  flex-direction: column;
`

const Database = ({
  data,
  main = false,
  series = false,
  tags = false,
  seriesPost = false,
}) => {
  const [isGridView, setIsGridView] = useState(!series)
  const [visibleBlock, setVisibleBlock] = useState(10)
  const [dataProps, setDataProps] = useState([])
  const observerRef = useRef(null)

  useEffect(() => {
    const handleIntersection = entries => {
      if (entries[0].isIntersecting) {
        setVisibleBlock(prevCount => Math.min(prevCount + 10, data.length))
      }
    }

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "0px",
      threshold: 1,
    })
    const currentObserver = observerRef.current

    if (currentObserver) observer.observe(currentObserver)
    return () => {
      if (currentObserver) observer.unobserve(currentObserver)
    }
  }, [data.length])

  useEffect(() => {
    const updatedBlockProps = data.slice(0, visibleBlock).map(item => {
      if (series)
        return {
          key: item.fieldValue,
          to: `/series/${item.fieldValue}/`,
          icon: "TbFolderOpen",
          title: item.fieldValue,
          post: item.totalCount,
        }
      else
        return {
          key: item.node.id,
          to: item.node.fields.slug,
          title: item.node.frontmatter.title,
          date: new Date(item.node.frontmatter.date).toLocaleDateString(),
          icon: item.node.frontmatter.icon,
          tags: item.node.frontmatter.tags,
          detail: item.node.excerpt,
        }
    })
    setDataProps(updatedBlockProps)
  }, [visibleBlock, data, series])

  return (
    <>
      <Title>
        {main && "All Posts"}
        {series && "All Series"}
      </Title>
      <TabBar
        isGridView={isGridView}
        isSeries={series}
        changeToGrid={() => setIsGridView(true)}
        changeToList={() => setIsGridView(false)}
      />
      {!data.length && <NoData main={main} series={series} />}
      {isGridView ? (
        <GridWrapper>
          {dataProps.map(props => (
            <CardBlock {...props} />
          ))}
        </GridWrapper>
      ) : (
        <ListWrapper>
          {dataProps.map(props => (
            <ListBlock {...props} />
          ))}
        </ListWrapper>
      )}
      {visibleBlock < data.length && (
        <div
          ref={observerRef}
          style={{ height: "1rem", marginBottom: "10rem" }}
        />
      )}
    </>
  )
}

export default Database
