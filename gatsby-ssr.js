import CustomLayout from "./wrapPageElement"

export const wrapPageElement = CustomLayout

export const onRenderBody = ({ setHtmlAttributes }) => {
  setHtmlAttributes({ lang: "ko" })
}
