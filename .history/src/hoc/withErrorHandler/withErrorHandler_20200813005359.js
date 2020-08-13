import React from 'react';

import Modal from '../../components/UI/Modal';

const withErrorHandler = (WrappedCOmponent) => {
    return(props) => {
        return (
            <WrappedCOmponent {...props}/>
        );
    }
}

export default withErrorHandler;