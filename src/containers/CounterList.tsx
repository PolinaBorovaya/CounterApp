import { useState, useCallback } from "react";
import ParentCounter from "../views/ParentCounter";

const INITIAL_COUNTERS: number[] = [0];

const CounterList = () => {
    const [counters, setCounters] = useState<number[]>(INITIAL_COUNTERS);

    const handleAdd = useCallback(() => {
        setCounters((prev) => [
            ...prev.map((value) => (value % 2 === 0 ? value + 1 : value)),
            0,
        ]);
    }, []);

    const handleRemove = useCallback(() => {
        setCounters((prev) => {
            if (prev.length <= 1) {
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
            canRemove={counters.length > 1}
            onAdd={handleAdd}
            onRemove={handleRemove}
            onReset={handleReset}
            onCounterChange={handleCounterChange}
        />
    );
};

export default CounterList;