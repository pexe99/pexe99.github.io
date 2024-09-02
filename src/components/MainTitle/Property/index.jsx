import React from "react"
import styled from "styled-components"
import Icon from "../../Icon"
import { author } from "../../../../blog-config"
import { navigate } from "gatsby"

const PropertyConatainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding-bottom: 0.75rem;
  border-bottom: ${props => props.theme.divider};
`

const PropertyWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 2.125rem;
  margin-bottom: 0.25rem;
`

const PropertyTitle = styled.div`
  width: 10rem;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.375rem;
  padding: 0 0.375rem;
  color: ${props => props.theme.weekText};
  font-size: 0.875em;
  font-weight: 500;
  & > svg {
    color: ${props => props.theme.weekIcon};
  }
`

const PropertyValue = styled.div`
  flex: 1 1 auto;
  height: 100%;
  padding: 0.375rem 0.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 0.875em;
  color: ${props => props.theme.text};
  gap: 0.375rem;
  overflow-x: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &:-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`

const PropertyLink = styled.a`
  flex: 1 1 auto;
  height: 100%;
  padding: 0.375rem 0.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 0.875em;
  color: ${props => props.theme.weekText};
  text-decoration: ${props => (props.$isActive ? "underline" : "none")};
  cursor: ${props => (props.$isActive ? "pointer" : "default")};
`

const Tag = styled.button`
  height: 100%;
  display: flex;
  align-items: center;
  color: ${props => props.theme.text};
  background: ${props => props.theme.tag};
  padding: 0 0.375rem;
  border-radius: 0.25rem;
  &:hover {
    background: ${props => props.theme.buttonHover};
  }
  &:active {
    background: ${props => props.theme.buttonActive};
  }
  transition: 20ms ease-in 0s;
`

const Property = ({ date, tags, series }) => {
  return (
    <PropertyConatainer>
      <PropertyWrapper>
        <PropertyTitle>
          <Icon iconName="TbUserEdit" size="1rem" /> <span>Author</span>
        </PropertyTitle>
        <PropertyValue>@{author}</PropertyValue>
      </PropertyWrapper>

      <PropertyWrapper>
        <PropertyTitle>
          <Icon iconName="TbCalendarMonth" size="1rem" /> <span>Date</span>
        </PropertyTitle>
        <PropertyValue>{date}</PropertyValue>
      </PropertyWrapper>

      <PropertyWrapper>
        <PropertyTitle>
          <Icon iconName="TbLayoutList" size="1rem" /> <span>Series</span>
        </PropertyTitle>
        <PropertyLink
          $isActive={series}
          onClick={() => navigate(`/series/${series}/`)}
        >
          {series || "-"}
        </PropertyLink>
      </PropertyWrapper>

      <PropertyWrapper>
        <PropertyTitle>
          <Icon iconName="TbHash" size="1rem" /> <span>Tags</span>
        </PropertyTitle>
        <PropertyValue>
          {tags
            ? tags.map(tag => (
                <Tag key={tag} onClick={() => navigate(`/tags/${tag}/`)}>
                  {tag}
                </Tag>
              ))
            : "-"}
        </PropertyValue>
      </PropertyWrapper>
    </PropertyConatainer>
  )
}

export default Property
