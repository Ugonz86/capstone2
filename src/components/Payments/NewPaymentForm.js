import React from 'react';
import PropTypes from 'prop-types';
// import {Redirect} from 'react-router-dom';
import { v4 } from 'uuid'; 

function NewPaymentForm(props){
  let _name = null;
  let _date = null;
  let _amount = null;

  function handleNewPaymentFormSubmission(event) {
    event.preventDefault();
    props.onNewPaymentCreation({name: _name.value, date: _date.value, amount: _amount.value, id: v4()});
    _name.value = '';
    _date.value = '';
    _amount.value = '';
  }

    return (
      <div>
        <div className="companyStyle">
          <h1>Payment Form</h1>
          <style jsx global>{`
            .companyStyle{
            background-color: #4265ff;
            border-radius: 10px;
            margin: auto;
            width: 75%;
            padding: 10px;
            margin-bottom: 20px;
            color: #edeff5;
            }

          `}</style>
        </div>
       
        <div id="form-container">
          
          <form onSubmit={handleNewPaymentFormSubmission}>
              <select ref={(input) => {_name = input;}}>
                  <option selected value="SeattleLight">SeattleLight</option>
                  <option value="SeattleWater">SeattleWater</option>
                  <option value="SeattleFarm">SeattleFarm</option>
                  <option value="SeattleAuto">SeattleAuto</option>
                  <option value="SeattleFi">SeattleFi</option>
              </select><br/><br/>

            <input
              type='date'
              id='date'
              placeholder='Date'
              ref={(input) => {_date = input;}}/><br/><br/>

            <input
              type='number'
              id='amount'
              placeholder='Amount'
              ref={(input) => {_amount = input;}}/><br/><br/>

            <button type='submit'>Set Payment</button>
          </form>
        </div>
      </div>
    );
  }

NewPaymentForm.propTypes = {
  onNewPaymentCreation: PropTypes.func
};
  
export default NewPaymentForm;