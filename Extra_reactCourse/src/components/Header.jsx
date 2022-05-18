// import PropTypes from 'prop-types'

// component created using rfce
//if we know the name of passed value we can receive directly in function Ex.- function Header({text})

import {useState} from 'react';
function Header({text, bgColor, textColor}) {

  // const headerStyles = {
  //   backgroundColo:'blue', 
  //   color:'red'
  // }

  const headerStyles = { 
    color:textColor
  }
  
  return (
    // <header style={{backgroundColo:'blue', color:'red'}}> <header style={headerStyles}>
    <header style={headerStyles}>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  )
}

// to give default props
// Header.defaultProps = {
//   text:'default UI'
// }


//to specify prop type(type of props that should be passed)
// Header.propTypes = {
//   text: PropTypes.string
  // here PropTypes.string means that a string type value should be passed
// }
export default Header