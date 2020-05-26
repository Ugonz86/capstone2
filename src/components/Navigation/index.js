import React from 'react';
import { Link } from 'react-router-dom';
import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';
import { AuthUserContext } from '../Session';
import { FaHome, FaListAlt, FaUserCog, FaMoneyCheck, FaSignInAlt } from 'react-icons/fa';
import Fade from 'react-reveal/Fade';

const Navigation = () => (
  <div className="headerStyle">
    
    <AuthUserContext.Consumer>
      {authUser =>
        authUser ? <NavigationAuth /> : <NavigationNonAuth />
      }
    </AuthUserContext.Consumer>
  </div>
);

const NavigationAuth = () => (
  <Fade top>
  <div style={{  textAlign: 'center', marginTop:'50px' }}>
    <Link to={ROUTES.HOME}><FaHome style={{fontSize: '30px', marginRight: '60px', title:'Home'}} /></Link>
    <Link to={ROUTES.ACCOUNT}><FaUserCog style={{fontSize: '30px', marginRight: '60px'}} /></Link>
    <Link to={ROUTES.COMPANYLIST}><FaListAlt style={{fontSize: '28px', marginRight: '60px'}} /></Link>
    <Link to={ROUTES.PAYMENTS}><FaMoneyCheck style={{fontSize: '30px', marginRight: '60px'}} /></Link>
    <SignOutButton />
  </div>
  </Fade>
);

const NavigationNonAuth = () => (
  
  <Link style={{float: 'right', fontSize: '30px'}} to={ROUTES.SIGN_IN}><FaSignInAlt /></Link>
);

export default Navigation;