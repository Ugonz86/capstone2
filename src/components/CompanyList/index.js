import React from 'react';
import { Link } from 'react-router-dom';
import Company from '../Company';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import * as ROUTES from '../../constants/routes';

function CompanyList(props){

  return (
    <div>
      <hr/>
      {Object.keys(props.companyList).map(function(companyId) {
        var company = props.companyList[companyId];
        return <Company
          name={company.name}
          utility={company.utility}
          contact={company.contact}
          key={companyId}
          companyId={companyId}
          onCompanySelection={props.onCompanySelection}/>;
      })}
      <p><Link to={ROUTES.NEWCOMPANY}>Create new company</Link></p>
    </div>
    
  );
}

CompanyList.propTypes = {
  companyList: PropTypes.array,
  onCompanySelection: PropTypes.func
};

export default CompanyList;