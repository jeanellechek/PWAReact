import React from 'react';
import '.././styles.css';
import './Modal.css';
import Button from '../Buttons/Button';

const ModalContent = (props) => {
  var showClass;
  (props.show === true) ? showClass = 'modal display-block'
    : showClass = 'modal display-none';

  return (
    <div className={showClass}>
      <section className='modal-main'>
        <div className="md-topDown sm-leftRight">
          <div className="titleBold centered">Are you sure you want to cancel?</div>
          <div className="body sm-topDown centered">
            This receipt will be deleted from your account</div>
          <Button type="primaryFullWidth action" text="Cancel receipt" />
          <Button type="primaryFullWidth muted xs-topDown"
            onClick={props.handleClose} text="Close" />
        </div>
      </section>
    </div>
  );
};

export default ModalContent;