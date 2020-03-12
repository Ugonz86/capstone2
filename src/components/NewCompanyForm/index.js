import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function NewCompanyForm(props){
  let _name = null;
  let _utility = null;
  let _contact = null;

  function handleNewCompanyFormSubmission(event) {
    event.preventDefault();
    props.onNewCompanyCreation({name: _name.value, utility: _utility.value, contact: _contact.value, id: v4()});
    _name.value = '';
    _utility.value = '';
    _contact.value = '';
  }

  return (
    <div class="container">
      <div id="form-container">
        <h1>Add A New Company</h1>
        <form onSubmit={handleNewCompanyFormSubmission}>
          <input
            type='text'
            id='name'
            placeholder='Company'
            ref={(input) => {_name = input;}}/>

          <input
            type='text'
            id='utility'
            placeholder='Utility'
            ref={(input) => {_utility = input;}}/><br/><br/>

          <input
            type='text'
            id='contact'
            placeholder='Contact Info'
            ref={(input) => {_contact = input;}}/><br/><br/>
          <button type='submit'>Submit New Company</button>
        </form>
      </div>
    </div>
  );
}

NewCompanyForm.propTypes = {
  onNewCompanyCreation: PropTypes.func
};

  
export default NewCompanyForm;