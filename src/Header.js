import React from 'react'

const Header = ({title}) => {
    const headerStyle = {
        backgroundColor: "mediumblue",
        color: "#ddd"
    }
  return (
    <header style={headerStyle}>
        <h1>{title}</h1>
    </header>
  )
}
Header.defaultProps = {
    title: "Default "
}

export default Header