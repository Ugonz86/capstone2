import React from 'react';
import { Link } from 'react-router-dom';
import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';
import { AuthUserContext } from '../Session';

const Navigation = () => (
    <div className="headerStyle">
    <Link style={{ float: 'left', fontSize: '25px' }} to={ROUTES.LANDING}><span style={{ color: 'blue', fontStyle: 'italic'}}>e</span>Bills</Link>
      <AuthUserContext.Consumer>
        {authUser =>
          authUser ? <NavigationAuth /> : <NavigationNonAuth />
        }
      </AuthUserContext.Consumer>
      
    </div>
);

const NavigationAuth = () => (

    <div style={{  textAlign: 'center', marginTop:'25px'}}>


    {/* <Link style={{  textAlign: 'left', fontSize: '25px'}} to={ROUTES.LANDING}><span style={{color: 'blue', fontStyle: 'italic'}}>e</span>Bills</Link> */}

    <Link style={{}} to={ROUTES.HOME}>Home</Link>
    
    <Link to={ROUTES.ACCOUNT}>Account</Link>
    
    <Link to={ROUTES.ADMIN}>Admin</Link>

    <Link to={ROUTES.COMPANYLIST}>Companies</Link>
    
    
    <SignOutButton />
    </div>
);
const NavigationNonAuth = () => (
    <p>
        <Link style={{marginLeft: '75%'}} to={ROUTES.SIGN_IN}>Sign In</Link>
    </p>

);



export default Navigation;