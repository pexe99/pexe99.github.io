import { createGlobalStyle } from "styled-components"
import reset from "styled-reset"

const GlobalStyles = createGlobalStyle`
    ${reset}

    @font-face {
        font-family: 'Pretendard Variable';
        src: url('/PretendardVariable.woff2') format('woff2'),
         url('/PretendardVariable.ttf') format('truetype');
        font-weight: 100 900;
        font-style: normal;
        font-display: swap;
    }

    * {
    font-family: 'Pretendard Variable', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol' !important;
        box-sizing: border-box;
        text-decoration: none;
        -webkit-text-size-adjust: 100%;
        -webkit-tap-highlight-color: transparent;

        ::selection {
            background: #2383e247;
        }

        scrollbar-color: ${props => props.theme.scrollBarColor};
        ::-webkit-scrollbar {
            background: transparent;
            width: 12px;
            height: 12px;
        }
        ::-webkit-scrollbar-button {
            display: none;
        }
        ::-webkit-scrollbar-thumb {
            background: ${props => props.theme.scrollBarThumb};
            cursor: pointer;
        }
    }

    button {
        border: none;
        background: none;
        box-sizing: border-box;
        cursor: pointer;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
    }
`

export default GlobalStyles
