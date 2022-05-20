import styled from 'styled-components';
import BurgerButton from '../burgerbutton/BurgerButton';
import ButtonL from '../button/ButtonL';
import React, {useState} from 'react';

export const NavBar = () => {
    const[cliked, setCliked] = useState(false);
    const handleClick = () => {
        //cuando esta true lo passa a false y viceversa
        setCliked(!cliked);
    }
  return (
    <>
        <NavConteiner>
            <div className='navLogo'>
                <h1>Léete La Vida</h1>
            </div>

            <div className={`links ${cliked ? 'active' : '' }`}>
                <a href="/">Home</a>
                <a href="/">Reseñas</a>
                <a href="/">Mi espacio</a>
                <a href="/">Contacto</a>
                <a href="/">Sobre Mi</a>
            </div>

            <div className='nav-login'>
                <ButtonL buttonText="Login" />
            </div>
            <div className='burger'>
                <BurgerButton cliked={cliked} handleClick={handleClick} />
            </div>
            <BgDiv className={`initial ${cliked ? 'active' : ''}`} ></BgDiv>
                       
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
    .links {
        position: absolute;
        top: -700px;
        left: -2000px;
        right: 0;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        transition: all .5s ease ;
        a{
            font-size: 2rem;
            display: block;
        }
        @media(min-width: 768px){
            position: initial;
            margin: 0;
            a{
                font-size: 1rem;
                display: inline;
            }

        }    
    }
    .links.active{
        width: 100%;
        display: block;
        position: absolute;
        margin-left: auto;
        margin-right: auto;
        top: 30%;
        left: 0;
        right: 0;
        text-align: center;
        a{
            font-size: 2rem;
            margin-top: 1rem;
        }
    }
    .burger{
        @media (min-width: 768px){
            display: none;
        }
    }
    .nav-login{
        @media(max-width: 768px){
            display: none;
        }

    }  

`
const BgDiv = styled.div`

    position: absolute;
    background-color: #fdcae1; 
    top: -1000px;
    left: -1000px;
    width: 100%;
    height: 100%;
    z-index: -1;
    transition: all .6s ease ;
    &.active{
        border-radius: 0 0 80% 0;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        
    }

`
