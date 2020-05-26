import React from 'react';
import Payment from './Payment';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const PaymentList = (props) => {
  return (
    <div class="container">
        <div className="dateHead">
        <br/>
        <h1 style={{ color: '#333'}}><center>Payment History</center></h1>
          <Link to="/newPayment" className="hStyle"></Link>
          <br/><br/>
          <style jsx global>{`
            .dateHead{
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
              content: 'Add New Payment';
              font-size: 20px;
              font-weight: bold;
            }
          `}</style>
        </div>
      
        {Object.keys(props.paymentList).map(function(paymentId) {
          var payment = props.paymentList[paymentId];
          return <Payment name={payment.name}
            date={payment.date}
            amount={payment.amount}
            key={paymentId}
            id={paymentId}
            onPaymentSelection={props.onPaymentSelection}
           />;
        })}
    </div>
  );
};

PaymentList.propTypes = {
  paymentList: PropTypes.object,
  onPaymentSelection: PropTypes.func,
};

export default PaymentList;