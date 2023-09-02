import React, { useEffect,useState } from 'react'
import navAvatar from './images/Netflix-avatar.png';
import './Nav.css';

function Nav() {

    const [show,handleShow] = useState(false);

    // adding the fucntionality that when we scroll down 100 px then only the nav bar becomes black =>> using the useEffect for this
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY > 100){
                handleShow(true)
            }else {
                handleShow(false)
            }
        });

        return ()=>{
            window.removeEventListener("scroll",null);
        };
    },[]);


  return (
    <div className={`nav ${show && "nav-black"}`}>
        <img className='nav-logo' src='https://www.freepnglogos.com/uploads/netflix-logo-0.png' alt='netflix-logo'/>

        <img className='nav-avatar' src={navAvatar} alt='nav-avatar' />
    </div>
  )
}

export default Nav