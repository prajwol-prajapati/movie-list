import React from 'react';

interface ModalPropsInterface {
  onClose: () => void,
  children: JSX.Element
}

const Modal = ({ onClose, children }: ModalPropsInterface): JSX.Element => (<div className="modal-container">
  <div className="modal">
    <div className="close-btn" onClick={onClose}><i className="fa fa-times" aria-hidden="true"></i></div>
    <div className="break"></div>
    {children}
  </div>
</div>);

export default Modal;