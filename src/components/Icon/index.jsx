import React from "react"
import SearchIcon from "./svgs/SearchIcon"
import SeriesIcon from "./svgs/SeriesIcon"
import TagsIcon from "./svgs/TagsIcon"
import LightModeIcon from "./svgs/LightModeIcon"
import GithubIcon from "./svgs/GithubIcon"
import InstagramIcon from "./svgs/InstagramIcon"
import LinkedinIcon from "./svgs/LinkedinIcon"
import YoutubeIcon from "./svgs/YoutubeIcon"
import FacebookIcon from "./svgs/FacebookIcon"
import EmailIcon from "./svgs/EmailIcon"
import ThreadsIcon from "./svgs/ThreadsIcon"
import ExternalIcon from "./svgs/ExternalIcon"

const SVG_ICONS = {
  search: SearchIcon,
  tags: TagsIcon,
  series: SeriesIcon,
  lightMode: LightModeIcon,
  github: GithubIcon,
  instagram: InstagramIcon,
  linkedin: LinkedinIcon,
  youtube: YoutubeIcon,
  facebook: FacebookIcon,
  email: EmailIcon,
  threads: ThreadsIcon,
  external: ExternalIcon,
}

Object.freeze(SVG_ICONS)

const Icon = ({ type, color, ...props }) => {
  const SvgIcon = SVG_ICONS[type]
  return <SvgIcon {...props} style={{ fill: color }} />
}

export default Icon
