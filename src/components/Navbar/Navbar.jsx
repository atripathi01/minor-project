import { useState, useEffect } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import * as React from 'react';
import images from '../../constants/images';
import './Navbar.css';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Login from '../Login/Register/Login';
import BookTable from '../BookTable/BookTable';
import fire from '../fire';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  border: '2px solid #ACACAC',
  backgroundColor: 'rgba(255, 255, 255, 0.3)',
  backdropFilter: ' blur(10px) saturate(100%) contrast(45%) brightness(130%)',
  boxShadow: 24,
  p: 4,
  borderRadius: '15px',
};

const styleBookTable = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  border: '2px solid #ACACAC',
  backgroundColor: 'rgb(255, 255, 255)',
  boxShadow: 24,
  p: 4,
  borderRadius: '15px',
  height: '90vh',
  overflowY: 'scroll',
};

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [account, setAccount] = useState(false);
  const [isBookTable, setIsBookTable] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const clearInput = () => {
    setEmail('');
    setPassword('');
  };

  const clearError = () => {
    setEmailError('');
    setPasswordError('');
  };

  const handleLogin = () => {
    clearError();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case 'auth/invalid-email':
          case 'auth/user-disabled':
          case 'auth/user-not-found':
            setEmailError(err.message);
            break;
          case 'auth/wrong-password':
            setPasswordError(err.message);
            break;
        }
      });
  };
  const handleSignup = () => {
    clearError();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case 'auth/email-already-in-use':
          case 'auth/invalid-email':
            setEmailError(err.message);
            break;
          case 'auth/weak-password':
            setPasswordError(err.message);
            break;
        }
      });
  };
  const handleLogout = () => {
    fire.auth().signOut();
  };

  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        clearInput();
      } else {
        setUser('');
      }
    });
  };

  // useEffect(() => {
  //     authListener();
  // },[])
  const openBookTable = () => {};

  return (
    <nav className="app__navbar">
      <div className='"app__navbar-logo'>
        <img src={images.gericht} alt="app logo" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans">
          <a href="#home">Home</a>
        </li>
        <li className="p__opensans">
          <a href="#about">About</a>
        </li>
        <li className="p__opensans">
          <a href="#menu">Menu</a>
        </li>
        <li className="p__opensans">
          <a href="#awards">Awards</a>
        </li>
        <li className="p__opensans">
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="app__navbar-login">
        <a onClick={handleOpen} className="p__opensans">
          Log In / Register
        </a>
        {/* {user?(<a href='#' onClick={handleOpen} className='p__opensans'>Log In / Register</a>):(<a href='#' onClick={handleLogout} className='p__opensans'>Logout</a>)} */}
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <Box sx={style}>
              <Login
                email={email}
                password={password}
                emailError={emailError}
                passwordError={passwordError}
                setEmail={setEmail}
                setPassword={setPassword}
                account={account}
                setAccount={setAccount}
                handleLogin={handleLogin}
                handleLogout={handleLogout}
                handleSignup={handleSignup}
              />
            </Box>
          </Fade>
        </Modal>
        <div />
        <a onClick={() => setIsBookTable(true)} className="p__opensans">
          Book Table
        </a>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={isBookTable}
          onClose={() => setIsBookTable(false)}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={isBookTable}>
            <Box sx={styleBookTable}>
              <BookTable setIsBookTable={setIsBookTable} />
            </Box>
          </Fade>
        </Modal>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app__navbar-smallscreen-links">
              <li className="p__opensans">
                <a href="#home">Home</a>
              </li>
              <li className="p__opensans">
                <a href="#about">About</a>
              </li>
              <li className="p__opensans">
                <a href="#menu">Menu</a>
              </li>
              <li className="p__opensans">
                <a href="#awards">Awards</a>
              </li>
              <li className="p__opensans">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
