import React, { useState } from 'react'; //{, useEffect}
import { Link } from 'react-router-dom';
//import { Button } from './Button';
import './Navbar.css';

//Navbar - commented code may be used later 
function Navbar() {
    const [click, setClick] = useState(false);
    //const [button, setButton] = useState(true);
    const [title, setTitle] = useState(true);

    const handleClick = () => { setClick(!click); }
    const closeMobileMenu = () => setClick(false);

    //function to remove button if its smaller than 960
    /*const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false); 
        }else{
            setButton(true); 
        }
    }; */
    //function to remove button if its smaller than 960
    const showTitle = () => {
        if (window.innerWidth <= 760) {
            setTitle(false);
        } else {
            setTitle(true);
        }
    };

    /*/don't show the sign up button on every resize
    useEffect(() => {
        showButton(); 
    }, []); 

    window.addEventListener('resize', showButton); *///anytime you resize, call showButton
    window.addEventListener('resize', showTitle);
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    {title ? <Link to="/" className="navbar-logo" >
                        Coffee For You <i className='fa-solid fa-mug-hot' />
                    </Link> : <Link to="/" className="navbar-logo" >
                        <i className='fa-solid fa-mug-hot' /></Link>}
                </div>
                <div className='cart-logo'>
                    <Link to="/cart" className='cart-icon'>
                        <i class="fa-solid fa-cart-shopping"></i>
                    </Link>
                </div>

                <div className='menu-icon' onClick={handleClick} >
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <div className={click ? 'show' : 'remove'}>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'} >
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/menu' className='nav-links' onClick={closeMobileMenu}>
                                Menu
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/cart' className='nav-links' onClick={closeMobileMenu}>
                                Cart
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                                About
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>

            </nav>
        </>
    );
}

export default Navbar
