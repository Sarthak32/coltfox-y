import React,{useState} from 'react'
import "./Navbar.css"
import { motion,useAnimation  } from 'framer-motion'
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLogoExtended, setIsLogoExtended] = useState(false);
  const [isMenuExtended, setMenuExtended] = useState(false);

  const controls = useAnimation();

  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
    setMenuExtended(!isMenuExtended);

    // Check if the menu is open, and if the logo is extended, reset the animation
    if (isMenuExtended) {
      setIsMenuOpen(!isMenuOpen);
      isMenuExtended(false);
      controls.start({ scale: 1 });
    }
    // Check if the menu is open, and if the logo is extended, reset the animation
    if (isMenuOpen ) {
      setIsMenuOpen(!isMenuOpen);
      controls.start({ scale: 1 });
    }
  };

  const handleLogoClick = () => {
    if (!isMenuOpen) {
      setIsLogoExtended(!isLogoExtended);
    }
  };
  const MenuItems = () => (
    <div className="menu-items">
      <Link to="/">Home</Link>
      <Link to="/ourservicesinside">Ourservicesinside</Link>
      <Link to="/contactus">Contactus</Link>
      <Link to="/ourawards">Ourawards</Link>
      <Link to="/ourblogs">Ourblogs</Link>
      <Link to="/ourservicesmain">Ourservicesmain</Link>
      <Link to="/ourworkmain">Ourworkmain</Link>
    </div>
  );


  return (
    <div className="navbar">
      <div className={`logo ${isLogoExtended ? 'extended' : ''}`}
      onClick={handleLogoClick}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}>
      <motion.img 
          className={`logo-img ${isLogoExtended ? 'extended' : ''}`}
          src={isLogoExtended ? "./expandedlogo.png" : "./logo.png"}
          alt="Company Logo"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 ,delay: isLogoExtended ? 1.2 : 0}}
        />
      </div>
      <div className={`menu-icon ${isMenuExtended ? 'extended' : ''}`}>
        <motion.img src="./menu.png" alt="Menu Icon" 
        onClick={handleClick}
        initial={{ scale: 0 }}
        animate={{ rotate: isMenuOpen ? -90 : 0, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: isMenuExtended ? 1.2 : 0,
          }}/>
          {isMenuExtended && <MenuItems />}
      </div>
    </div>
  )
}

export default Navbar