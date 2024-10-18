import React from "react"
import * as Icons from "react-icons/tb"

const Icon = ({ iconName, width, height, ...props }) => {
  const Icon = Icons[iconName] || Icons["TbFileText"]

  return <Icon {...props} />
}

export default Icon
