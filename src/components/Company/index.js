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
    <div className="companyStyle">
      <h4>{this.props.utility}</h4>
      <h3>{this.props.name}</h3>
      <h4><em>{this.props.contact}</em></h4>
     
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
          width: 50%;
          padding: 10px;
          margin-bottom: 20px;
          color: #edeff5;
        }
        .editButton{
          background-color: transparent;
          border: none;
          color: #edeff5;
        }
        .editButton:hover {
          color: #333;
        }     
      `}</style>
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