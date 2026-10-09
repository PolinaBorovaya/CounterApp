import React from "react";
import { Button } from '@progress/kendo-react-buttons';
import { plusIcon, minusIcon, arrowRotateCwIcon } from '@progress/kendo-svg-icons';
import * as styles from './styles';
import CounterContainer from "../../containers/CounterContainer";

interface ParentCounterProps {
  counters: number[];
  canRemove: boolean;
  onAdd: () => void;
  onRemove: () => void;
  onReset: () => void;
  onCounterChange: (index: number, newValue: number) => void;
};

const ParentCounter = ({counters, canRemove, onAdd, onRemove, onReset, onCounterChange} : ParentCounterProps) => {
  return (
    <div style={styles.rootStyles}>
      <div style={styles.parentCounter}>
        <h1 style={styles.titleStyles}>Управление счётчиками</h1>
        <div style={styles.buttonsStyles}>
            <Button size="large" themeColor="error" fillMode="solid" svgIcon={minusIcon} onClick={onRemove} disabled={!canRemove}>Delete first counter</Button>
            <Button size="large" fillMode="outline" svgIcon={arrowRotateCwIcon} onClick={onReset}>Initial State</Button>
            <Button size="large" themeColor="success" fillMode="solid" svgIcon={plusIcon} onClick={onAdd}>New counter</Button> 
        </div>
      </div>
      <div style={styles.countersListStyles}>
        {counters.map((value, index) => (
          <CounterContainer 
            key={index} 
            value={value} 
            index={index}
            onChange={onCounterChange}
          />
        ))}
      </div>

    </div>
  );
};

export default ParentCounter;