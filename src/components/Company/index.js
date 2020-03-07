import React from 'react';
import PropTypes from 'prop-types';

function Company(props){
  return (
    <div>
      <h4>{props.utility}</h4>
      <h3>{props.name}</h3>
      <h4><em>{props.contact}</em></h4>
      <hr/>
    </div>
  );
}

Company.propTypes = {
  utility: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  contact: PropTypes.string.isRequired,
  companyId: PropTypes.string.isRequired
};

export default Company;