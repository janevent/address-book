import React from 'react';
import '../styles/Modal.css';

class Modal extends React.Component{
   
    
    render(){
        let showHideClassName = this.props.show ? "Modal display-block" : "Modal display-none";
    return (
        <div className={showHideClassName}>
            <section className="main">
                <h3>Address</h3>
                <p>{this.props.info.location.street.number} {this.props.info.location.street.name}</p>
                <p>{this.props.info.location.city}, {this.props.info.location.state}</p>
                <p>{this.props.info.location.postcode}</p>
                <p>{this.props.info.phone}</p><p>{this.props.info.cell}</p>
                <button type="button" onClick={this.props.handleClose}>
                    Close
                </button>
            </section>
        </div>
    )
    }
}

export default Modal;