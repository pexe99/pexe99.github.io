import { createGlobalStyle, css } from "styled-components"

const BaseTheme = css`
  code[class*="language-"],
  pre[class*="language-"] {
    font-family: "SFMono-Regular", Menlo, Consolas, "PT Mono", "Liberation Mono",
      Courier, monospace !important;
    font-size: 0.85rem;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.5;

    -moz-tab-size: 2;
    -o-tab-size: 2;
    tab-size: 2;

    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;

    * {
      margin: 0;
      padding: 0;
      font-family: "SFMono-Regular", Menlo, Consolas, "PT Mono",
        "Liberation Mono", Courier, monospace !important;
    }
  }

  pre[class*="language-"] {
    padding: 34px 16px 32px 32px;
    border-radius: 0.25rem;
    min-height: 1rem;
    margin: 0;
    overflow: auto;
  }

  :not(pre) > code {
    padding: 0.2rem 0.4rem !important;
    background: ${props => props.theme.mdInlineCodeBackground};
    border-radius: 0.25rem;
    color: ${props => props.theme.red} !important;
    font-size: 85%;
  }

  .token.italic {
    font-style: italic;
  }

  .token.entity {
    cursor: help;
  }
`

const BaseMode = createGlobalStyle`
    ${BaseTheme}
`

export default BaseMode
