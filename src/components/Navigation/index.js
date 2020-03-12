import React from 'react';
import { Link } from 'react-router-dom';
import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';
import { AuthUserContext } from '../Session';
import { FaHome, FaListAlt, FaUserCog, FaMoneyCheck, FaSignInAlt } from 'react-icons/fa';

const Navigation = () => (
  <div className="headerStyle">
    <Link style={{ position: 'fixed', zIndex: '100', left: '0', fontSize: '30px', fontWeight: 'bold' }} to={ROUTES.LANDING}><span style={{ color: '#4265ff', fontWeight: 'bold', fontStyle: 'italic'}}>e</span>Bills</Link>
    {/* <Link style={{float: 'right'}} to={ROUTES.SIGN_IN}>Sign In</Link> */}
    <AuthUserContext.Consumer>
      {authUser =>
        authUser ? <NavigationAuth /> : <NavigationNonAuth />
      }
    </AuthUserContext.Consumer>
      
  </div>
);

const NavigationAuth = () => (

  <div style={{  textAlign: 'center', marginTop:'25px' }}>

    {/* <Link style={{  textAlign: 'left', fontSize: '25px'}} to={ROUTES.LANDING}><span style={{color: 'blue', fontStyle: 'italic'}}>e</span>Bills</Link> */}

    <Link to={ROUTES.HOME}><FaHome style={{fontSize: '30px', marginRight: '60px'}} /></Link>
    
    <Link to={ROUTES.ACCOUNT}><FaUserCog style={{fontSize: '30px', marginRight: '60px'}} /></Link>
    
    {/* <Link to={ROUTES.ADMIN}>Admin</Link> */}

    <Link to={ROUTES.COMPANYLIST}><FaListAlt style={{fontSize: '28px', marginRight: '60px'}} /></Link>

    <Link to={ROUTES.PAYMENTS}><FaMoneyCheck style={{fontSize: '30px', marginRight: '60px'}} /></Link>
    
    <SignOutButton />
  </div>
);

const NavigationNonAuth = () => (
  <Link style={{float: 'right', fontSize: '30px'}} to={ROUTES.SIGN_IN}><FaSignInAlt /></Link>
);

export default Navigation;