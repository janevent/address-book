import React from 'react';
import '../styles/Modal.css';

const Modal = ({handleClose, show, info}) => {
    let showHideClassName = show ? "Modal display-block" : "Modal display-none";
    // <p>City: {info.location.city}</p>
    //         <p>State: {info.location.state}</p>
    //         <p>Postal Code: {info.location.postalcode}</p>
    //         <p>Phone: {info.phone}</p>
    //         <p>Cell: {info.cell}</p>
    const handleClick = () => {
        showHideClassName = "Modal display-none"
        console.log(showHideClassName)
    }
    return (
        <div className={showHideClassName}>
            <section className="main">
                <h3>Address</h3>
                <p>{info.location.street.number} {info.location.street.name}</p>
                <p>{info.location.city}, {info.location.state}</p>
                <p>{info.location.postcode}</p>
                <p>{info.phone}</p><p>{info.cell}</p>
                <button type="button" onClick={handleClick}>
                    Close
                </button>
            </section>
        </div>
    )
}

export default Modal;