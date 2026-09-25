import React from "react";
import PropTypes from 'prop-types';
import { Button } from '@progress/kendo-react-buttons';
import { plusIcon, minusIcon, arrowRotateCwIcon } from '@progress/kendo-svg-icons';
import * as styles from './styles';


const Counter = ({counterValue, onIncrement, onDecrement, onReset}) => {
  return (
    <div style={styles.rootStyles}>
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

Counter.propTypes = {
    counterValue: PropTypes.number.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired,
    onReset: PropTypes.func.isRequired,
}

export default Counter;