import React from 'react';
import { withFirebase } from '../Firebase';
import { Link } from 'react-router-dom';

const SignOutButton = ({ firebase }) => (
  <Link type="button" onClick={firebase.doSignOut}>
    Sign Out
  </Link>
);
export default withFirebase(SignOutButton);