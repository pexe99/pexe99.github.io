import React from "react"
import styled from "styled-components"

export const MarkdownStyler = styled.section`
  /* General styling for all elements inside the MarkdownStyler */
  * {
    padding: 0.188rem 0.125rem;
    margin: 0.125rem 0 0.0625rem 0;
    line-height: 1.5;
    color: ${props => props.theme.text};
  }

  /* Strong (bold) text styling */
  strong {
    font-weight: 600 !important;
  }

  /* Blockquote styling */
  blockquote {
    width: 100%;
    height: fit-content;
    margin: 0.25rem 0;
    padding: 0 1rem;
    overflow: hidden;
    border-left: 3px solid black;
    * {
      padding: 0 0.125rem;
    }
    blockquote {
      padding: 0 1rem;
      margin: 0.188rem 0;
    }
  }

  /* Paragraph styling */
  p {
    margin-top: 0.0625rem;
    font-size: 1rem;
  }

  /* Inline code block styling */
  * > code {
    padding: 0.2rem 0.4rem;
    background: rgba(135, 131, 120, 0.15);
    border-radius: 0.25rem;
    color: #eb5757;
    font-size: 85%;
    font-family: "SFMono-Regular", Menlo, Consolas, "PT Mono", "Liberation Mono",
      Courier, monospace;
  }

  /* Anchor (link) styling */
  a {
    margin-bottom: 0.125rem;
    padding-bottom: 0;
    border-bottom: 0.05rem solid rgba(55, 53, 47, 0.4);
    opacity: 0.7;
  }

  /* Emphasized (italic) text styling */
  em {
    font-style: italic !important;
  }

  /* Deleted (strikethrough) text styling */
  del {
    text-decoration: line-through;
  }

  /* Horizontal rule (divider) styling */
  hr {
    width: 100%;
    margin: 0.438rem 0;
    height: 0.0625rem;
    padding: 0;
    border: none;
    border-bottom: 1px solid rgba(55, 53, 47, 0.16);
  }

  /* Headings (h1 - h6) styling */
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    white-space: pre-wrap;
    word-break: break-word;
    font-weight: 600;
    line-height: 1.3;
  }

  /* Specific heading level styling */
  h1 {
    margin-top: 2rem;
    margin-bottom: 0.25rem;
    font-size: 1.875rem;
  }

  h2 {
    margin-top: 1.375rem;
    margin-bottom: 0.063rem;
    font-size: 1.5rem;
  }

  h3,
  h4,
  h5,
  h6 {
    margin-top: 1rem;
    margin-bottom: 0.063rem;
    font-size: 1.25rem;
  }

  /* Unordered list (ul) styling */
  ul {
    width: 100%;
    list-style: disc;
    margin: 0;
    padding: 0;
    padding-left: 1.625rem;

    /* Nested unordered lists with different list styles */
    ::marker {
      font-size: 18px;
    }
    ul {
      list-style: circle;
      ul {
        list-style: square;
        ul {
          list-style: disc;
          ul {
            list-style: circle;
            ul {
              list-style: square;
            }
          }
        }
      }
    }
  }

  /* List item (li) styling */
  li {
    padding: 0.188rem 0.125rem;
    display: list-item;
    height: fit-content;
    list-style-position: outside;
  }

  /* Ordered list (ol) styling */
  ol {
    margin: 0;
    padding: 0;
    padding-left: 1.625rem;
    list-style: decimal;
    height: fit-content;
    ::marker {
      font-size: inherit;
    }
  }

  /* Task list (checklist) specific styling */
  .contains-task-list,
  .task-list-item {
    list-style: none;
    padding-left: 0;
  }

  /* Checkbox styling */
  ul > li input[type="checkbox"] {
    appearance: none;
    -webkit-appearance: none;
    width: 1rem;
    height: 1rem;
    background-color: #fff;
    border-radius: 0;
    border: 0.125rem solid black;
    position: relative;
    margin: 0 0.25rem 0.188rem 0.375rem;
    vertical-align: middle;
  }

  /* Checked checkbox styling */
  .task-list-item input[type="checkbox"]:checked {
    background-color: rgb(35, 131, 226);
    border: 0.125rem solid rgb(35, 131, 226);
  }

  /* Checked checkbox tick mark */
  .task-list-item input[type="checkbox"]:checked::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0.2rem;
    width: 0.313rem;
    height: 0.563rem;
    border: solid white;
    border-width: 0 0.125rem 0.125rem 0;
    transform: rotate(45deg);
  }

  /* Strikethrough text when checkbox is checked */
  .task-list-item input[type="checkbox"]:checked ~ * {
    text-decoration: line-through;
  }

  /* Additional styling for checked task list items */
  .task-list-item:has(input[type="checkbox"]:checked) {
    text-decoration: line-through rgba(55, 53, 47, 0.25);
    color: rgba(55, 53, 47, 0.65);

    & > * {
      text-decoration: none;
    }
  }

  /* Table styling */
  table {
    width: 100vw;
    max-width: 100%;
    border-collapse: collapse;
    font-size: 0.875rem;
    text-align: left;
    margin: 0.5rem 0 1.125rem 0;
    display: block;
    overflow-x: auto;
  }

  /* Table elements (tr, th, td, thead, tbody) reset */
  tr,
  th,
  td,
  thead,
  tbody {
    margin: 0;
    padding: 0;
  }

  /* Table header (th) and data cell (td) styling */
  th,
  td {
    padding: 0.438rem 0.563rem;
    border: 1px solid rgb(233, 233, 231);
    min-width: 7.5rem;
    word-wrap: break-word;
    word-break: break-all;
  }

  /* Table header (th) specific styling */
  th {
    background: rgb(247, 246, 243);
    font-weight: 600;
  }

  /* Image styling */
  img {
    padding: 0;
    margin: 0.25rem auto;
    border-radius: 0.125rem;
    max-width: 100%;
  }

  .gatsby-resp-image-wrapper {
    margin: 0 !important;
  }

  .gatsby-resp-image-link {
    margin-bottom: none;
    border: none;
    opacity: 1;
  }

  .gatsby-resp-image-figcaption {
    white-space: pre-wrap;
    word-break: break-word;
    font-size: 0.875rem;
    color: rgba(55, 53, 47, 0.65);
    margin: 0 !important;
    padding: 0.375rem 0 0.375rem 0.125rem;
  }

  .autolinkHeader {
    opacity: 0;
  }
`
