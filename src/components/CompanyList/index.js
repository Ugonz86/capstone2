import React from 'react';
import Company from '../Company';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CompanyList = (props) => {
  return (
    <div className="container">
        <div className="companyStyle">
          
          <h1 style={{color: '#edeff5', textShadow: '#0b2180 1px 1px 3px'}}>Utility Company List</h1>
          <Link to="/newCompany" className="hStyle"></Link>
          <br/><br/>
          
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
        .hStyle {
          font-size: 30px;
        }
        .hStyle:after {
          color: #edeff5;
          text-shadow: #0b2180 1px 1px 3px;
          content: '+';
        }
        .hStyle:hover:after {
          color: #edeff5;
          content: 'Add New Utility Company';
          font-size: 20px;
          font-weight: bold;
        }
      `}</style>
    </div>
    <br/><br/>
      
    {Object.keys(props.companyList).map(function(companyId) {
      var company = props.companyList[companyId];
      return <Company utility={company.utility}
        name={company.name}
        contact={company.contact}
        key={companyId}
        id={companyId}
        onCompanySelection={props.onCompanySelection}
        onEditCompany={props.onEditCompany}/>;
    })}
    
  </div>
   
  );
};

CompanyList.propTypes = {
  companyList: PropTypes.object,
  onCompanySelection: PropTypes.func,
  onEditCompany: PropTypes.func
};

export default CompanyList;