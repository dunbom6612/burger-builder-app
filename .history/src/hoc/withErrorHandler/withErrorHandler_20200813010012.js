import React, {Component} from 'react';

import Modal from '../../components/UI/Modal';
import Aux from '../_Aux/_Aux';

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component { 
        render(){

            return (
                <Aux>
                    <Modal>
                        Somthing didn't work!
                    </Modal>
                    <WrappedComponent {...props}/>
                </Aux>
            );
        
        }
    }
}

export default withErrorHandler;