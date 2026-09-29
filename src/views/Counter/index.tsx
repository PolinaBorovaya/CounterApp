import React from "react";
import { Button } from '@progress/kendo-react-buttons';
import { plusIcon, minusIcon, arrowRotateCwIcon } from '@progress/kendo-svg-icons';
import * as styles from './styles';

export interface CounterProps {
    counterValue: number;
    onIncrement: () => void;
    onDecrement: () => void;
    onReset: () => void;
}

const Counter = ({counterValue, onIncrement, onDecrement, onReset} : CounterProps) => {
  return (
    <div style={styles.counterStyles}>
      <h1 style={styles.titleStyles}>Счётчик</h1>
      <div style={styles.valueStyles}>{counterValue}</div>
      <div style={styles.buttonsStyles}>
        <Button themeColor="error" fillMode="solid" svgIcon={minusIcon} onClick={onDecrement}>
          Decrement
        </Button>
        <Button fillMode="outline" svgIcon={arrowRotateCwIcon} onClick={onReset}>
          Reset
        </Button>
        <Button themeColor="success" fillMode="solid" svgIcon={plusIcon} onClick={onIncrement}>
          Increment
        </Button>
      </div>
    </div>
  );
};

export default Counter;