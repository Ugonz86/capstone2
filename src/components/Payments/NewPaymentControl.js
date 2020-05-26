import React from 'react';
import NewPaymentForm from '../NewPaymentForm';
import PropTypes from 'prop-types';

class NewPaymentControl extends React.Component {

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
        currentlyVisibleContent = <NewPaymentForm onNewPaymentCreation={this.props.onNewPaymentCreation}/>;
      }
    }
    return (
      <div>
        {currentlyVisibleContent}
      </div>
    );
  }
}

NewPaymentControl.propTypes = {
  onNewPaymentCreation: PropTypes.func
};

export default NewPaymentControl;