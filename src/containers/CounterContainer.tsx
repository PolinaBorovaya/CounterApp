import React, { Component } from 'react';
import Counter, { CounterProps } from '../views/Counter';
import ParentCounter from '../views/ParentCounter';
import { useCallback } from 'react';

interface CounterContainerProps {
    value: number;
    index: number;
    onChange: (index: number, newValue: number) => void;
}

const CounterContainer = ({index, value, onChange} : CounterContainerProps) => {
    const handleIncrement = useCallback(() => {
        onChange(index, value + 1);
    }, [onChange, index, value]);

    const handleDecrement = useCallback(() => {
        onChange(index, value - 1);
    }, [onChange, index, value]);

    const handleReset = useCallback(() => {
        onChange(index, 0);
    }, [onChange, index]);

    return (
        <Counter 
            counterValue={value} 
            onIncrement={handleIncrement} 
            onDecrement={handleDecrement} 
            onReset={handleReset}
        />
    );
};

export default React.memo(CounterContainer);