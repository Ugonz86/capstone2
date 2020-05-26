import React from 'react';
import { AuthUserContext } from '../Session';
import { PasswordForgetForm } from '../PasswordForget';
import PasswordChangeForm from '../PasswordChange';
import { withAuthorization } from '../Session';

function AccountPage () {
    return (
      <AuthUserContext.Consumer>
      {authUser => (
        <div className="container">
        <div className="companyStyle">
          
          <h1 style={{color: '#edeff5', textShadow: '#0b2180 1px 1px 3px'}}>Account Settings</h1>

          <style jsx global>{`
        .companyStyle{
          background-color: #4265ff;
          border-radius: 10px;
          margin: auto;
          width: 75%;
          padding: 10px;
          margin-bottom: 20px;
          color: #edeff5;
          box-shadow: grey 1px 1px 3px;
        }
        
      `}</style>
      </div>


        <div className="companyStyle">
        
        <div style={{backgroundColor: '#4265ff', borderRadius: '10px', margin: 'auto', width: '75%', padding: '10px', }}>
        <h1>Hello <em>{authUser.email}!</em></h1>
          <h3>Forgot password?</h3>
          <PasswordForgetForm /><br/>
          <hr/>
          <h3>Update password</h3>
          <PasswordChangeForm />
          <br/>
          </div>
          
          <style global jsx>{`
            input {
              font-size: 15px;
              border-radius: 10px;
              border: none;
             
              height: 40px;
              text-align: center;
            }
            button {
              border-radius: 10px;
              border: none;
              font-size: 15px;
              width: 215px;
              height: 40px;
              background-color: #333;
              color: #edeff5;
            }
            button:hover {
              background-color: #edeff5;
              color: #333;
            }
          `}</style>
        </div>


      </div>
      )}
      </AuthUserContext.Consumer>
    );
  }

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(AccountPage);