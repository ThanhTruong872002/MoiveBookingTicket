// ExpandableDiv.tsx
import React, { useState } from 'react'
import { CheveronDown } from '../Common/Icons'

interface PropType {
  baseHeight: string
  expandedHeight: string
  children: React.ReactNode
}

const Expandable: React.FC<PropType> = ({ baseHeight, expandedHeight, children }) => {
  const [expanded, setExpanded] = useState(false)

  const toggleExpand = () => {
    setExpanded((prevExpanded) => !prevExpanded)
  }

  const changeheight = {
    height: !expanded ? expandedHeight : baseHeight
  }

  return (
    <div style={changeheight} className={`position-relative overflow-hidden transition-al ease-in duration-300 w-full `}>
      <button
        onClick={toggleExpand}
        className={`mb-2 px-3 py-1 rounded-full position-absolute right-0 top-[25px] transition-rotate duration-300 ${
          expanded ? 'rotate-180' : ''
        }`}
      >
        <CheveronDown />
      </button>
      {children}
    </div>
  )
}

export default Expandable
