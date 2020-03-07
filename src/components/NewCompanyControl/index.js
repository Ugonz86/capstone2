import React from 'react';
import NewCompanyForm from '../NewCompanyForm';
import PropTypes from 'prop-types';

class NewCompanyControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
    // this.handleClick = this.handleClick.bind(this);
  }

  //   handleClick(){
  //     this.setState({formVisibleOnPage: true});
  //   }

  render(){
    let currentlyVisibleContent = null;
    if (this.state.formVisibleOnPage){
      if (this.state.formVisibleOnPage){
        currentlyVisibleContent = <NewCompanyForm onNewCompanyCreation={this.props.onNewCompanyCreation}/>;
      }
    }
    return (
      <div>
        {currentlyVisibleContent}
      </div>
    );
  }
}

NewCompanyControl.propTypes = {
  onNewCompanyCreation: PropTypes.func
};

export default NewCompanyControl;