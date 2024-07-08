import { createGlobalStyle } from "styled-components"
import reset from "styled-reset"
import PretendardVariable_woff2 from "../../assets/font/PretendardVariable.woff2"
import PretendardVariable_ttf from "../../assets/font/PretendardVariable.ttf"

const GlobalStyles = createGlobalStyle`
    ${reset}

    @font-face {
        font-family: 'Pretendard Variable';
        src:url(${PretendardVariable_woff2}) format('woff2'),
            url(${PretendardVariable_ttf}) format('truetype');
        font-weight: 100 900;
        font-style: normal;
        font-display: swap;
    }

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        font-family: 'Pretendard Variable', sans-serif;
        box-sizing: border-box;
    }

    h1 {
        line-height: 1.2;
    }

    p {
        line-height: 1.5;
    }

    body {
        background-color: #f5f5f7;
    }

    button {
        border: none;
        background: none;
    }
`

export default GlobalStyles
