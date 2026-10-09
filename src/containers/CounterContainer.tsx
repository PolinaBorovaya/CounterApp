import React, { Component } from 'react';
import Counter, { CounterProps } from '../views/Counter';
import ParentCounter from '../views/ParentCounter';

interface CounterContainerProps {
    value: number;
    index: number;
    onChange: (index: number, newValue: number) => void;
}

const CounterContainer = ({index, value, onChange} : CounterContainerProps) => {
    return (
        <Counter 
            counterValue={value} 
            onIncrement={() => onChange(index, value + 1)} 
            onDecrement={() => onChange(index, value - 1)} 
            onReset={() => onChange(index, 0)}
        />
    );
};

export default React.memo(CounterContainer);