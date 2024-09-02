import CustomLayout from "./wrapPageElement"
require("katex/dist/katex.min.css")

export const wrapPageElement = CustomLayout

export const onInitialClientRender = () => {
  window.scrollTo(0, 0)
}
