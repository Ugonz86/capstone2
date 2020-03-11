// import React from 'react';
// import { Link } from 'react-router-dom';
// import Company from '../Company';
// import PropTypes from 'prop-types';
// import * as ROUTES from '../../constants/routes';
// // import { v4 } from 'uuid';

// function CompanyList(props){

//   var masterCompanyList = [

//  {
//     name:'Seattle Light',
//     utility:'Electricity',
//     contact:'www.seattleLight.com',
   
//   },
// {
//     name:'Seattle Water',
//     utility:'Water',
//     contact:'www.seattleWater.com',
  
//   },
// {
//     name:'Seattle Farm',
//     utility:'Insurance',
//     contact:'www.seattleFarm.com',
  
//   },
//  {
//     name:'Seattle Auto',
//     utility:'Car Dealer',
//     contact: 'www.seattleAuto.com'
//   },
 
//  {
//     name:'Seattle Fi',
//     utility:'Internet',
//     contact:'www.seattleFi.com',

//   }
// ];
    
//   return (
//     <div utility={{backgroundColor: '#edeff5'}}>
//     <h1>Utilities</h1>
//     <p><Link utility={{fontSize: '30px'}} to={ROUTES.NEWCOMPANY}>+</Link></p>
//       <hr/>
      
//       {masterCompanyList.map((company, index) =>
//           <Company name={company.name}
//             utility={company.utility}
//             contact={company.contact} 
//             key={index}/>
//         )}
//     </div>
//   );
// }

// CompanyList.propTypes = {
//   companyList: PropTypes.array,

// };

// export default CompanyList;

import React from 'react';
import Company from '../Company';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CompanyList = (props) => {
  return (
    <div class="container">
      
        <div className="utilityHead">
        <br/>
        <h1 style={{ color: '#333'}}><center>Utility Company List</center></h1>
        
          <Link to="/newCompany" className="hStyle"></Link>
          <br/><br/>
          <style jsx global>{`
            .utilityHead{
              background-color: #4265ff;
              border-radius: 10px;
              margin: auto;
              width: 50%;
              padding: 10px;
              margin-bottom: 20px;
              color: #edeff5;
            }
            .hStyle {
              font-size: 30px;
              
            }
            .hStyle:after {
              color: #edeff5;
              content: '+';
            }
            .hStyle:hover:after {
              color: #edeff5;
              content: 'Add New Company';
              font-size: 20px;
              font-weight: bold;
            }
          `}</style>
        </div>
      
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