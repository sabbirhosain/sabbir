import React from 'react'
import './SectionTitle.css'

const SectionTitle = ({section_title}) => {
  return (
    <div className="section-title">
      <h2>{section_title}</h2>
      <div className="devider"></div>
    </div>
  )
}

export default SectionTitle