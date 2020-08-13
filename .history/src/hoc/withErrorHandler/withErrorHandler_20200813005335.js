import React from 'react';

const withErrorHandler = (WrappedCOmponent) => {
    return(props) => {
        return (
            <WrappedCOmponent {...props}/>
        );
    }
}

export default withErrorHandler;