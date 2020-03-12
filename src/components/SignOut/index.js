import React from 'react';
import { Link } from 'react-router-dom';
import { withFirebase } from '../Firebase';
import { FaSignOutAlt } from 'react-icons/fa';
import * as ROUTES from '../../constants/routes';

const SignOutButton = ({ firebase }) => (
  <Link><FaSignOutAlt style={{fontSize: '30px'}} type="button" onClick={firebase.doSignOut} to={ROUTES.SIGN_OUT} /></Link>
);
export default withFirebase(SignOutButton);