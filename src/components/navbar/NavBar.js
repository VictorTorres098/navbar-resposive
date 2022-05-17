import React from 'react'
import styled from 'styled-components';
import ButtonL from '../button/ButtonL';

export const NavBar = () => {
  return (
    <>
        <NavConteiner>
            <div className='navLogo'>
                <h1>Léete La Vida</h1>
            </div>

            <div className='links'>
                <a href="/">Home</a>
                <a href="/">Reseñas</a>
                <a href="/">Mi espacio</a>
                <a href="/">Contacto</a>
                <a href="/">Sobre Mi</a>
            </div>

            <div className='nav-login'>
                <ButtonL buttonText="Login" />
            </div>           
        </NavConteiner>
    
    </>
  )
}
export default NavBar;

const NavConteiner = styled.nav ` /* alt 96 */
    @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');
    padding: 1.2rem;
    background-color: whitesmoke;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .navLogo h1{
        font-family: 'Great Vibes', cursive;
        font-weight: 400;
        font-size: 30px;
    }

    a{
        color: black;
        text-decoration: none;
        margin-right: 1rem;
        font-size: x-large;
    }
    .links{

    }

    

`
