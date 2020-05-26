import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import '../../index.css';

function Payments () {

   return (
     <div className="companyStyle">
     <style jsx global>{`
        .companyStyle{
          border-radius: 10px;
          margin: auto;
          width: 75%;
          {/* padding: 10px; */}
          margin-bottom: 20px;
          color: #edeff5;
        }

      `}</style>
    <div style={{backgroundColor: '#4265ff',
    borderRadius: '10px',
    boxShadow: 'grey 1px 1px 3px',
    marginBottom: '20px',
    padding: '10px',
    color: '#edeff5'}}>
  <h1 style={{color: '#edeff5', textShadow: '#0b2180 1px 1px 3px'}}>Payments</h1>
  </div>
  <br/>
  <div class="grid-container">

      <div className="Option1" style={{backgroundColor: '#4265ff', padding: '25px', margin: 'auto', borderRadius: '10px',  height: '100px', width: '200px', boxShadow: 'grey 1px 1px 3px' }}>
        <h2><Link style={{color: 'white', textAlign: 'center', margin: 'auto', textShadow: '#0b2180 1px 1px 3px',}} to={ROUTES.NEWPAYMENTFORM}>Schedule Payment</Link></h2>
      </div>
      
      <div className="Option2" style={{backgroundColor: '#4265ff', padding: '25px', margin: 'auto', color: 'white', borderRadius: '10px', height: '100px', width: '200px', boxShadow: 'grey 1px 1px 3px',}}>
        <h2><Link style={{color: 'white', textAlign: 'center',  margin: 'auto', textShadow: '#0b2180 1px 1px 3px'}} to={ROUTES.PAYMENTSLIST}>Payment List</Link></h2>
      </div>

      <div className="Option3" style={{backgroundColor: '#4265ff', padding: '25px', margin: 'auto', color: 'white', borderRadius: '10px', height: '100px', width: '200px', boxShadow: 'grey 1px 1px 3px', }}>
        <h2 style={{textShadow: '#0b2180 1px 1px 3px'}}>Upcoming Payments</h2>
      </div>

      <div className="Option4" style={{backgroundColor: '#4265ff', padding: '25px', margin: 'auto', color: 'white', borderRadius: '10px', height: '100px',  width: '200px',boxShadow: 'grey 1px 1px 3px', }}>
          <h2 style={{textShadow: '#0b2180 1px 1px 3px'}}>Set Auto Payment</h2>
      </div>

      <div className="Option5" style={{backgroundColor: '#4265ff', padding: '25px', margin: 'auto', color: 'white', borderRadius: '10px', height: '100px',  width: '200px',boxShadow: 'grey 1px 1px 3px', }}>
          <h2 style={{textShadow: '#0b2180 1px 1px 3px'}}>Receipts</h2>
      </div>

      <div className="Option6" style={{backgroundColor: '#4265ff', padding: '25px', margin: 'auto', color: 'white', borderRadius: '10px', height: '100px',  width: '200px',boxShadow: 'grey 1px 1px 3px',  }}>
          <h2 style={{textShadow: '#0b2180 1px 1px 3px'}}>Resources</h2>
      </div>
  </div>
  <br/><br/>
  </div>
  
   );
}

export default Payments;