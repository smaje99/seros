import PropTypes from 'prop-types';
import ReactModal from 'react-modal';

import './style.css';

const NavigationModal = ({ isOpen }) => {
    return (
        <ReactModal isOpen={isOpen} className="modal">
            <span>Modal</span>
        </ReactModal>
    )
}

NavigationModal.propTypes = {
    isOpen: PropTypes.bool.isRequired
}

export default NavigationModal;