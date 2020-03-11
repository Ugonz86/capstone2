import React from 'react';
import { AuthUserContext } from '../Session';
import { PasswordForgetForm } from '../PasswordForget';
import PasswordChangeForm from '../PasswordChange';
import { withAuthorization } from '../Session';

function AccountPage () {
    
    return (
      
      <AuthUserContext.Consumer>
      {authUser => (
        <div style={{backgroundColor: '#edeff5'}}>

        <div style={{backgroundColor: '#4265ff', borderRadius: '10px', margin: 'auto', width: '50%', padding: '10px', color: '#edeff5'}}>
        <h1 style={{color: '#333'}}>Account Settings</h1>
          <h3>Hello {authUser.email}!</h3>
          <h3>Reset password</h3>
          <PasswordForgetForm /><br/>
          <h3>Change password</h3>
          <PasswordChangeForm />
          <br/><br/>
          </div>
          <style global jsx>{`
            input {
              font-size: 15px;
              border-radius: 10px;
              border: none;
              width: 250px;
              height: 40px;
              text-align: center;
            }
            button {
              border-radius: 10px;
              border: none;
              font-size: 15px;
              width: 250px;
              height: 40px;
            }
            button:hover {
              background-color: black;
              color: #edeff5;
            }
          `}</style>
        </div>
      )}
      </AuthUserContext.Consumer>

    );
  }

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(AccountPage);