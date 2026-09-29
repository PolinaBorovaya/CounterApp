import React, { Component } from 'react';
import Counter, { CounterProps } from '../views/Counter';

interface CounterContainerProps {}

interface CounterContainerState {
    counterValue: number;
}

class CounterContainer extends Component<CounterContainerProps, CounterContainerState>{
    constructor(props: CounterContainerProps) {
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
        const props: CounterProps = {
            counterValue: this.state.counterValue,
            onIncrement: this.handleIncrement,
            onDecrement: this.handleDecrement,
            onReset: this.handleReset,
        };

        return <Counter {...props} />
    }
}

export default CounterContainer;