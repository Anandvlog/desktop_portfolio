import React from 'react'

const TopHeading = (props) => {
  return (
    <>
        <div className="top-text">
              <span className="subtitle">{props.smallTitle}</span>
              <h2 className="">{props.title}</h2>
             
            </div>
    </>
  )
}

export default TopHeading