import { createGlobalStyle } from "styled-components"
import reset from "styled-reset"
import PretendardVariable_woff2 from "../../assets/font/PretendardVariable.woff2"
import PretendardVariable_ttf from "../../assets/font/PretendardVariable.ttf"

const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'Pretendard Variable';
        src:url(${PretendardVariable_woff2}) format('woff2'),
            url(${PretendardVariable_ttf}) format('truetype');
        font-weight: 100 900;
        font-style: normal;
        font-display: swap;
    }

    ${reset}

    * {
        font-family: 'Pretendard Variable' !important;
        box-sizing: border-box;
        text-decoration: none;
        -webkit-text-size-adjust: 100%;
        -webkit-tap-highlight-color: transparent;
        ::selection {
            background: #2383e247;
        }

        scrollbar-color: #D3D1C8  rgba(0, 0, 0, 0);
        ::-webkit-scrollbar {
            background: transparent;
            width: 12px;
            height: 12px;
        }
        ::-webkit-scrollbar-button {
            display: none;
        }
        ::-webkit-scrollbar-thumb {
            background: #D3D1C8;
            cursor: pointer;
        }
    }

    button {
        border: none;
        background: none;
        box-sizing: border-box;
        cursor: pointer;
        -webkit-appearance: none; /* iOS 기본 버튼 스타일 제거 */
        -moz-appearance: none; /* Firefox 기본 버튼 스타일 제거 */
        appearance: none; /* 기본 버튼 스타일 제거 */
    }
`

export default GlobalStyles
