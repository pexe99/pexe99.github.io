// themes.js

export const lightTheme = {
  background: "rgb(256, 256, 256)",
  layoutBackground: "rgb(247, 247, 245)",
  tag: "rgb(227, 226, 224)",
  red: "rgb(235, 87, 87)",
  blue: "rgb(35, 131, 226)",
  placeholderColor: "rgb(179, 179, 176)",
  divider: "0.0625rem solid #37352f17",
  dimmer: "rgba(15, 15, 15, 0.6)",

  // card
  cardBackground: "rgb(256, 256, 256)",
  cardHover: "rgba(55, 53, 47, 0.04)",
  cardActive: "rgba(55, 53, 47, 0.04)",
  cardShadow:
    "rgba(15,15,15,0.1) 0 0 0 0.0625rem, rgba(15,15,15,0.1) 0 0.125rem 0.25rem",

  // icon
  weekIcon: "rgb(145, 145, 142)",
  icon: "#55534e",

  // text
  weekText: "rgba(55, 53, 47, 0.65)",
  text: "rgb(55, 53, 47)",

  // button
  buttonHover: "rgba(55, 53, 47, 0.06)",
  buttonActive: "rgba(55, 53, 47, 0.16)",

  // tab
  tabBar: "rgb(233, 233, 231) 0 -0.0625rem 0 inset",
  tabBarSelected: "0.125rem solid rgb(55, 53, 47)",

  // callout
  calloutBorder: "0.0625rem solid rgba(55, 53, 47, 0.16)",

  // navigation
  navBackground: "rgb(256, 256, 256)",
  navButtonText: "rgb(95, 94, 91)",
  navButtonHover: "rgba(0, 0, 0, 0.03)",
  navTagIcon: "rgb(168, 167, 163)",
  navTagDivider: "rgba(55, 53, 47, 0.09) 0 0.0625rem 0",
  navBoxShadow:
    "rgba(0, 0, 0, 0.024) -0.0625rem 0rem 0rem 0rem inset, rgba(15, 15, 15, 0.05) 0 0 0 0.0625rem, rgba(15, 15, 15, 0.1) 0 0.188rem 0.375rem, rgba(15, 15, 15, 0.2) 0 0.375rem 1.5rem",
  navFixedBoxShadow: "rgba(0, 0, 0, 0.024) -0.0625rem 0rem 0rem 0rem inset",

  // scrollBar
  scrollBarColor: "#D3D1C8 rgba(0, 0, 0, 0)",
  scrollBarThumb: "#D3D1C8",

  // searchDialog
  searchBackground: "rgb(255, 255, 255)",
  searchIcon: "rgb(172, 171, 169)",
  searchIconHover: "rgba(55, 53, 47, 0.06)",
  searchDivider: "rgba(55, 53, 47, 0.09) 0 0.0625rem 0",
  searchText: "rgba(55, 53, 47, 0.5)",

  // toc
  tocLinkText: "rgb(120, 119, 116)",
  tocLinkBottom:
    "linear-gradient(to right, rgba(55, 53, 47, 0.16) 0%, rgba(55, 53, 47, 0.16) 100%)",

  // toc bar
  tocBarShadow:
    "rgba(15, 15, 15, 0.04) 0 0 0 0.0625rem, rgba(15, 15, 15, 0.03) 0 0.188rem 0.375rem, rgba(15, 15, 15, 0.06) 0 0.563rem 1.5rem",
  tocBarBorder: "0.0625rem solid rgba(55, 53, 47, 0.06)",
  tocTextWeek: "rgb(120, 119, 116)",
  tocMinBarBackground: "rgb(227, 226, 224)",
  tocMinShadow: "none",

  // markdown
  mdAnchorBorder: "0.05rem solid rgba(55, 53, 47, 0.4)",
  mdInlineCodeBackground: "rgba(135, 131, 120, 0.15)",
  mdHrBorder: "0.0625rem solid rgba(55, 53, 47, 0.16)",
  mdCheckboxTextline: "rgba(55, 53, 47, 0.25)",
  mdTableBorder: "rgb(233, 233, 231)",
  mdTableThBackground: "rgb(247, 246, 243)",

  // toast
  toastBackground: "rgb(15, 15, 15)",
  toastText: "rgb(255, 255, 255)",
}

export const darkTheme = {
  background: "rgb(25, 25, 25)",
  layoutBackground: "rgb(32, 32, 32)",
  tag: "rgb(90, 90, 90)",
  red: "rgb(235, 87, 87)",
  blue: "rgb(35, 131, 226)",
  placeholderColor: "rgb(100, 100, 100)",
  divider: "0.0625rem solid hsla(0,0%, 100%, 0.094)",
  dimmer: "rgba(15, 15, 15, 0.8)",

  // card
  cardBackground: "rgba(255, 255, 255, 0.055)",
  cardHover: "rgb(47, 47, 47)",
  cardActive: "rgb(37, 37, 37)",
  cardShadow:
    "rgba(15, 15, 15, 0.1) 0 0 0 0.0625rem, rgba(15, 15, 15, 0.1) 0 0.125rem 0.25rem",

  // icon
  weekIcon: "rgb(155, 155, 155)",
  icon: "rgb(211, 211, 211)",

  // text
  weekText: "rgba(255, 255, 255, 0.443)",
  text: "rgb(212, 212, 212)",

  // button
  buttonHover: "rgba(255, 255, 255, 0.055)",
  buttonActive: "rgba(255, 255, 255, 0.03)",

  // tab
  tabBar: "rgb(47, 47, 47) 0 -0.0625rem 0 inset",
  tabBarSelected: "0.125rem solid rgba(255, 255, 255, 0.81)",

  // callout
  calloutBorder: "0.0625rem solid rgba(255, 255, 255, 0.13)",

  // navigation
  navBackground: "rgb(37, 37, 37)",
  navButtonText: "rgb(155, 155, 155)",
  navButtonHover: "rgba(255, 255, 255, 0.055)",
  navTagIcon: "rgb(112, 112, 112)",
  navTagDivider: "rgba(255, 255, 255, 0.094) 0 0.0625rem 0",
  navBoxShadow:
    "rgba(255, 255, 255, 0.05) -0.0625rem 0rem 0rem 0rem inset, rgba(15, 15, 15, 0.1) 0 0 0 0.0625rem, rgba(15, 15, 15, 0.2) 0 0.188rem 0.375rem, rgba(15, 15, 15, 0.4) 0 0.375rem 1.5rem",
  navFixedBoxShadow:
    "rgba(255, 255, 255, 0.05) -0.0625rem 0rem 0rem 0rem inset",

  // scrollBar
  scrollBarColor: "rgba(255, 255, 255, 0.2)  rgba(0, 0, 0, 0)",
  scrollBarThumb: "rgba(255, 255, 255, 0.2)",

  // searchDialog
  searchBackground: "rgb(32, 32, 32)",
  searchIcon: "rgba(255, 255, 255, 0.282)",
  searchIconHover: "rgba(255, 255, 255, 0.055)",
  searchDivider: "rgba(255, 255, 255, 0.094) 0 0.0625rem 0",
  searchText: "rgba(255, 255, 255, 0.282)",

  // toc
  tocLinkText: "rgb(155, 155, 155)",
  tocLinkBottom:
    "linear-gradient(to right, rgba(255, 255, 255, 0.13) 0%, rgba(255, 255, 255, 0.13) 100%)",

  // toc bar
  tocBarShadow:
    "rgba(15, 15, 15, 0.05) 0 0 0 0.0625rem, rgba(15, 15, 15, 0.1) 0 0.188rem 0.375rem, rgba(15, 15, 15, 0.2) 0 0.563rem 1.5rem",
  tocBarBorder: "0.0625rem solid rgba(255, 255, 255, 0.055)",
  tocTextWeek: "rgb(127, 127, 127)",
  tocMinBarBackground: "rgb(90, 90, 90)",
  tocMinShadow: "rgb(211, 211, 211) 0rem 0rem 0.188rem",

  // markdown
  mdAnchorBorder: "0.05rem solid rgba(255, 255, 255, 0.283)",
  mdInlineCodeBackground: "rgba(135, 131, 120, 0.15)",
  mdHrBorder: "0.0625rem solid rgba(255, 255, 255, 0.13)",
  mdCheckboxTextline: "rgb(127, 127, 127)",
  mdTableBorder: "rgb(47, 47, 47)",
  mdTableThBackground: "rgba(255, 255, 255, 0.03)",

  // toast
  toastBackground: "rgb(47, 47, 47)",
  toastText: "rgb(255, 255, 255)",
}
