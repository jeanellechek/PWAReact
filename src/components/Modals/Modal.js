import React from 'react';
import '.././styles.css';
import ModalContent from './ModalContent';

export default class Modal extends React.Component {
    state = { show: false }

    showModal() {
        this.setState({ show: true });
    }

    hideModal() {
        console.log("Closed");
        this.setState({ show: false });

    }

    render() {
        return (
            <main>
                <ModalContent show={this.state.show}
                    handleClose={this.hideModal.bind(this)}>
                </ModalContent>

                <button type='button' onClick={this.showModal.bind(this)}>Display Modal</button>
            </main>
        )
    }
}



