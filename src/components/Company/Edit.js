import React from 'react';
import PropTypes from 'prop-types';
import {Button} from 'react-bootstrap';

var editStyle = {
  
};

var form = {
  
};

class Edit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    };

    this._utility = null;
    this._name = null;
    this._contact = null;
    this.handleEditCompany = this.handleEditCompany.bind(this);
  }

  handleEditCompany(event) {
    event.preventDefault();
    
    this.props.onEditCompany({utility: this._utility.value, name: this._name.value, contact: this._contact.value, id: this.props.id});
    
    alert('This Company has been updated!');
    this._utility.value = '';
    this._name.value = '';
    this._contact.value = '';
  }

  render () {
    return (
      <div utility={editStyle}>
        <div className="text-box">
          <h1>Edit Company</h1>
          <form onSubmit={this.handleEditCompany} utility={form}>

          <input style={{borderRadius: '5px', outline: 'none', border: '1px solid grey', width: '200px', padding: '10px'}}
              type="text" placeholder="Utility" defaultValue={this.utility} id="utility"
              ref={(input) => {this.utility = input;}}/>         
            <br/><br/>

            <input style={{borderRadius: '5px', outline: 'none', border: '1px solid grey', width: '200px', padding: '10px'}}
              type="text" placeholder="Name" defaultValue={this.name} id="name"
              ref={(input) => {this._name = input;}}/>
            <br/>
            
            <input style={{borderRadius: '5px', outline: 'none', border: '1px solid grey', width: '200px', padding: '10px'}}
              type="text" placeholder="Contact" defaultValue={this.contact} id="contact"
              ref={(input) => {this._contact = input;}}/>         
            <br/><br/>

            <Button className="button3" type='submit'>Submit</Button>
            <style jsx global>{`
              .button3 {
                border-radius: 5px;
                color: #333;
                border: none;
                font-size: 20px;
              }
              .button3:hover {
                background-color: black;
                color: white;
                border: none;
              }
              .button3:focus {
                outline: none;
              }
              input{
                  text-align: center;
              }
            `}</style>
          </form> 
        </div>
      </div>
    );
  }
}

Edit.propTypes = {
  companyList: PropTypes.object,
  utility: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  contact: PropTypes.string.isRequired,
  id: PropTypes.string,
  onEditCompany: PropTypes.func
};

export default Edit;