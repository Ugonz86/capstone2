import React from 'react';
import { AuthUserContext } from '../Session';
import { PasswordForgetForm } from '../PasswordForget';
import PasswordChangeForm from '../PasswordChange';
import { withAuthorization } from '../Session';

const AccountPage = () => (
  <AuthUserContext.Consumer>
    {authUser => (
      <div style={{backgroundColor: '#edeff5'}}>
      <br/>
      <h2>Account Settings</h2>
        <h1>Hello {authUser.email}!</h1>
        <h3>Reset password</h3>
        <PasswordForgetForm />
        <h3>Change password</h3>
        <PasswordChangeForm />
        <br/>
      </div>
    )}
  </AuthUserContext.Consumer>
);

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(AccountPage);