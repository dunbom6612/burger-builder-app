import React, {Component} from 'react';
import Order from '../../components/Order/Order';



class Orders extends Component {
    state = {
        orders: [],
        loading: true
    }
    componentDidMount(){
        setTimeout(() => {
            this.setState({
                loading: false
            })
        },500);
    }

    render() {
        return (<div>
            <Order />
        </div>)
    }
}

export default Orders;