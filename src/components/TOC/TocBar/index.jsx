import React, { useEffect, useState } from "react"
import styled from "styled-components"
import TocDetail from "./TocDetail"
import TocMin from "./TocMin"

const TocWrapper = styled.div`
  display: flex;
  position: absolute;
  margin: 17.25rem 1rem 4.5rem 0;
  max-height: calc(100vh - 17.25rem - 4.5rem);
  height: auto;
  top: 0;
  right: 0;
  z-index: 100;
  @media (max-width: 53.25rem) {
    display: none;
  }
`

const TocBar = ({ tocData, handleClickLink }) => {
  const [activeId, setActiveId] = useState("")
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      {
        rootMargin: "0px 0px -80% 0px",
        threshold: 0.1,
      }
    )

    tocData.forEach(item => {
      const element = document.getElementById(item.id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => {
      tocData.forEach(item => {
        const element = document.getElementById(item.id)
        if (element) {
          observer.unobserve(element)
        }
      })
    }
  }, [tocData])

  return (
    <>
      <TocWrapper
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <TocDetail
          tocData={tocData}
          handleClickLink={handleClickLink}
          activeId={activeId}
          $isHovered={isHovered}
        />
        {isHovered || <TocMin tocData={tocData} activeId={activeId} />}
      </TocWrapper>
    </>
  )
}

export default TocBar
