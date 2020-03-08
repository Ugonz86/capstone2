import React from 'react';
import { Link } from 'react-router-dom';
import Company from '../Company';
import PropTypes from 'prop-types';
import * as ROUTES from '../../constants/routes';
// import { v4 } from 'uuid';

function CompanyList(props){

  var masterCompanyList = [

 {
    name:'Seattle Light',
    utility:'Electricity',
    contact:'www.seattleLight.com',
   
  },
{
    name:'Seattle Water',
    utility:'Water',
    contact:'www.seattleWater.com',
  
  },
{
    name:'Seattle Farm',
    utility:'Insurance',
    contact:'www.seattleFarm.com',
  
  },
 {
    name:'Seattle Auto',
    utility:'Car Dealer',
    contact: 'www.seattleAuto.com'
  },
 
 {
    name:'Seattle Fi',
    utility:'Internet',
    contact:'www.seattleFi.com',

  }
];
    
  return (
    <div style={{backgroundColor: '#edeff5'}}>
    <h1>Utilities</h1>
    <p><Link style={{fontSize: '30px'}} to={ROUTES.NEWCOMPANY}>+</Link></p>
      <hr/>
      
      {masterCompanyList.map((company, index) =>
          <Company name={company.name}
            utility={company.utility}
            contact={company.contact} 
            key={index}/>
        )}
    </div>
  );
}

CompanyList.propTypes = {
  companyList: PropTypes.array,

};

export default CompanyList;