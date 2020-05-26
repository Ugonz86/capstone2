import React from 'react';
import PropTypes from 'prop-types';
import Edit from './Edit';
import { FiEdit } from 'react-icons/fi';

class Company extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
    };
  }

  render() {
  return (
    <div >

    <div className="companyStyle">
      <p style={{color: 'lightgrey'}}>Company</p> <h2>{this.props.name}</h2>
      <p style={{color: 'lightgrey'}}>Utility</p><h2>{this.props.utility}</h2>
      <p style={{color: 'lightgrey'}}>Contact</p><h2>{this.props.contact}</h2>
    
      <FiEdit className="editButton" onClick={() => this.setState({edit: !this.state.edit})} Edit Company />
        {this.state.edit ?
          <Edit 
            onEditCompany={this.props.onEditCompany}
            utility={this.props.utility}
            name={this.props.name}
            contact={this.props.contact}
            id={this.props.id}/> : null}
      <style jsx global>{`
        .companyStyle{
          background-color: #4265ff;
          border-radius: 10px;
          margin: auto;
          width: 75%;
          {/* padding: 10px; */}
          margin-bottom: 20px;
          color: #edeff5;
          box-shadow: grey 1px 1px 3px;
        }

        .editButton{
          background-color: transparent;
          border: none;
          color: #edeff5;
        }
      `}</style>
      <br/><br/>
      </div>
      <br/><br/>
    </div>
    
   
    );
  }
}

Company.propTypes = {
  utility: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  contact: PropTypes.string.isRequired,
  companyId: PropTypes.string.isRequired,
  id: PropTypes.string,
  onEditCompany: PropTypes.func
};

export default Company;