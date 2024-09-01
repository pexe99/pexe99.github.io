import React from "react"
import styled from "styled-components"
import Icon from "../../Icon"

const TabBarWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 2.5rem;
  box-shadow: ${props => props.theme.tabBar};
  user-select: none;
  -webkit-user-select: none;
`

const TabWrapper = styled.div`
  height: auto;
  display: flex;
  align-items: center;
  border-bottom: ${props =>
    props.$isSelected ? props.theme.tabBarSelected : "none"};
  border-top: ${props => (props.$isSelected ? "0.125rem solid #0000" : "none")};
`

const TabButton = styled.button`
  display: flex;
  align-items: center;
  flex: 0 0 auto;
  white-space: nowrap;
  height: 1.75rem;
  border-radius: 0.25rem;
  font-size: 0.875rem;
  line-height: 1.2;
  padding: 0 0.5rem;
  font-weight: 500;
  gap: 0.375rem;

  color: ${props =>
    props["aria-selected"] ? props.theme.text : props.theme.weekText};

  &:hover {
    background: ${props => props.theme.buttonHover};
  }
  &:active {
    background: ${props => props.theme.buttonActive};
  }
  transition: 20ms ease-in 0s;
`

const TabBar = ({ isGridView, changeToGrid, changeToList, isSeries }) => {
  return (
    <TabBarWrapper role="tablist">
      {isSeries || (
        <TabWrapper $isSelected={isGridView}>
          <TabButton
            role="tab"
            aria-selected={isGridView}
            onClick={changeToGrid}
          >
            <Icon iconName="TbLayoutGrid" size="1rem" />
            <span>Grid view</span>
          </TabButton>
        </TabWrapper>
      )}
      <TabWrapper $isSelected={!isGridView}>
        <TabButton
          role="tab"
          aria-selected={!isGridView}
          onClick={changeToList}
        >
          <Icon iconName="TbList" size="1rem" />
          <span>List view</span>
        </TabButton>
      </TabWrapper>
    </TabBarWrapper>
  )
}

export default TabBar
