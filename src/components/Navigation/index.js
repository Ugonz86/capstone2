import React from 'react';
import { Link } from 'react-router-dom';
import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';
import { AuthUserContext } from '../Session';

const Navigation = () => (
    <div className="headerStyle">
    
      <AuthUserContext.Consumer>
        {authUser =>
          authUser ? <NavigationAuth /> : <NavigationNonAuth />
        }
      </AuthUserContext.Consumer>
      <h1><span style={{color: 'blue', fontStyle: 'italic'}}>e</span>Bills</h1>
    </div>
);

const NavigationAuth = () => (

    <ul>
    <Link to={ROUTES.LANDING}>Landing</Link>
    
    
    <Link to={ROUTES.HOME}>Home</Link>
    
    
    <Link to={ROUTES.ACCOUNT}>Account</Link>
    
    
    <Link to={ROUTES.ADMIN}>Admin</Link>
    
    
    <SignOutButton />
    </ul>
);
const NavigationNonAuth = () => (

    <ul>
    <Link to={ROUTES.LANDING}>Landing</Link>
    
    <Link to={ROUTES.SIGN_IN}>Sign In</Link>
    </ul>

);



export default Navigation;