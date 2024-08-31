import React from "react"
import styled from "styled-components"

const TocMinWrapper = styled.div`
  width: 3.5rem;
  flex-grow: 1;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: baseline;
  overflow: hidden;
  padding-bottom: 0.75rem;
  padding-right: 0.5rem;
`

const TocInnerWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 0 0 auto;
  gap: 0.75rem;
  padding-left: 1.25rem;
  padding-bottom: 0.75rem;
  .toc-1 {
    width: 1rem;
  }
  .toc-2 {
    width: 0.75rem;
    margin-left: 0.25rem;
  }
  .toc-3 {
    width: 0.5rem;
    margin-left: 0.5rem;
  }
`

const TocMinBar = styled.div`
  flex: 0 0 auto;
  height: 0.125rem;
  border-radius: 0.125rem;
  transition: background 0.2s, box-shadow 0.2s;
  background: ${props =>
    props.$isActive ? props.theme.text : "rgb(90, 90, 90)"};
  box-shadow: ${props => props.$isActive && "rgb(211, 211, 211) 0px 0px 3px"};
`

const TocMin = ({ tocData, activeId }) => {
  return (
    <TocMinWrapper>
      <TocInnerWrapper>
        {tocData.map((item, index) => (
          <TocMinBar
            key={index}
            className={`toc-${item.level}`}
            $isActive={item.id === activeId}
          />
        ))}
      </TocInnerWrapper>
    </TocMinWrapper>
  )
}

export default TocMin
