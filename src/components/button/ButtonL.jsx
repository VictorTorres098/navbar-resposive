import React from 'react'
import styled from 'styled-components'

export const ButtonL = (props) => {
  return (
    <div>
      <Button>  {/* WTF tenes que poner la etiqueta en Mayus */}
        <span>{props.buttonText}</span> 
      </Button>
    </div>
  )
}

export default ButtonL;

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`