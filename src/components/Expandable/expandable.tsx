// ExpandableDiv.tsx
import React, { useState } from 'react'

interface PropType {
  baseHeight: string
  expandedHeight: string,
  children: React.ReactNode
}

const Expandable: React.FC<PropType> = ({ baseHeight, expandedHeight, children }) => {
  const [expanded, setExpanded] = useState(false)

  const toggleExpand = () => {
    setExpanded((prevExpanded) => !prevExpanded)
  }

  return (
    <div
      className={`position-relative overflow-hidden transition-al ease-in duration-300 ${
        expanded ? `h-[${expandedHeight}] py-2` : `h-[${baseHeight}]`
      }`}
    >
      <button
        onClick={toggleExpand}
        className={`mb-2 px-3 py-1 bg-blue-500 text-white rounded-full position-absolute right-0 top-[30px] transition-rotate duration-300 ${expanded ? 'rotate-180' : ''}`}
      >
        v
      </button>
      {children}
    </div>
  )
}

export default Expandable
