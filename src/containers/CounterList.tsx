import { useState, useCallback } from "react";
import ParentCounter from "../views/ParentCounter";

const MIN_COUNTERS = 1;
const INITIAL_COUNTER_VALUE = 0;
const INITIAL_COUNTERS: number[] = [INITIAL_COUNTER_VALUE];

const CounterList = () => {
    const [counters, setCounters] = useState<number[]>(INITIAL_COUNTERS);

    const handleAdd = useCallback(() => {
        setCounters((prev) => [
            ...prev.map((value) => (value % 2 === 0 ? value + 1 : value)),
            INITIAL_COUNTER_VALUE,
        ]);
    }, []);

    const handleRemove = useCallback(() => {
        setCounters((prev) => {
            if (prev.length <= MIN_COUNTERS) {
                return prev;
            }
            return prev
                .slice(0, -1)
                .map((value) => (value % 2 !== 0 ? value - 1 : value));
        });
    }, []);

    const handleReset = useCallback(() => {
        setCounters([...INITIAL_COUNTERS]);
    }, []);

    const handleCounterChange = useCallback((index: number, newValue: number) => {
        setCounters((prev) => prev.map((value, i) => (i === index ? newValue : value)));
    }, []);

    return (
        <ParentCounter
            counters={counters}
            canRemove={counters.length > MIN_COUNTERS}
            onAdd={handleAdd}
            onRemove={handleRemove}
            onReset={handleReset}
            onCounterChange={handleCounterChange}
        />
    );
};

export default CounterList;