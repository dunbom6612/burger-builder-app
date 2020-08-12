import React, {Component} from 'react';

import Modal from '../../components/UI/Modal';
import Aux from '../_Aux/_Aux';

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component { 
        state = {
            error: null
        }
        componentDidMount (){
            axios.interceptors.response.use(null, error => {
                this.setState({error: error});
            });
        }

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