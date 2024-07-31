import React from "react"
import * as Icons from "react-icons/tb" // 여기에 다른 아이콘 라이브러리를 추가할 수 있습니다.

const Icon = ({ iconName, width, height, ...props }) => {
  const Icon = Icons[iconName] || Icons["TbFileText"]

  return <Icon {...props} />
}

export default Icon
