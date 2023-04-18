import {Link} from "react-router-dom";
import {useState, useEffect} from 'react';
import './index.css';

export default function Navbar () {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const toggleMobileMenu = () => {
        setShowMobileMenu(!showMobileMenu);
    }

    useEffect(() => {
        function handleClickOutside(event) {
            const mobileMenu = document.querySelector('#navbar');
            if (mobileMenu && !mobileMenu.contains(event.target)) {
                setShowMobileMenu(false);
            }
        }
        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, []);

    function closeMobileMenu() {
        setShowMobileMenu(false);
    };

    return (
    <nav>
      <ul id="navbar">
            <div className="mainNav">
                <span className="storeName">Boba</span>
                <button className="nav-button" onClick={toggleMobileMenu}>☰</button>
            </div>

            {showMobileMenu && (
                <>
                <li>
                    <Link to="/" onClick={closeMobileMenu} style={{textDecoration: 'none', color: 'white'}}>Home</Link>
                </li>
                <li>
                    <Link to="/Menu" onClick={closeMobileMenu} style={{textDecoration: 'none', color: 'white'}}>Menu</Link>
                </li>
                <li>
                    <Link to="/About" onClick={closeMobileMenu} style={{textDecoration: 'none', color: 'white'}}>About Us</Link>
                </li>
                <li>
                    <Link to="/Contact" onClick={closeMobileMenu} style={{textDecoration: 'none', color: 'white'}}>Contact</Link>
                </li>
                </>
            )}
            
      </ul>
     </nav>
    )
}