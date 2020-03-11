import React from 'react';
import { withFirebase } from '../Firebase';
import { FaSignOutAlt } from 'react-icons/fa';

const SignOutButton = ({ firebase }) => (
  <FaSignOutAlt style={{fontSize: '30px'}} type="button" onClick={firebase.doSignOut} />
);
export default withFirebase(SignOutButton);