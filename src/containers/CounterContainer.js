import React, { Component } from 'react';
import Counter from '../views/Counter';

class CounterContainer extends Component{
    constructor(props) {
        super(props);
        this.state = { counterValue: 0 };
    }

    handleIncrement = () => {
        this.setState({ counterValue: this.state.counterValue + 1 });
    }

    handleDecrement = () => {
        this.setState({ counterValue: this.state.counterValue - 1 });
    }

    handleReset = () => {
        this.setState({ counterValue: 0 });
    }

    render() {
        const props = {
            counterValue: this.state.counterValue,
            onIncrement: this.handleIncrement,
            onDecrement: this.handleDecrement,
            onReset: this.handleReset,
        };

        return <Counter {...props} />
    }
}

export default CounterContainer;