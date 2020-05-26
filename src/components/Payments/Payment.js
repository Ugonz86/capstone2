import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Payment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  render() {
    return (
      <div className="companyStyle">
        <p style={{color: 'lightgrey'}}>Company</p> <h2>{this.props.name}</h2>
        <p style={{color: 'lightgrey'}}>Scheduled on</p><h2>{this.props.date}</h2>
        <p style={{color: 'lightgrey'}}>Amount</p><h2>${this.props.amount}</h2>
        <br/>
        <Link className="payButton" to="/PAYMENTFORM">Pay Now</Link>
        {/* <button to="/PAYMENTFORM" type="button">PAY NOW</button> */}
        <br/><br/><br/>
        
        <style jsx global>{`
        .companyStyle{
          background-color: #4265ff;
          border-radius: 10px;
          margin: auto;
          width: 50%;
          padding: 10px;
          margin-bottom: 20px;
          color: #edeff5;
        }
        .payButton{
          background-color: #333;
          padding: 10px;
          border: none;
          border-radius: 10px;
          color: #edeff5;
        }
        .payButton:hover{
          background-color: #edeff5;
          color: #333;
        }
      `}</style>
      </div>
    );
  }
}

Payment.propTypes = {
  name: PropTypes.string.isRequired,
  date: PropTypes.number.isRequired,
  amount: PropTypes.number.isRequired,
  id: PropTypes.string,
  paymentId: PropTypes.string.isRequired,
};

export default Payment;