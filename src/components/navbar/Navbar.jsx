import React, {useState} from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';
import './navbar.css';

const Menu = () =>(
  <>
    <p className='gpt3__navbar-links_container_title'><a href='#home'>Home</a></p>
    <p className='gpt3__navbar-links_container_title'><a href='#wgpt3'>What is GPT3?</a></p>
    <p className='gpt3__navbar-links_container_title'><a href='#possibility'>Open AI</a></p>
    <p className='gpt3__navbar-links_container_title'><a href='#features'>Case Studies</a></p>
    <p className='gpt3__navbar-links_container_title'><a href='#blog'>Library</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar-links_logo'> 
          <a href="#home">
           <p>GPT-3</p>
          </a>
        </div>
        <div className='gpt3__navbar-links_container'>
          <Menu />
        </div>
      </div>
      <div className='gpt3__navbar-sign'>
        <p>Sign in</p>
        <button type='button'>Sign up</button>
      </div>
      <div className='gpt3__navbar-menu'>
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} /> 
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
        } 
        {toggleMenu && (
          <div className='gpt3__navbar-menu_container scale-up-center'>
            <div className='gpt3__navbar-menu_container-links'>
             <Menu />
             <div className='gpt3__navbar-menu_container-links-sign'>
              <p>Sign in</p>
              <button type='button'>Sign up</button>
            </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar