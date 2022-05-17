import React from 'react'
import styled from 'styled-components'

function BurgerButton() {
  return ( 
    <>
        <input type="checkbox" id="menu_checkbox">
            <label for="menu_checkbox">
                <div></div>
                <div></div>
                <div></div>
            </label>
        </input>
    </>
    
  )
}

export default BurgerButton;

const Burger = styled.div`
#menu_checkbox {
  display: none;
}

label {
  position: absolute;
  top: 50%;
  right: 0;
  left: 0;
  display: block;
  width: 60px;
  height: 60px;
  margin: -30px auto 0 auto;
  cursor: pointer;
}

label:before {
  content: "";
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #f44336;
  transition: 1.2s cubic-bezier(0, 0.96, 1, 0.02) background-color;
}

label div {
  position: relative;
  top: 0;
  height: 12px;
  background-color: #fff;
  margin-bottom: 12px;
  transition: 0.3s ease transform, 0.3s ease top, 0.3s ease width,
    0.3s ease right;
  border-radius: 2px;
}

label div:first-child {
  transform-origin: 0;
}

label div:last-child {
  margin-bottom: 0;
  transform-origin: 60px;
}

label div:nth-child(2) {
  right: 0;
  width: 60px;
}

#menu_checkbox:checked + label:before {
  background-color: #4caf50;
}

#menu_checkbox:checked + label div:first-child {
  top: -6px;
  transform: rotateZ(45deg);
}

#menu_checkbox:checked + label div:last-child {
  top: 6px;
  transform: rotateZ(45deg);
}

#menu_checkbox:checked + label div:nth-child(2) {
  width: 85px;
  top: 0;
  right: 13px;
  transform: rotateZ(-45deg);
}

    
`