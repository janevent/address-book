import '../styles/Modal.css'

const Modal = ({handleClose, show, info}) => {
    const showHideClassName = show ? "Modal display-block" : "Modal display-none";

    return (
        <div className={showHideClassName}>
            <button type="button" onClick={handleClose}>
                 Close
            </button>
        </div>
    )
}

export default Modal;