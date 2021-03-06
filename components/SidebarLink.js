import React from 'react'

function SidebarLink({ text, Icon, active }) {
  return (
    <div
      className={` hoverAnimation flex items-center justify-center space-x-3 text-xl xl:justify-start ${
        active && 'font-bold'
      } `}
    >
      <Icon className="h-7 text-white" />
      <span className="hidden text-white xl:inline">{text}</span>
    </div>
  )
}

export default SidebarLink
